import { NextResponse } from "next/server";
let cache = {
  music: "loading",
  artist: "loading",
  image: "loading",
  start: "loading",
  end: "loading",
  title: "loading",
  showResponse: null,
  spinResponse: null,
};
let cacheRefreshTS = 0;
const cacheStaleMs = 1000 * 10; // 10 seconds

async function getSpins() {
  fetch(`https://spinitron.com/api/spins`, {
    headers: {
      'Authorization': `Bearer ${"VIT_hdbWICcgF3nGwvcLJCf6"}`
    },
    cache: 'no-store'
  }).then(r => handleSpins(r));
}

async function handleSpins(res: Response) {
  const spin = await res.json();
  cache.spinResponse = spin;
  cache.music = spin.items[0].song;
  cache.artist = spin.items[0].artist;
  cache.image = spin.items[0].image;
}

async function getShows() {
  fetch(`https://spinitron.com/api/shows`, {
    headers: {
      'Authorization': `Bearer ${"VIT_hdbWICcgF3nGwvcLJCf6"}`
    },
    cache: 'no-store'
  }).then(r => handleShow(r));

}

async function handleShow(res: Response) {
  const show = await res.json();
  const startTime = new Date(show.items[0].start);
  // Extracting hours and minutes
  const startHours = startTime.getHours();
  const startMinutes = startTime.getMinutes();

  // Formatting the output to ensure two digits for both hours and minutes
  const formattedStartTime = `${startHours.toString().padStart(2, '0')}:${startMinutes.toString().padStart(2, '0')}`;

  const endTime = new Date(show.items[0].end);
  // Extracting hours and minutes
  const endHours = endTime.getHours();
  const endMinutes = endTime.getMinutes();

  // Formatting the output to ensure two digits for both hours and minutes
  const formattedEndTime = `${endHours.toString().padStart(2, '0')}:${endMinutes.toString().padStart(2, '0')}`;

  cache.showResponse = show;
  cache.start = formattedStartTime;
  cache.end = formattedEndTime;
  cache.title = show.items[0].title;
}

export async function GET (
  request: Request
) {
  try {
    if (Date.now() > cacheRefreshTS + cacheStaleMs) {
      cacheRefreshTS = Date.now();
      await getSpins();
      await getShows();
    }
    return NextResponse.json(cache);
  } catch (error: any) {
    console.error("error", error)
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

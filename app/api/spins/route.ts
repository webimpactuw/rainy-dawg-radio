import { NextResponse } from "next/server";
let cache: any = {};
let cacheRefreshTS = 0;
const cacheStaleMs = 1000 * 10; // 10 seconds
let currMusic = "loading";
let currArtist = "loading";
let currImage = "loading";
let currStart = "loading";
let currEnd = "loading";
let currTitle = "loading";

async function getSpins() {
  console.info('Making spins network req')
  fetch(`https://spinitron.com/api/spins`, {
    headers: {
      'Authorization': `Bearer ${"VIT_hdbWICcgF3nGwvcLJCf6"}`
    },
    cache: 'no-store'
  }).then(r => handleSpins(r));
}

async function handleSpins(res: Response) {
  const spin = await res.json();
  currMusic = spin.items[0].song;
  currArtist = spin.items[0].artist;
  currImage = spin.items[0].image;
}

async function getShows() {
  console.info('Making spins network req')
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

  currStart = formattedStartTime;
  currEnd = formattedEndTime;
  currTitle = show.items[0].title;
} 

export async function GET (
  request: Request
) {
  try {
    if (Date.now() > cacheRefreshTS + cacheStaleMs) {
      console.log("reloading");
      cacheRefreshTS = Date.now();
      cache.spins = await getSpins();
      cache.shows = await getShows();
    }
    return NextResponse.json({music: currMusic, artist: currArtist, image: currImage, start: currStart, end: currEnd, title: currTitle});
  } catch {
    console.error("error")
    return new Response("error")
  }
}
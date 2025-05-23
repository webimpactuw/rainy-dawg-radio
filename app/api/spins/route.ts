import { NextResponse } from "next/server";

type Spin = { music: string; artist: string; image: string; }
type Show = { start: string; end: string; title: string; }

async function getSpins(): Promise<Spin> {
  return fetch(`https://spinitron.com/api/spins`, {
    headers: {
      'Authorization': `Bearer ${"VIT_hdbWICcgF3nGwvcLJCf6"}`
    },
    cache: 'no-store'
  }).then(async (res) => {
    const spin = await res.json();
    return {
      music: spin.items[0].song,
      artist: spin.items[0].artist,
      image: spin.items[0].image
    }
  }).catch((error) => {
    console.error("Error fetching spins:", error);
    return {
      music: "Loading...",
      artist: "Loading...",
      image: "Loading..."
    }
  });
}

async function getShows(): Promise<Show> {
  return fetch(`https://spinitron.com/api/shows`, {
    headers: {
      'Authorization': `Bearer ${"VIT_hdbWICcgF3nGwvcLJCf6"}`
    },
    cache: 'no-store'
  }).then(async (res) => {
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
  
    return {
      start: formattedStartTime,
      end: formattedEndTime,
      title: show.items[0].title
    }
  }).catch((error) => {
    console.error("Error fetching shows:", error);
    return {
      start: "Loading...",
      end: "Loading...",
      title: "Loading..."
    }
  });
}

export async function GET (
  request: Request
) {
  const spins = await getSpins();
  const shows = await getShows();
  return NextResponse.json({ ...spins, ...shows });
}

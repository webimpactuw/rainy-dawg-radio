export default async function serverPlayer() {
    const data = await fetch('https://spinitron.com/api/playlists?count=1&access-token=VIT_hdbWICcgF3nGwvcLJCf6', { next: {revalidate: 100} })
                    .then(res => {res.json().then(data => {
                            return [data.items[0].title, data.items[0].image]; // Here's your data in JSON format
                        })})
                    .catch(err => console.error(err));
}
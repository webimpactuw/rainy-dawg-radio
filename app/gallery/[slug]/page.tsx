'use client'
import { useState, useEffect } from 'react';
import { client } from '../../../sanity/lib/client'
import Image from 'next/image';
import Carousel from '../../ui/Carousel';

const isRecord = (val: unknown): val is Record<string, unknown> => {
    return val !== null && typeof val === "object";
};

export default function Post({ params }) {
    const [post, setPost] = useState({kind: "loading", name: "", date: "", coverImage: "", coverImageAlt: "", images: []});

    async function getData() {
        const query = `*[_type == "event" && slug.current == '${params.slug}']{ 
            name,
            date,
            slug,
            coverImage {
                    asset -> {
                      url
                    }, 
                    alt
                },
            images[] {
              "url": asset -> {url}, 
                    alt
            }
        }`;
        const res = await client.fetch(query)
            .then(res => handleResp(res))
            .catch(err => console.error(err));
        return res;
    }

    const handleResp = (res: Response): void => {
        if (!isRecord(res[0])) {
            console.error("bad data", res);
            return;
        }

        if (typeof res[0].name === "string"
            && typeof res[0].date === "string"
            && isRecord(res[0].coverImage) 
            && isRecord(res[0].coverImage.asset) 
            && typeof res[0].coverImage.asset.url === "string"
            && typeof res[0].coverImage.alt === "string"
            && Array.isArray(res[0].images)) {
            const date = new Date(res[0].date);
            // Convert to a more readable format
            // You can adjust the options to get the format you prefer
            // const options = { year: 'numeric', month: 'long', day: 'numeric' };
            const readableDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
            setPost({kind: "loaded", name: res[0].name, date: readableDate, coverImage: res[0].coverImage.asset.url, coverImageAlt: res[0].coverImage.alt, images: res[0].images});
        }

    };
    useEffect(() => {
            const fetchPosts = async () => {
                const fetchedPost = await getData();
                //console.log(fetchedPost);
            };
    
            fetchPosts();
        }, []);

    return (<div className="w-full h-max flex justify-center items-center flex-col">
                {post.kind === "loaded" ? (
                    <div className='items-center'>
                        <h1 className='text-3xl text-center p-5'>
                            {post.name}
                        </h1>
                        <h5 className='text-center'>
                            Published: {post.date}
                        </h5>
                        <Carousel>
                        {post.images.map((image, index) => (
                            <div key={index}>
                                <Image src={image.url.url} alt={image.alt} height={1000} width={1000} className="w-screen h-screen object-contain p-20" />
                            </div>
                        ))}
                        </Carousel>
                    </div>
                ) : (<></>)}

            </div>)
};
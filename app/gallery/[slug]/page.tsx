'use client'
import { useState } from 'react';
import { client } from '../../../sanity/lib/client'
import Image from 'next/image';
import Carousel from '../../ui/Carousel';

export const isRecord = (val: unknown): val is Record<string, unknown> => {
    return val !== null && typeof val === "object";
};

export default function Post({ params }) {
    const [post, setPost] = useState({kind: "loading", name: "", date: "", coverImage: "", coverImageAlt: "", images: []});

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
    }`

    const res = client.fetch(query)
                    .then(res => handleResp(res))
                    .catch(err => console.error(err));

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
            && Array.isArray(res[0].images)
        ) {
            setPost({kind: "loaded", name: res[0].name, date: res[0].date, coverImage: res[0].coverImage.asset.url, coverImageAlt: res[0].coverImage.alt, images: res[0].images});
        }

    };

    return (<div className="w-full h-max flex justify-center items-center flex-col">
                {post.kind === "loaded" ? (
                    <div className='items-center'>
                        <h1 className='text-3xl text-center p-5'>
                            {post.name}
                        </h1>
                        <h5 className='text-center'>
                            Published at: {post.date}
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
}
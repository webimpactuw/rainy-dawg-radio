'use client'
import { useState } from 'react';
import { client } from '../../../sanity/lib/client'
import Image from 'next/image';
import { PortableText } from '@portabletext/react'

const isRecord = (val: unknown): val is Record<string, unknown> => {
    return val !== null && typeof val === "object";
};

export default function Post({ params }) {
    const [post, setPost] = useState({kind: "loading", title: "", author: "", publishedAt: "", imageUrl: "", body: []});

    const query = `*[_type == "post" && slug.current == '${params.slug}']{ 
        title,
        slug,
        author,
        mainImage {
            asset -> {
              url
            }
        },
        categories,
        publishedAt,
        body,
      }`;


    const res = client.fetch(query)
                    .then(res => handleResp(res))
                    .catch(err => console.error(err));

    const handleResp = (res: Response): void => {
        if (!isRecord(res[0])) {
            console.error("bad data", res);
            return;
        }

        if (typeof res[0].title === "string" 
            && isRecord(res[0].mainImage) 
            &&  isRecord(res[0].mainImage.asset) 
            && typeof res[0].mainImage.asset.url === "string" 
            && Array.isArray(res[0].body) 
            && typeof res[0].publishedAt === "string") {
            const date = new Date(res[0].publishedAt);

            // Convert to a more readable format
            // You can adjust the options to get the format you prefer
            // const options = { year: 'numeric', month: 'long', day: 'numeric' };
            const readableDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
            setPost({kind: "loaded", title: res[0].title, author: "William Park", publishedAt: readableDate, imageUrl: res[0].mainImage.asset.url, body: res[0].body});
        }
    
    };

    return (<div className="w-full h-max flex justify-center items-center flex-col">
                {post.kind === "loaded" ? (
                    <div className='items-center'>
                        <h1 className='text-3xl text-center p-5'>
                            {post.title}
                        </h1>
                        <h5 className='text-center'>
                            Published at: {post.publishedAt}
                        </h5>
                        <br/>
                        <Image src={post.imageUrl} width={800} height={800} alt={"alt"} className='mx-auto p-5'/>
                        <br/>
                        <div className="w-[60%] mx-auto">
                            <PortableText
                                value={post.body}
                            />
                        </div>
                    </div>
                ) : (<></>)}

            </div>)
}
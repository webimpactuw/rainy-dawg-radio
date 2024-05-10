'use client'
import Image from "next/image"
import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";
import { client } from "../../sanity/lib/client";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

async function getData(page = 0, pageSize = 9) {
  const query = `*[_type == "post"] | order(publishedAt desc) [0] {
    title,
    slug,
    author,
    mainImage {
      asset -> {
        url
      }
    },
    summary,
    categories,
    publishedAt,
    body
  }`

  const res = await client.fetch(query);
  return res;
}

export default function MainCarousel() {
  const [post, setPost] = useState();

  useEffect(() => {
    const fetchedPost = async () => {
      const fetchedPost = await getData();
      setPost(fetchedPost);
      console.log(fetchedPost);
    };

    fetchedPost();
  }, []);

  return (
    <Carousel>
      <div className="flex flex-row p-10">
        <div className="w-1/2 pl-20 self-center">
            {post ? (<Image src={post.mainImage.asset.url} width={500} height={500} objectFit="cover" alt="Descriptive alt text"/>) : (<></>)}
          {/* <Image src="./latestblogsticker.svg" width={300} height={300} alt=""/> */}
        </div>
        <div className="w-1/2 pr-20 self-center">
          <div className="text-3xl font-bold">
            {post ? (<>{post.title}</>) : (<></>)}
          </div>
          <div className="py-5">
            {post ? (<>{post.summary}</>) : (<></>)}
          </div>
          <div>
            {post ? (<Link href={`/blog/${post.slug.current}`} className="hover:underline">
              Read more
            </Link>):(<></>)}
          </div>
        </div>
      </div>
      <div>
        Slide 2
      </div>
    </Carousel>
  );
};

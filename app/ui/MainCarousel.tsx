'use client'
import Image from "next/image"
import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";
import { client } from "../../sanity/lib/client";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

async function getData() {
  const query = `*[_type == "post"] | order(publishedAt desc) [0..1] {
    title,
    slug,
    author,
    summary,
    mainImage {
      asset -> {
        url
      }
    },
    publishedAt,
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
      <div className="flex flex-col lg:flex-row lg:p-10">
        <div className="lg:w-1/2 lg:pl-20 self-center">
            {post ? (<Image src={post[0].mainImage.asset.url} className="w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] object-cover" width={500} height={500} objectFit="cover" alt="Descriptive alt text"/>) : (<></>)}
          {/* <Image src="./latestblogsticker.svg" width={300} height={300} alt=""/> */}
        </div>
        <div className="px-20 lg:w-1/2 lg:pr-20 self-center">
          <div className="">
            Blog Post
          </div>
          <div className="large-heading font-bold">
            {post ? (<>{post[0].title}</>) : (<></>)}
          </div>
          <div className="py-5 hidden lg:flex">
            {post ? (<>{post[0].summary}</>) : (<></>)}
          </div>
          <div>
            {post ? (<Link href={`/blog/${post[0].slug.current}`} className="hover:underline">
              Read more
            </Link>):(<></>)}
          </div>
        </div>
      </div>
      <div className="flex flex-row p-10">
        <div className="w-1/2 pl-20 self-center">
            {post ? (<Image src={post[1].mainImage.asset.url} className="w-[500px] h-[500px] object-cover" width={500} height={500} objectFit="cover" alt="Descriptive alt text"/>) : (<></>)}
          {/* <Image src="./latestblogsticker.svg" width={300} height={300} alt=""/> */}
        </div>
        <div className="w-1/2 pr-20 self-center">
          <div className="text-3xl font-bold">
            {post ? (<>{post[1].title}</>) : (<></>)}
          </div>
          <div className="py-5">
            {post ? (<>{post[1].summary}</>) : (<></>)}
          </div>
          <div>
            {post ? (<Link href={`/blog/${post[1].slug.current}`} className="hover:underline">
              Read more
            </Link>):(<></>)}
          </div>
        </div>
      </div>
    </Carousel>
  );
};

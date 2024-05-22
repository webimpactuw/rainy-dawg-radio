'use client'
import React, { useState, useEffect } from 'react';
import { client } from '../../sanity/lib/client';
import Link from 'next/link';
import Image from 'next/image';


async function getData(page = 0, pageSize = 9) {
  const query = `*[_type == "post"]{
    title,
    slug,
    mainImage {
      asset -> {
        url
      }
    },
    categories,
    publishedAt,
    "total": count(*[_type == "post"])
  } | order(publishedAt desc) [${page * pageSize}...${(page + 1) * pageSize}]`;

  const res = await client.fetch(query);
  return res;
}

export default function Post() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 9; // You can adjust the number of posts per page

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await getData(currentPage, pageSize);
      setPosts(fetchedPosts);
      console.log(fetchedPosts)
    };

    fetchPosts();
  }, [currentPage]);

  return (
    <div className="w-screen">
      <header className="bg-rdr-purple py-8">
          <div className='flex flex-row justify-center'>
              <Image src="/logoGallery.png" alt="logo one" width={150} height={150}
              className='z-10'/>
              <div className='font-mono large-heading p-4 pt-16 font-semibold z-10'>
                  Blog
              </div>
          </div>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {posts.map((post, index) => (
          <Link href={`/blog/${post.slug.current}`} className="relative outline outline-1 rounded-sm bg-white outline-gray-300
                    p-2 mx-10 my-10 hover:shadow-lg">
          <Image src={post.mainImage.asset.url} alt={post.title} width='400' height='400' className="w-[400px] h-[400px] p-6 object-cover" />
          <h3 className="text-2xl text-center font-semibold my-2">{post.title}</h3>
          <p className="text-center mb-8">Published: {new Date(post.publishedAt).toLocaleDateString()}</p>
          <div className='absolute -left-6 -bottom-6 outline outline-1 rounded-sm outline-gray-300
          h-full w-full bg-white -z-10'>
          </div>
          </Link>
        ))}
      </div>

      {posts[0] ? (<div className="flex justify-between mt-4 mx-10">
        <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 0}
            className="relative outline outline-1 rounded-sm bg-white outline-gray-300 p-2 hover:shadow-lg disabled:opacity-50"
        >
            Previous
        </button>
        <button
            onClick={() => setCurrentPage(currentPage + 1)}
            // disabled={currentPage === (posts[0].total / 9)}
            className="relative outline outline-1 rounded-sm bg-white outline-gray-300 p-2 hover:shadow-lg"
        >
            Next
        </button>
      </div>) : (<></>)}
    </div>
  );
}
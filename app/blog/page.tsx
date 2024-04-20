'use client'
import React, { useState, useEffect } from 'react';
import { client } from '../../sanity/lib/client';
import Link from 'next/link';


async function getData(page = 0, pageSize = 9) {
  const query = `*[_type == "post"]{
    title,
    slug,
    mainImage,
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
    };

    fetchPosts();
  }, [currentPage]);

  return (
    <div className="space-y-4 ">
      <div className="grid grid-cols-3 gap-4">
        {posts.map((post, index) => (
          <div key={index} className="p-4 bg-white rounded-lg shadow-md">
            <p className="text-xl font-semibold">{post.title}</p>
            <p className="text-gray-600">Published: {new Date(post.publishedAt).toLocaleDateString()}</p>
            <Link href={`/blog/${post.slug.current}`} className="text-blue-500 hover:underline">
              Read more
            </Link>
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-4">
        <button 
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 0}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          Previous
        </button>
        <button 
          onClick={() => setCurrentPage(currentPage + 1)}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
        >
          Next
        </button>
      </div>
    </div>
  );  
}
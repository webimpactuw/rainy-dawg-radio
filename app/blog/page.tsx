import React from 'react';
import { client } from '../../sanity/lib/client';
import Link from 'next/link';


async function getData() {
  // const slug = 
  
  const query = `*[_type == "post"]{
    title,
    slug,
    mainImage,
    categories,
    publishedAt,
  }`;

  const res = await client.fetch(query);
 
  return res;
}

export default async function Post() {
  const posts = await getData();

  return (
    <div className="space-y-4">
        {posts.map((post, index) => (
            <div key={index} className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-md">
            <p className="text-xl font-semibold">{post.title}</p>
            <p className="text-gray-600">Published: {new Date(post.publishedAt).toLocaleDateString()}</p>
            <Link href={`/blog/${post.slug.current}`} className="text-blue-500 hover:underline">
                Read more
            </Link>
            </div>
        ))}
    </div>
  );
};
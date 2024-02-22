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

const Post = async () => {
  const posts = await getData();
//   console.log(posts);
  return (
    <div>
      {posts.map((post, index) => (
        <div key={index}>
          <p>title: {post.title}</p>
          <p>published: {post.publishedAt}</p>
          <Link href={`/blog/post/${post.slug.current}`}>link</Link>
        </div>
      ))}
    </div>
  );
};

export default Post;
import React from 'react'
import { client } from '../../sanity/lib/client'
import Link from 'next/link';

async function getStaticProps() {
  const query = `*[_type == "post"]{
    title,
    slug,
    mainImage,
    categories,
    publishedAt,
  }`;

  const data = await client.fetch(query);

  return data;
}

const Blog = async () => {
  const posts = await getStaticProps();

  console.log(posts);
  return (
    <div>
      {posts.map((post, index) => (
        <div key={index}>
          <p>title: {post.title}</p>
          <p>published: {post.publishedAt}</p>
          <Link href={`/blog/${post.slug.current}`}>link</Link>
        </div>
      ))}
    </div>
  )
}

export default Blog
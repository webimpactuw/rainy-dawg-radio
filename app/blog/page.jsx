import React from 'react'
import {client} from '../sanity'

async function getData() {
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
  const data = await getData();

  console.log(data);
  return (
    <div>
      title:
      {data[0].title} 
      published:
      {data[0].publishedAt}
      <a href={`/blog/${data[0].slug.current}`}>link</a>
      title:
      {data[1].title} 
      published:
      {data[1].publishedAt}
    </div>
  )
}

export default Blog
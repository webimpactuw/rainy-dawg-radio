import React from 'react';
import { client } from '../../../sanity/lib/client'


async function getData(slug) {
  const query = `*[_type == "post" && slug.current == '${slug}']{ 
    title,
    slug,
    mainImage,
    categories,
    publishedAt,
  }`;

  const res = await client.fetch(query);
 
  return res;
}


const Post = async ({params}) => {
  const post = await getData(params.slug);

  return (
    <article>
      <h1>{post[0].title}</h1>
    </article>
  );
};

export default Post;
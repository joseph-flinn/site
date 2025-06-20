import { json } from '@sveltejs/kit';

import { getPosts } from '$lib/posts.js';


export const GET = async () => {
  const posts = await getPosts();
  return json(posts);
}

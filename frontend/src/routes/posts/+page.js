import { getPosts } from '$lib/posts.js';

export const load = async () => {
  return {
    posts: await getPosts()
  };
}

import { getPosts } from '$lib/posts.js';

export const load = async ({fetch}) => {
   return {
     posts: await getPosts()
   };
}

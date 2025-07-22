//import { getApiPostList } from '$lib/utils/loader.js';
import { getPosts } from '$lib/posts.js';

export const load = async ({fetch}) => {

  //return await fetch('/api/posts')

   return {
     posts: await getPosts()
   };
}

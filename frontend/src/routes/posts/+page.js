import { getPosts } from '$lib/posts.js';

export async function load() {
  return {
    posts: await getPosts()
  };
}


//import { getPostList } from '$lib/utils/loader.js';

//export const load = async ({ fetch }) => {
//    const response = await fetch('api/posts')
//    const posts = await response.json()
//
//    return { posts }
//    //return getPostList(fetch);
//}

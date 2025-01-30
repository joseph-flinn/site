import { error } from '@sveltejs/kit';

export const load = async ({fetch, params}) => {
  //return getPost(params.post, fetch);
  try {
    const post = await import(`../../../lib/posts/${params.post}.md`);

    return {
      ...post.metadata, 
      published: post.metadata.published.split("T")[0],
      content: post.default,
    }

  }
  catch(err) {
    error(404, `Could not find ${params.slug}`)
  }
}

//import { getPost } from '$lib/utils/loader.js';
//
//export const load = async ({fetch, params}) => {
//  return getPost(params.post, fetch);
//}

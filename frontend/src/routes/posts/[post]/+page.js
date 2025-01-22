import { error } from '@sveltejs/kit';

export const load = async ({fetch, params}) => {
  //return getPost(params.post, fetch);
  try {
    const post = await import(`../../../lib/posts/${params.post}.md`);

    return {
      content: post.default,
      metadata: { ...post.metadata }
    }

  }
  catch(err) {
    error(404, err)
  }
}

//import { getPost } from '$lib/utils/loader.js';
//
//export const load = async ({fetch, params}) => {
//  return getPost(params.post, fetch);
//}

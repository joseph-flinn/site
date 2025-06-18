import { error } from '@sveltejs/kit';

import { formatDate } from '$lib/utils/date.js';


export const load = async ({fetch, params}) => {
  //return getPost(params.post, fetch);
  try {
    const post = await import(`../../../posts/${params.post}.md`);

    return {
      ...post.metadata, 
      published: formatDate(post.metadata.published),
      readEstimate: 0,
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

export const prerender = true;

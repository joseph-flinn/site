import { getPosts } from '$lib/posts.js';
import { error } from '@sveltejs/kit';

import { formatDate } from '$lib/utils/date.js';


export async function load({ params }) {
  try {
    const post = await import(`../../../../posts/${params.post}.md`);
    return {
      ...post.metadata, 
      published: formatDate(post.metadata.published),
      content: post.default,
    }
  } catch (e) {
    console.error('Failed to load post:', params.post, e);
    throw error(404, `Post not found: ${params.post}`);
  }
}


// The entries() function ensures all blog posts are discovered during prerendering, making the site
// completely static while maintaining SvelteKit's developer experience.
export async function entries() {
  const posts = await getPosts();
  return posts.map(post => ({ 
    post: post.slug || post.path 
  }));
}

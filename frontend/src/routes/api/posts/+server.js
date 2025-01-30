import { json } from '@sveltejs/kit';


const getPosts = async () => {
  let posts = [];

  const paths = import.meta.glob('/src/lib/posts/*.md', { eager: true });

  for (const path in paths) {
    const file = paths[path];
    const slug = path.split('/').at(-1)?.replace('.md', '');

    if (file && typeof file === 'object' && 'metadata' in file && slug) {
      const metadata = file.metadata;
      const post = { 
        ...metadata, 
        slug: slug, 
        published: metadata.published.split("T")[0]
      };

      posts.push(post);
    } else {
      console.log(`${slug}`);
    }
  }

  posts = posts.sort((first, second) => (
    new Date(second.published).getTime() - new Date(first.published).getTime()
  ))

  return posts;
};


export const GET = async () => {
  //const posts = await fetchMarkdownPosts();
  const posts = await getPosts();
  return json(posts);
}

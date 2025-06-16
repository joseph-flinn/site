import { json } from '@sveltejs/kit';


const getPosts = async () => {
  let posts = [];

  const processedPaths = import.meta.glob('/src/lib/posts/*.md', { eager: true });
  const rawPaths = import.meta.glob('/src/lib/posts/*.md', { eager: true, as: 'raw'});

  for (const path in processedPaths) {
    const file = processedPaths[path];
    const rawContent = rawPaths[path];
    const slug = path.split('/').at(-1)?.replace('.md', '');

    if (file && typeof file === 'object' && 'metadata' in file && slug) {
      const metadata = file.metadata;

      // Extract content from raw markdown (skip frontmatter)
      const contentOnly = rawContent.split('---').slice(2).join('---').trim();
      const wordCount = contentOnly.split(/\s+/).filter(word => word.length > 0).length;
      const readEstimate = Math.round(wordCount / 200);

      const post = { 
        ...metadata, 
        slug: slug, 
        published: metadata.published.split("T")[0],
        readEstimate: readEstimate
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

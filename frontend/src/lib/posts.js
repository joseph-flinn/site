export async function getPosts() {
  const modules = import.meta.glob('/src/posts/*.md');
  const posts = [];
  
  for (const path in modules) {
    const post = await modules[path]();

    posts.push({
      ...post.metadata,
      published: post.metadata.published.split("T")[0],
      path: path.replace('/src/posts/', '').replace('.md', '')
    });
  }
  
  return posts.sort((a, b) => new Date(b.published) - new Date(a.published));
}

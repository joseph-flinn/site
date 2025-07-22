const allPostFiles = import.meta.glob('/posts/*.md', { eager: true });

export async function getPosts() {
  const posts = Object.entries(allPostFiles).map(([path, module]) => {
    return {
      ...module.metadata,
      published: module.metadata.published.split("T")[0],
      path: path.replace('/posts/', '').replace('.md', '')
    }
  })
  
  return posts.sort((a, b) => new Date(b.published) - new Date(a.published));
}

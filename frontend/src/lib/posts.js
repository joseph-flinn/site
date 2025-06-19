export async function getPosts() {
  const modules = import.meta.glob('/src/posts/*.md');
  const posts = [];
  
  for (const path in modules) {
    const post = await modules[path]();

    //const wordCount = data.content.split(" ").reduce((sum, word) => sum += (word != "") ? 1 : 0, 0);
    //const readEstimate = Math.round( wordCount / 200)

    posts.push({
      ...post.metadata,
      published: post.metadata.published.split("T")[0],
      path: path.replace('/src/posts/', '').replace('.md', '')
    });
  }
  
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

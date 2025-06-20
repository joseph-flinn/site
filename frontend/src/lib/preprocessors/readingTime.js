export const readingTimePreprocessor = () => {
  return {
    name: 'reading-time',
    markup({ content, filename }) {
      if (filename?.endsWith('.svx') || filename?.endsWith('.md')) {
        // Extract text content (remove markdown syntax)
        const textContent = content
          .replace(/^---[\s\S]*?---/, '') // Remove frontmatter
          .replace(/!\[.*?\]\(.*?\)/g, '') // Remove images
          .replace(/\[.*?\]\(.*?\)/g, '$1') // Remove links, keep text
          .replace(/```[\s\S]*?```/g, '') // Remove code blocks
          .replace(/`[^`]*`/g, '') // Remove inline code
          .replace(/#{1,6}\s/g, '') // Remove headers
          .replace(/[*_~]/g, ''); // Remove emphasis

        const wordCount = textContent.trim().split(/\s+/).length;
        const readingTime = Math.ceil(wordCount / 200); // 200 WPM average

        // Inject reading time into frontmatter or as a variable
        const updatedContent = content.replace(
          /^(---[\s\S]*?)---/,
          `$1readingTime: ${readingTime}\n---`
        );

        return { code: updatedContent };
      }
    }
  };
}

import { visit } from 'unist-util-visit'; 
import { loadEnv } from 'vite';


const applyTailwindClasses = (nodeType, classes) => {
  return (tree) => {
    visit(tree, nodeType, (node) => {
      // Create class name properties if they don't exist
      if (!node.data) {
        node.data = {}
      }
      if (!node.data.hProperties) {
        node.data.hProperties = {}
      }
      
      // Add your custom classes
      node.data.hProperties.className = classes.split(" ");
    })
  }
}


export const remarkTableWrap = () => {
  return (tree) => {
    visit(tree, 'table', (node, index, parent) => {
      const wrappedNode = {
        type: 'div',
        data: {
          hName: 'div',
          hProperties: {
            className: 'py-2 overflow-x-auto'
          }
        },
        children: [{ ...node }]
      };
      parent.children[index] = wrappedNode;
    });
  };
}


export const remarkInlineCodeStyle = () => {
  return applyTailwindClasses(
    'inlineCode', 
    'bg-tin-200 dark:bg-tin-800 p-1 text-xs font-mono dark:border-tin-700'
  )
}


export const remarkTableCell = () => {
  return applyTailwindClasses(
    'tableCell', 
    'border-2 border-tin-700 p-3'
  )
}


export const remarkDynamicBlobLinks = () => {
  const env = loadEnv(process.env.APP_ENV, process.cwd(), '')

  return (tree) => {
    visit(tree, 'image', (node) => {
      if (node.url.startsWith('/')) {
        node.url = env.PUBLIC_IMAGESOURCE + node.url;
      }
    });
  };
}

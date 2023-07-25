import posts from '../../posts.json';

export const GET = async () => {
  return new Response(JSON.stringify(posts));
};



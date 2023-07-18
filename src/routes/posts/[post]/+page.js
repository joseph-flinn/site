//import { postsData } from '../../../data.js';
import posts from '../../../posts.json';

export const load = ({ params }) => {
    return {
        ...posts[params.post]
    };
}

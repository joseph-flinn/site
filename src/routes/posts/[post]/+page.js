import { postsData } from '../../../data.js';

export const load = ({ params }) => {
    return {
        ...postsData[params.post]
    };
}

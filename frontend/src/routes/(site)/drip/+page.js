import { getDropList } from '$lib/utils/loader.js';

export const load = async ({fetch}) => {
    return getDropList(fetch);
}

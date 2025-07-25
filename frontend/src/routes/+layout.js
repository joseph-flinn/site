import { error } from '@sveltejs/kit'

export const prerender = true
export const ssr = true
//export const csr = true

export const load = async ({ url }) => {
  try {
    return {
      path: url.pathname
    }
  }
  catch(err) {
      error(500, err);
  }
}


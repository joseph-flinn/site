<script>
  import { page } from '$app/stores';

  import "../app.css";
  import { getImageUrl } from '$lib/utils/loader.js'

  $: pageData = $page.data.data ?? {}
</script>

<svelte:head>
  <title>{ pageData.title ?? "joseph.flinnlab.com" }</title>
  <meta name="description" content={ pageData.description ?? "Joseph Flinn's personal website that includes a blog, thought feed, and a resume."}/>
  <meta property="og:type" content={ pageData.title ? "article" : "website" } />
  <meta property="og:title" content={ pageData.title ?? "joseph.flinnlab.com"} />
  <meta property="og:image" content={getImageUrl('/jf-icon.png')} />
  <meta property="og:description" content={ pageData.description ?? "Joseph Flinn's personal website that includes a blog, thought feed, and a resume."} />
  <meta property="og:url" content={window.location.href} />
</svelte:head>

<slot />

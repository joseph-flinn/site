<script>
  import "../app.css";

  import { base } from '$app/paths'
  import { page } from '$app/stores';

  import CentralColumn from '$lib/layouts/svelte/CentralColumn.svelte';
  import HorizontalNav from '$lib/components/HorizontalNav.svelte';
  import Footer from '$lib/components/Footer.svelte';

  import { getImageUrl } from '$lib/utils/loader.js'
  import { siteNav } from '$lib/config';

  $: pageData = $page.data.data ?? {}

  console.log(`PageData: ${page.data}`)
</script>

<svelte:head>
  <title>{ pageData.title ?? "joseph.flinnlab.com" }</title>
  <meta name="description" content={ pageData.description ?? "Joseph Flinn's personal website that includes a blog, thought feed, and a resume."}/>
  <meta property="og:type" content={ pageData.title ? "article" : "website" } />
  <meta property="og:title" content={ pageData.title ?? "joseph.flinnlab.com"} />
  <meta property="og:image" content={getImageUrl('/jf-icon.png')} />
  <meta property="og:description" content={ pageData.description ?? "Joseph Flinn's personal website that includes a blog, thought feed, and a resume."} />
  <meta property="og:url" content={base} />
</svelte:head>

<CentralColumn>
  <HorizontalNav pages={siteNav}/>
  <div class="flex flex-col grow">
    <slot></slot>
  </div>
  <Footer />
</CentralColumn>

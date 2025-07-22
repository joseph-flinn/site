<script>
  export let href = "";
  export let title = undefined;
  export let text = "";

  import { getImageUrl } from '$lib/utils/loader.js'

  const imgUrl = href.startsWith("/posts") ? getImageUrl(href) : href

</script>

<div>
  <img
    src={imgUrl}
    alt={text}
    class="block w-full mx-auto mt-8 mb-2"
  />
  <div class="mb-8 text-center text-xs">{text}</div>
</div>

<script context="module">
</script>

<script>
  export let title;
  export let published;
  export let description;
  export let readingTime;
  export let slug;

  import { formatDate } from '$lib/utils/date.js';

</script>



<div class="w-full text-center text-xl">
  <div class="p-4">
    {title}
  </div>
</div>

<div class="flex w-full">
    <div class="grow p-2">
    {formatDate(published)}
  </div>
  <div class="p-2">
    {readingTime} mins
  </div>
</div>

<div class="py-8 px-4">
  <slot />
</div>

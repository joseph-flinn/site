<script>
  export let header;
  export let rows;

  export let ctx;
  console.log(`Context: ${ctx}`)
  //console.log(`Rows: ${rows}`)
  console.log(`TableRenderer props: ${JSON.stringify($$props, null, 4)}`);
</script>

<table>
  <thead>
    <tr>
      {#each table[0] as header}
        <th style="color: red;">{header}</th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each table.slice(1) as row}
      <tr>
        {#each row as cell}
          <td style="color: blue;">{cell}</td>
        {/each}
      </tr>
    {/each}
  </tbody>
</table>

<style>
  table {
    border-collapse: collapse;
    overflow-x: auto;
  }
</style>

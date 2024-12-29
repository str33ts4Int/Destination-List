<script>
    import DestinationCard from "$lib/components/DestinationCard.svelte";
    let { data } = $props();
  </script>
  
  <h1>My List</h1>
  <h3>Here are all the destinations in your list</h3>
  
  <div class="row mt-3">
    {#each data.myList as destination}
      <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
        <DestinationCard {destination}></DestinationCard>
      </div>
    {/each}
  </div>
<script>
  import DestinationCard from "$lib/components/DestinationCard.svelte";
  let { data } = $props();
</script>


<div class="container d-flex flex-column min-vh-100">
<div class="container my-5">
  <h1 class="text-center text-primary display-4 fw-bold">My List</h1>
  <h3 class="text-center text-secondary mb-4">Here are all the destinations in your list</h3>

  <div class="row mt-3">
    {#each data.myList as destination}
      <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
        <DestinationCard {destination}></DestinationCard>
      </div>
    {/each}
  </div>
</div>
</div>

<style>

  h1 {
    margin-bottom: 1rem;
  }

  h3 {
    margin-bottom: 2rem;
  }

  .row {
    margin-top: 2rem;
  }

</style>
<script>
    import DestinationCard from "$lib/components/DestinationCard.svelte";
    let { data } = $props();
</script>

<h1>Destinations</h1>
<h3>Here are all the destinations</h3>

<div>
    <a href="/destinations/create" class="btn btn-primary">Add New Destination</a>
</div>
<div class="row mt-3">
    {#each data.destinations as destination}
        <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
            <DestinationCard {destination}></DestinationCard>
        </div>
    {/each}
</div>
<script>
    import DestinationCard from "$lib/components/DestinationCard.svelte";
    let { data } = $props();
</script>

<div class="container">
    <!-- Seitentitel -->
    <header class="text-center py-4">
        <h1 class="display-4 fw-bold text-primary mt-4">Explore Destinations</h1>
        <p class="text-secondary fs-5">Discover your next adventure from our curated list of destinations!</p>
    </header>

    <!-- Add New Destination Button -->
    <div class="d-flex justify-content-center mb-4">
        <a href="/destinations/create" class="btn btn-lg btn-success rounded-pill shadow px-4 py-2">
            ➕ Add New Destination
        </a>
    </div>

    <!-- Destinations Grid -->
    <div class="row g-4 mt-3">
        {#each data.destinations as destination}
            <div class="col-sm-6 col-md-4 col-lg-3">
                <DestinationCard {destination}></DestinationCard>
            </div>
        {/each}
    </div>
</div>


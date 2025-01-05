<script>
    import WeatherCard from '$lib/components/WeatherCard.svelte';
    let { data } = $props();
</script>

<h1 class="display-4 text-primary fw-bold mt-4">Weather for destinations</h1>
<div class="row">
    {#each data.destinations as destination}
        <div class="col-md-4 mb-4">
            <WeatherCard {destination} />
        </div>
    {/each}
</div>
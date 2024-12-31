<script>
    import WeatherCard from '$lib/components/WeatherCard.svelte';
    let { data } = $props();
</script>

<h1 class="text-center mb-4">Weather for Destinations</h1>

<div class="row">
    {#each data.destinations as destination}
        <div class="col-md-4 mb-4">
            <WeatherCard {destination} />
        </div>
    {/each}
</div>

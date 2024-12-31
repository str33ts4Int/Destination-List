<script>
    export let data;
    import { onMount } from "svelte";
    import "leaflet/dist/leaflet.css";
    import MapDestinationCard from "$lib/components/MapDestinationCard.svelte";

    let map;

    async function geocodeCity(cityname) {
        try {
            const response = await fetch(
                `https://nominatim.openstreetmap.org/search?city=${encodeURIComponent(cityname)}&format=json`,
            );
            const result = await response.json();
            console.log(`Geocoding result for ${cityname}:`, result); // Debug: Log geocoding response
            if (result && result.length > 0) {
                return {
                    lat: parseFloat(result[0].lat),
                    lon: parseFloat(result[0].lon),
                };
            }
            console.error(`Geocoding failed for city: ${cityname}`);
        } catch (error) {
            console.error(`Error geocoding city ${cityname}:`, error);
        }
        return null;
    }

    async function initializeMap() {
        const { Map, TileLayer, Marker, icon } = await import("leaflet");

        // Initialize the map centered on world view
        map = new Map("map").setView([0, 0], 2);

        new TileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        if (data && data.destinations) {
            console.log("Destinations data:", data.destinations); // Debug: Log all destinations
            for (const destination of data.destinations) {
                const coords = await geocodeCity(destination.name);
                if (coords) {
                    const customIcon = icon({
                        iconUrl:
                            "https://cdn-icons-png.flaticon.com/512/684/684908.png", // Custom marker icon
                        iconSize: [25, 41],
                        iconAnchor: [12, 41],
                        popupAnchor: [1, -34],
                    });

                    const marker = new Marker([coords.lat, coords.lon], {
                        icon: customIcon,
                    })
                        .addTo(map)
                        .bindPopup(
                            `<b>${destination.name}</b><br>${destination.description}`,
                        );
                    console.log(
                        `Marker added for ${destination.name} at`,
                        coords,
                    ); // Debug: Log marker info
                } else {
                    console.warn(
                        `No coordinates found for ${destination.name}`,
                    ); // Debug: Log missing coords
                }
            }
        } else {
            console.error("No destinations available in data");
        }
    }

    onMount(() => {
        initializeMap();
    });
</script>

<h1 class="text-center mb-4">Destinations on the Map</h1>

<div
    id="map"
    style="height: 800px; border-radius: 8px; overflow: hidden;"
></div>

<div class="row g-4 mt-4">
    {#if data && data.destinations}
        {#each data.destinations as destination}
            <div class="col-md-4">
                <MapDestinationCard {destination}></MapDestinationCard>
            </div>
        {/each}
    {:else}
        <p>No destinations available.</p>
    {/if}
</div>

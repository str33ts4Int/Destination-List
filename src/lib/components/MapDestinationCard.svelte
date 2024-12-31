<script>
    let { destination } = $props();
</script>

<div class="card shadow-sm mb-4 map-destination-card">
    <div class="card-body">
        <h5 class="card-title">{destination.name}</h5>
        <p class="card-text">{destination.description}</p>
    </div>
</div>

<style>
    .map-destination-card {
        border-radius: 8px; /* Rounded corners for card */
        overflow: hidden; /* Prevent overflow for rounded corners */
        transition:
            transform 0.2s ease,
            box-shadow 0.2s ease; /* Smooth hover effect */
        height: 100%; /* Ensure all cards are the same height */
        display: flex;
        flex-direction: column;
    }

    .map-destination-card:hover {
        transform: translateY(-5px); /* Slight lift on hover */
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Stronger shadow on hover */
    }

    .map-destination-card .card-body {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between; /* Ensure content is spaced evenly */
    }

    .map-destination-card .card-title {
        color: #007bff; /* Bootstrap primary color for title */
        margin-bottom: 0.5rem; /* Add spacing below title */
    }

    .map-destination-card .card-text {
        color: #6c757d; /* Bootstrap muted color for text */
        margin-bottom: 1rem; /* Add spacing between description and buttons */
    }
</style>
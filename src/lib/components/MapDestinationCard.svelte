<script>
    let { destination } = $props();
</script>

<div class="card shadow-sm mb-4 map-destination-card">
    <div class="card-body">
        <h5 class="card-title">{destination.name}</h5>
        <p class="card-text">{destination.description}</p>
        <a href={`/destinations/${destination._id}`} class="btn btn-primary btn-sm rounded-pill mt-auto">
            View Destination
        </a>
    </div>
</div>

<style>
    .map-destination-card {
        border-radius: 8px; 
        overflow: hidden; 
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        height: 100%; 
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
        margin-bottom: 1rem; /* Add spacing below title */
    }

    .map-destination-card .card-text {
        color: #6c757d; 
        margin-bottom: 1rem; 
    }

    .map-destination-card .btn {
        margin-top: auto; 
    }

</style>
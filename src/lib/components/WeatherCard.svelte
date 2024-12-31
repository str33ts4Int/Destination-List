<script>
    let { destination } = $props();
</script>

<div class="card shadow-sm mb-4">
    <div class="card-body">
        <h5 class="card-title">{destination.name}</h5>
        <p class="card-text">
            <strong>Temperature:</strong> {destination.weather.main.temp} °C<br>
            <strong>Weather:</strong> {destination.weather.weather[0].description}<br>
            <strong>Humidity:</strong> {destination.weather.main.humidity} %<br>
            <strong>Wind Speed:</strong> {destination.weather.wind.speed} m/s
        </p>
    </div>
</div>

<style>
    .card {
        border-radius: 8px;
        overflow: hidden;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

    .card-body {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .card-title {
        color: #007bff;
        margin-bottom: 0.5rem;
    }

    .card-text {
        color: #6c757d;
        margin-bottom: 1rem;
    }
</style>
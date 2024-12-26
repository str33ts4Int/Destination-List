<script>
    let { destination } = $props();
</script>

<div class="destination-card">
    <div>
        <img class="img-fluid" src={destination.image} alt="" />
    </div>
    <div class="details">
        <div class="name">
            <a href={"/destinations/" + destination._id}>{destination.name}</a>
        </div>
        <div>
            <strong>Description:</strong> {destination.description}
        </div>
    </div>
</div>
<script>
    let { data } = $props();
    console.log(data);
    let destination = data.destination;
</script>

<a class="btn btn-primary mt-4" href="/destinations">← Back to Destinations</a>

<div class="card shadow-sm mt-3">
    <div class="row g-0">
        <div class="col-md-4">
            <img class="img-fluid rounded-start" src="{destination.icon}" alt="{destination.name}" />
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h1 class="card-title">{destination.name}</h1>
                <p class="card-text">{destination.description}</p>
            </div>
        </div>
    </div>
</div>
<div class="card shadow-sm mb-4 mt-4">
    <form method="POST" action="?/update">
        <input type="hidden" name="id" value={destination._id}>
        <div class="mb-3">
            <label for="destination-name" class="form-label">Destination Name</label>
            <input id="destination-name" name="name" class="form-control" type="text" value={destination.name} />
        </div>
        <div class="mb-3">
            <label for="destination-description" class="form-label">Destination Description</label>
            <textarea id="destination-description" name="description" class="form-control">{destination.description}</textarea>
        </div>
        <button class="btn btn-primary">Update Destination</button>
    </form>
    <form method="POST" action="?/delete">
        <input type="hidden" name="id" value={destination._id}>
        <button class="btn btn-danger">Delete Destination</button>
    </form>
</div>
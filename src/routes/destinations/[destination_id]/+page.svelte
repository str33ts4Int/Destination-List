<script>
    let { data, form } = $props();
    console.log(data);
    let destination = data.destination;
    let categories = data.categories;
    let selectedTags = new Set(destination.tags);

    function toggleTag(tag) {
        if (selectedTags.has(tag)) {
            selectedTags.delete(tag);
        } else {
            selectedTags.add(tag);
        }
        console.log("Selected tags:", Array.from(selectedTags));
    }

    function isSelected(tag) {
        return selectedTags.has(tag);
    }
</script>

<a class="btn btn-primary mt-4" href="/destinations">← Back to Destinations</a>

<div class="card shadow-sm mt-3">
    <div class="row g-0">
        <div class="col-md-4">
            <img class="img-fluid rounded-start" src="{destination.image}" alt="{destination.name}" />
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h1 class="card-title">{destination.name}</h1>
                <h3 class="card-country">{destination.country}</h3>
                <p class="card-text">{destination.description}</p>
                <p class="card-attraction"><strong>Main attractions:</strong> {destination.main_attraction}</p>
                <p class="card-season"><strong>Best season to visit:</strong> {destination.best_season_to_visit}</p>
                <p class="card-tags"><strong>Tags:</strong> {destination.tags}</p>
            </div>
        </div>
    </div>
</div>

    <h1 class="mt-4">Update Destination</h1>

    <form method="POST" action="?/update">
        <input type="hidden" name="id" value={destination._id}>
        <div class="mb-3">
            <label for="destination-name" class="form-label">City</label>
            <input id="destination-name" name="name" class="form-control" type="text" value={destination.name} />
        </div>
        <div class="mb-3">
            <label for="destination-country" class="form-label">Country</label>
            <input id="destination-country" name="country" class="form-control" type="text" value={destination.country} />
        </div>
        <div class="mb-3">
            <label for="destination-description" class="form-label">Description</label>
            <textarea id="destination-description" name="description" class="form-control">{destination.description}</textarea>
        </div>
        <div class="mb-3">
            <label for="destination-main_attraction" class="form-label">Main attraction</label>
            <textarea id="destination-main_attraction" name="main_attraction" class="form-control">{destination.main_attraction}</textarea>
        </div>
        <div class="mb-3">
            <label for="destination-best_season_to_visit" class="form-label">Best season to visit</label>
            <textarea id="destination-best_season_to_visit" name="best_season_to_visit" class="form-control">{destination.best_season_to_visit}</textarea>
        </div>
        <div class="mb-3">
            <label class="form-label">Tags</label>
            <div>
                {#each categories as category}
                    <button
                        type="button"
                        class="btn {isSelected(category.name) ? 'btn-primary' : 'btn-outline-primary'} btn-sm me-2 mb-2"
                        on:click={() => toggleTag(category.name)}
                    >
                        {category.name}
                    </button>
                {/each}
            </div>
            <!-- Hidden inputs to send selected tags in the form -->
            {#each Array.from(selectedTags) as tag}
                <input type="hidden" name="tags[]" value={tag} />
            {/each}
        </div>
        <button type="submit" class="btn btn-success">Update Destination</button>
    </form>
    
    
    {#if form?.success}
        <div class="alert alert-success mt-4" role="alert">
            <strong>Success!</strong> Destination successfully updated!
        </div>
    {/if}
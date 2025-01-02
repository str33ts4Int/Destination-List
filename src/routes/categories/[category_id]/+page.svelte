<script>
    let { data } = $props();
    console.log(data);
    let category = data.category;
    let destination = data.destinations;
</script>

<div class="container my-5">
    <!-- Back Button -->
    <div class="mb-4">
        <a class="btn btn-lg btn-outline-primary shadow-sm rounded-pill" href="/categories">← Back to Categories</a>
    </div>

    <!-- Category Information -->
    <div class="card category-card shadow-lg mb-4">
        <div class="row g-0">
            <div class="col-md-4">
                <img class="img-fluid rounded-start" src={category.icon} alt={category.name} />
            </div>
            <div class="col-md-8 d-flex align-items-center">
                <div class="card-body">
                    <h1 class="card-title text-primary display-4 fw-bold">{category.name}</h1>
                    <div class="d-flex justify-content-center">
                        <p class="card-text text-muted fs-5">{category.description}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Destinations with this Category -->
    <section>
        <h2 class="text-primary display-5 fw-bold text-center mb-4">Destinations in this Category</h2>
        <div class="row g-4">
            {#if destination.length > 0}
                {#each destination as dest}
                    <div class="col-sm-6 col-md-4 col-lg-3">
                        <div class="card destination-card shadow-sm h-100">
                            <div class="card-body d-flex flex-column align-items-center">
                                <h5 class="card-title text-primary text-center">{dest.name}</h5>
                                <p class="text-muted text-center">{dest.description || "No description available."}</p>
                                <a href={"/destinations/" + dest._id} class="btn btn-sm btn-outline-primary rounded-pill mt-auto">
                                    View Destination
                                </a>
                            </div>
                        </div>
                    </div>
                {/each}
            {:else}
                <p class="text-center text-muted">No destinations found for this category.</p>
            {/if}
        </div>
    </section>

    <section class="card shadow-lg mt-5 p-5 update-category-section">
        <h2 class="text-primary display-5 fw-bold text-center mb-4">Update Category</h2>
        <form method="POST" action="?/update" class="mb-5">
            <input type="hidden" name="id" value={category._id}>
            <div class="mb-4">
                <label for="category-name" class="form-label fw-bold">Category Name</label>
                <input id="category-name" name="name" class="form-control rounded-pill form-input-lg" type="text" value={category.name} />
            </div>
            <div class="mb-4">
                <label for="category-description" class="form-label fw-bold">Category Description</label>
                <textarea id="category-description" name="description" class="form-control rounded form-input-lg">{category.description}</textarea>
            </div>
            <button class="btn btn-success btn-lg rounded-pill w-100">Update Category</button>
        </form>
        <form method="POST" action="?/delete">
            <input type="hidden" name="id" value={category._id}>
            <button class="btn btn-danger btn-lg rounded-pill w-100">Delete Category</button>
        </form>
    </section>
</div>

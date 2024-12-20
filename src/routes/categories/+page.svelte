<script>
    let { data } = $props();
</script>

<h1>Categories</h1>
<h3>Here are all the categories</h3>

<div class="row mt-3">
    {#each data.categories as categories}
        <div class="col-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title
                    ">{categories.name}</h5>
                    <p class="card-text">{categories.description}</p>
                    <a href="/categories/{categories.id}" class="btn btn-primary">View</a>
                </div>
            </div>
        </div>
    {/each}
</div>

<script>
    let { data } = $props();
    console.log(data);
    let category = data.category;
</script>


<a class="btn btn-secondary mb-4" href="/categories">← Back to Categories</a>

<div class="card shadow-sm">
    <div class="row g-0">
        <div class="col-md-4">
            <img class="img-fluid rounded-start" src="{category.icon}" alt="{category.name}" />
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h1 class="card-title">{category.name}</h1>
                <p class="card-text">{category.description}</p>
            </div>
        </div>
    </div>
</div>

<script>
    let { data } = $props();
    console.log(data);
    let category = data.category;
</script>

<a class="btn btn-primary mt-4" href="/categories">← Back to Categories</a>


<div class="card shadow-sm mt-3">
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
<div class="card shadow-sm mb-4 mt-4">
    <form method="POST" action="?/update">
        <input type="hidden" name="id" value={category._id}>
        <div class="mb-3 ">
            <label for="category-name" class="form-label">Category Name</label>
            <input id="category-name" name="name" class="form-control" type="text" value={category.name} />
        </div>
        <div class="mb-3">
            <label for="category-description" class="form-label">Category Description</label>
            <textarea id="category-description" name="description" class="form-control">{category.description}</textarea>
        </div>
        <button class="btn btn-primary">Update Category</button>
    </form>
    <form method="POST" action="?/delete">
        <input type="hidden" name="id" value={category._id}>
        <button class="btn btn-danger">Delete Category</button>
    </form>
</div>
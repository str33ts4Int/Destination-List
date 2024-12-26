<script>
    let { form } = $props();
</script>

<a class="btn btn-primary" href="/categories">Return</a>
<h1>Create Category</h1>

<form method="POST" action="?/create">
    <div class="mb-3">
      <label for="category-name" class="form-label">Category Name</label>
      <input id="category-name" name="name" class="form-control" type="text" />
    </div>
    <div class="mb-3">
      <label for="category-description" class="form-label">Category Description</label>
      <textarea id="category-description" name="description" class="form-control"></textarea>
    </div>
    <button type="submit" class="btn btn-success">Create Category</button>
</form>

{#if form?.success}
    <div class="alert alert-success mt-4" role="alert">
        <strong>Success!</strong> Category successfully created!
    </div>
{/if}
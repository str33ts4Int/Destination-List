<script>
  let { form } = $props();
</script>

<a class="btn btn-primary btn-lg rounded-pill shadow mt-4" href="/categories"
  >← Back to Categories</a
>
<div class="container d-flex flex-column min-vh-100">
  <h1 class="text-center mt-4 text-primary create-category-title">Create Category</h1>


  <form method="POST" action="?/create" class="p-4 bg-light rounded shadow-sm">
    <div class="mb-3">
      <label for="category-name" class="form-label fw-bold">Category Name</label
      >
      <input
        id="category-name"
        name="name"
        class="form-control rounded-pill"
        type="text"
      />
    </div>
    <div class="mb-3">
      <label for="category-description" class="form-label fw-bold"
        >Category Description</label
      >
      <textarea
        id="category-description"
        name="description"
        class="form-control rounded"
      ></textarea>
    </div>
    <button type="submit" class="btn btn-success btn-lg rounded-pill w-100"
      >Create Category</button
    >
  </form>

  {#if form?.success}
    <div class="alert alert-success mt-4" role="alert">
      <strong>Success!</strong> Category successfully created!
    </div>
  {/if}
</div>


<style>
  form {
    margin-top: 10%;
    padding-top: 0;
  }

  .create-category-title {
    font-size: 2.5rem; 
    font-weight: bold; 
    color: #007bff; 
    margin-top: 5rem; 
    margin-bottom: 5rem; 
}
</style>

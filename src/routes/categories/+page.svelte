<script>
    import CategoriesCard from "$lib/components/CategoriesCard.svelte";
    let { data } = $props();
</script>

<h1>Categories</h1>
<h3>Here are all the categories</h3>

<div>
    <a href="/categories/create" class="btn btn-primary">Add New Category</a>
  </div>
  <div class="row mt-3">
    {#each data.categories as category}
      <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
        <CategoriesCard {category}></CategoriesCard>
      </div>
    {/each}
  </div>

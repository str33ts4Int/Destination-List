<script>
  import CategoriesCard from "$lib/components/CategoriesCard.svelte";
  let { data } = $props();
</script>

<div class="container mt-5">
  <div class="text-center mb-4">
    <h1 class="display-4 text-primary fw-bold">Explore Categories</h1>
    <p class="text-muted fs-5">
      Discover a variety of categories that match your interests. Add a new one
      or explore existing ones!
    </p>
    <a
      href="/categories/create"
      class="btn btn-lg btn-success rounded-pill shadow px-4"
    >
      + Add New Category
    </a>
  </div>

  <div class="row g-4 mt-4">
    {#each data.categories as category}
      <div class="col-sm-6 col-md-4 col-lg-3">
        <CategoriesCard {category}></CategoriesCard>
      </div>
    {/each}
  </div>
</div>

<script>
  let { form, data } = $props();
  let categories = data.categories;
  let selectedTags = new Set();

  let destination = {
      name: "",
      country: "",
      description: "",
      main_attraction: "",
      best_season_to_visit: "",
  };

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

<a class="btn btn-primary" href="/destinations">Return</a>
<h1>Create Destination</h1>

<form method="POST" action="?/create">
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
  <button type="submit" class="btn btn-success">Create Destination</button>
</form>

{#if form?.success}
  <div class="alert alert-success mt-4" role="alert">
      <strong>Success!</strong> Destination successfully created!
  </div>
{/if}
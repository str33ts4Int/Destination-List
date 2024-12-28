<script>
    import { writable, get } from "svelte/store"; // Import get from svelte/store
    let { form, data } = $props();
    let categories = data.categories;
    let selectedTags = writable(new Set());
  
    function toggleTag(tag) {
      selectedTags.update((tags) => {
        if (tags.has(tag)) {
          tags.delete(tag);
        } else {
          tags.add(tag);
        }
        return tags;
      });
      console.log("Selected tags:", Array.from(get(selectedTags))); // Use get to access the current value
    }
  
    function isSelected(tag) {
      let isTagSelected;
      selectedTags.subscribe((tags) => {
        isTagSelected = tags.has(tag);
      });
      return isTagSelected;
    }
  
    let destination = {
      name: "",
      country: "",
      description: "",
      main_attraction: "",
      best_season_to_visit: "",
    };
  </script>
  
  <a class="btn btn-primary" href="/destinations">Return</a>
  <h1>Create Destination</h1>
  
  <form method="POST" action="?/create">
    <div class="mb-3">
      <label for="destination-name" class="form-label">City</label>
      <input id="destination-name" name="name" class="form-control" type="text" bind:value={destination.name} />
    </div>
    <div class="mb-3">
      <label for="destination-country" class="form-label">Country</label>
      <input id="destination-country" name="country" class="form-control" type="text" bind:value={destination.country} />
    </div>
    <div class="mb-3">
      <label for="destination-description" class="form-label">Description</label>
      <textarea id="destination-description" name="description" class="form-control" bind:value={destination.description}></textarea>
    </div>
    <div class="mb-3">
      <label for="destination-main_attraction" class="form-label">Main attraction</label>
      <textarea id="destination-main_attraction" name="main_attraction" class="form-control" bind:value={destination.main_attraction}></textarea>
    </div>
    <div class="mb-3">
      <label for="destination-best_season_to_visit" class="form-label">Best season to visit</label>
      <textarea id="destination-best_season_to_visit" name="best_season_to_visit" class="form-control" bind:value={destination.best_season_to_visit}></textarea>
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
      {#each $selectedTags as tag}
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
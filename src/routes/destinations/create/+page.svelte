<script>
  let { form } = $props();
  let destination = {
    name: "",
    country: "",
    description: "",
    main_attraction: "",
    best_season_to_visit: "",
    tags: "",
  };
</script>

<a class="btn btn-primary" href="/destinations">Return</a>
<h1>Create Destination</h1>

<form method="POST" action="?/create">
  <div class="mb-3">
    <label for="destination-name" class="form-label">City</label>
    <input
      id="destination-name"
      name="name"
      class="form-control"
      type="text"
      value={destination.name}
    />
  </div>
  <div class="mb-3">
    <label for="destination-country" class="form-label">Country</label>
    <input
      id="destination-country"
      name="country"
      class="form-control"
      type="text"
      value={destination.country}
    />
  </div>
  <div class="mb-3">
    <label for="destination-description" class="form-label">Description</label>
    <textarea
      id="destination-description"
      name="description"
      class="form-control">{destination.description}</textarea
    >
  </div>
  <div class="mb-3">
    <label for="destination-main_attraction" class="form-label"
      >Main attraction</label
    >
    <textarea
      id="destination-main_attraction"
      name="main_attraction"
      class="form-control">{destination.main_attraction}</textarea
    >
  </div>
  <div class="mb-3">
    <label for="destination-best_season_to_visit" class="form-label"
      >Best season to visit</label
    >
    <textarea
      id="destination-best_season_to_visit"
      name="best_season_to_visit"
      class="form-control">{destination.best_season_to_visit}</textarea
    >
  </div>
  <div class="mb-3">
    <label for="destination-tags" class="form-label">Tags</label>
    <textarea id="destination-tags" name="tags" class="form-control"
      >{destination.tags}</textarea
    >
  </div>
  <button type="submit" class="btn btn-success">Create Destination</button>
</form>

{#if form?.success}
  <div class="alert alert-success mt-4" role="alert">
    <strong>Success!</strong> destination successfully created!
  </div>
{/if}

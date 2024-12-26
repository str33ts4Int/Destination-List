<script>
    let { form } = $props();
</script>

<a class="btn btn-primary" href="/destinations">Return</a>
<h1>Create Destination</h1>

<form method="POST" action="?/create">
    <div class="mb-3">
      <label for="destination-name" class="form-label">Destination Name</label>
      <input id="destination-name" name="name" class="form-control" type="text" />
    </div>
    <div class="mb-3">
      <label for="destination-description" class="form-label">Destination Description</label>
      <textarea id="destination-description" name="description" class="form-control"></textarea>
    </div>
    <button type="submit" class="btn btn-success">Create Destination</button>
</form>

{#if form?.success}
    <div class="alert alert-success mt-4" role="alert">
        <strong>Success!</strong> destination successfully created!
    </div>
{/if}
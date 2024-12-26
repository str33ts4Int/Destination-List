<script>
    let { category } = $props();
</script>

<div class="category-card">
    <div>
        <img class="img-fluid" src={category.icon} alt="" />
    </div>
    <div class="details">
        <div class="name">
            <a href={"/categories/" + category._id}>{category.name}</a>
        </div>
        <div>
            Beschreibung: {category.description}
        </div>
    </div>
</div>

<script>
    let { category } = $props();
</script>

<div class="card shadow-sm mb-3 category-card">
    <!-- Image Section -->
    <img 
        src={category.icon} 
        alt={category.name} 
        class="card-img-top img-fluid"
    />

    <!-- Content Section -->
    <div class="card-body d-flex flex-column">
        <!-- Category Name -->
        <h5 class="card-title text-primary">
            <a href={"/categories/" + category._id} class="text-decoration-none">
                {category.name}
            </a>
        </h5>

        <!-- Description -->
        <p class="card-text flex-grow-1">
            <strong>Description:</strong> {category.description}
        </p>

        <!-- Action Button -->
        <a href={"/categories/" + category._id} class="btn btn-primary btn-sm mt-auto">
            View Category
        </a>
    </div>
</div>

<style>
    .category-card {
        height: 600px; /* Set fixed height for all cards */
        display: flex;
        flex-direction: column;
        justify-content: space-between; /* Distribute content evenly */
        border: 3px solid #78999a;
        background-color: whitesmoke;
        color: black;
        margin: 5px;
        overflow: hidden; /* Prevent overflow of content */
    }

    .category-card .img-fluid {
        flex-shrink: 0;
        height: 400px; /* Fixed height for images */
        object-fit: cover; /* Maintain aspect ratio */
        border-bottom: 1px solid #ddd; /* Optional: separate image and content */
    }

    .category-card .card-body {
        flex: 1;
        padding: 10px; /* Adjust padding as needed */
        display: flex;
        flex-direction: column;
        justify-content: space-between; /* Ensure button stays at the bottom */
    }

    .category-card .card-title {
        font-size: 1.2rem;
        font-weight: bold;
        margin-bottom: 10px;
    }

    .category-card .card-text {
        font-size: 0.9rem;
        color: #555; /* Optional muted text color */
        flex-grow: 1; /* Allow the description to grow and take up available space */
        display: -webkit-box;
        -webkit-line-clamp: 3; /* Show only 3 lines of text */
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .category-card .btn {
        margin-top: auto; /* Push the button to the bottom of the card */
        font-size: 0.85rem;
        padding: 0.5rem 1rem;
    }
</style>


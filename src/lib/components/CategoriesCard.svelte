<script>
    let { category } = $props();
</script>

<div class="card shadow-sm category-card">
    <!-- Image Section -->
    <img 
        src={category.icon} 
        alt={category.name} 
        class="card-img-top img-fluid"
    />

    <!-- Content Section -->
    <div class="card-body d-flex flex-column">
        <!-- Category Name -->
        <h5 class="card-title text-primary text-center mb-3">
            <a href={"/categories/" + category._id} class="text-decoration-none">
                {category.name}
            </a>
        </h5>

        <!-- Description -->
        <p class="card-text flex-grow-1 text-muted">
            {category.description || "No description available for this category."}
        </p>

        <!-- Action Button -->
        <a 
            href={"/categories/" + category._id} 
            class="btn btn-outline-primary btn-sm mt-auto align-self-center px-4 rounded-pill shadow-sm"
        >
            View Category
        </a>
    </div>
</div>

<style>
    .category-card {
        height: 550px; /* Consistent height for all cards */
        border: none; /* Remove default border */
        background: linear-gradient(to bottom right, #f8f9fa, #e9ecef); /* Subtle gradient */
        border-radius: 15px; /* Rounded corners */
        overflow: hidden; /* Ensure no overflow */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
        transition: transform 0.3s, box-shadow 0.3s; /* Smooth hover animation */
    }

    .category-card:hover {
        transform: translateY(-5px); /* Lift the card on hover */
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); /* Deeper shadow on hover */
    }

    .category-card .img-fluid {
        height: 300px; /* Fixed height for images */
        object-fit: cover; /* Maintain aspect ratio and fill space */
        border-bottom: 2px solid #dee2e6; /* Line separating image and content */
    }

    .category-card .card-body {
        padding: 1rem; /* Consistent padding */
        display: flex;
        flex-direction: column;
        justify-content: space-between; /* Proper alignment */
    }

    .category-card .card-title {
        font-size: 1.25rem; /* Slightly larger font size */
        font-weight: 600; /* Bold */
        color: #007bff; /* Bootstrap primary color */
    }

    .category-card .card-title a {
        text-decoration: none; /* Remove underline */
        color: inherit; /* Inherit color */
        transition: color 0.3s; /* Smooth transition */
    }

    .category-card .card-title a:hover {
        color: #0056b3; /* Darker blue on hover */
    }

    .category-card .card-text {
        font-size: 0.95rem; /* Adjust font size */
        color: #495057; /* Neutral muted color */
        display: -webkit-box;
        -webkit-line-clamp: 3; /* Limit to 3 lines */
        line-clamp: 3; /* Standard property for compatibility */
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis; /* Ellipsis for overflow text */
        margin-bottom: 1rem; /* Spacing below the description */
    }

    .category-card .btn {
        font-size: 0.85rem; /* Smaller font size */
        padding: 0.5rem 1.25rem; /* Adjust padding */
        background-color: white; /* White background */
        color: #007bff; /* Primary color text */
        border: 1px solid #007bff; /* Border matching primary color */
        transition: all 0.3s ease; /* Smooth transition */
    }

    .category-card .btn:hover {
        background-color: #007bff; /* Fill primary color */
        color: white; /* White text on hover */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add shadow */
    }
</style>

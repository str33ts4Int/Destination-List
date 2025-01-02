<script>
    let { category } = $props();
</script>

<div class="card shadow category-card">
    <!-- Image Section -->
    <div class="category-image-container">
        <img 
            src={category.icon} 
            alt={category.name} 
            class="category-image"
        />
    </div>

    <!-- Content Section -->
    <div class="card-body d-flex flex-column">
        <!-- Category Name -->
        <h5 class="card-title text-center mb-3">
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
            class="btn btn-gradient mt-auto align-self-center px-4 rounded-pill shadow-sm"
        >
            Explore Category
        </a>
    </div>
</div>

<style>
    /* General Card Styling */
    .category-card {
        height: 100%; /* Adjust card to fit all content dynamically */
        border: none;
        border-radius: 20px; /* Rounded corners */
        overflow: hidden; /* Keep everything tidy */
        background: linear-gradient(to bottom, #ffffff, #f8f9fa); /* Light gradient background */
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1); /* Subtle shadow */
        transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth animation */
    }

    .category-card:hover {
        transform: translateY(-8px); /* Lift on hover */
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15); /* Stronger shadow on hover */
    }

    /* Image Styling */
    .category-image-container {
        background: linear-gradient(135deg, #007bff, #0056b3); /* Modern gradient placeholder */
        display: flex;
        justify-content: center;
        align-items: center;
        height: 200px; /* Fixed height for consistency */
        overflow: hidden;
        position: relative;
    }

    .category-image {
        width: 100%;
        height: 100%;
        object-fit: cover; /* Ensure image covers container */
        transition: transform 0.3s ease; /* Smooth zoom effect */
    }

    .category-image-container:hover .category-image {
        transform: scale(1.1); /* Slight zoom on hover */
    }

    /* Card Body Styling */
    .card-body {
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    /* Title Styling */
    .card-title {
        font-size: 1.4rem; /* Larger font size */
        font-weight: 600; /* Bold font */
        color: #007bff;
        transition: color 0.3s ease; /* Smooth hover transition */
    }

    .card-title a {
        text-decoration: none;
        color: inherit;
    }

    .card-title a:hover {
        color: #0056b3; /* Darker blue on hover */
    }

    /* Text Styling */
    .card-text {
        font-size: 1rem; /* Comfortable font size */
        color: #6c757d; /* Bootstrap muted text color */
        line-height: 1.5; /* Increase line height for readability */
        display: -webkit-box; /* Create a flexible box for text */
        -webkit-line-clamp: 3; /* Limit text to 3 lines */
        line-clamp: 3; /* Standard property for compatibility */
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis; /* Ellipsis for overflow text */
        margin-bottom: 1rem; /* Spacing below the description */
    }

    /* Button Styling */
    .btn-gradient {
        font-size: 1rem;
        padding: 0.5rem 1.5rem; /* Adjust padding */
        background: linear-gradient(135deg, #007bff, #0056b3); /* Gradient background */
        color: white;
        border: none;
        font-weight: 600;
        text-transform: uppercase; /* Make text bold and uppercase */
        border-radius: 25px; /* Fully rounded */
        transition: all 0.3s ease; /* Smooth transition */
    }

    .btn-gradient:hover {
        background: linear-gradient(135deg, #0056b3, #003d80); /* Darker gradient on hover */
        transform: scale(1.05); /* Slightly larger on hover */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add shadow */
    }

    /* Responsive Design */
    @media (max-width: 768px) {
        .category-card {
            height: auto; /* Adjust height for smaller screens */
        }

        .card-body {
            padding: 1rem; /* Reduce padding */
        }
    }
</style>

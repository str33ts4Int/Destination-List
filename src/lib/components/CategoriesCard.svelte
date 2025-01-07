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
    .category-card {
        height: 100%; 
        border: none;
        border-radius: 20px; 
        overflow: hidden; 
        background: linear-gradient(to bottom, #ffffff, #f8f9fa); 
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1); 
        transition: transform 0.3s ease, box-shadow 0.3s ease; 
    }

    .category-card:hover {
        transform: translateY(-8px); 
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15); 
    }

    .category-image-container {
        background: linear-gradient(135deg, #007bff, #0056b3); 
        display: flex;
        justify-content: center;
        align-items: center;
        height: 200px; 
        overflow: hidden;
        position: relative;
    }

    .category-image {
        width: 100%;
        height: 100%;
        object-fit: cover; 
        transition: transform 0.3s ease; 
    }

    .category-image-container:hover .category-image {
        transform: scale(1.1); 
    }

    .card-body {
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .card-title {
        font-size: 1.4rem; 
        font-weight: 600; 
        color: #007bff;
        transition: color 0.3s ease; 
    }

    .card-title a {
        text-decoration: none;
        color: inherit;
    }

    .card-title a:hover {
        color: #0056b3; 
    }

    .card-text {
        font-size: 1rem; 
        color: #6c757d; 
        line-height: 1.5; 
        display: -webkit-box; 
        -webkit-line-clamp: 3; 
        line-clamp: 3; 
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis; 
        margin-bottom: 1rem; 
    }

    .btn-gradient {
        font-size: 1rem;
        padding: 0.5rem 1.5rem; 
        background: linear-gradient(135deg, #007bff, #0056b3); 
        color: white;
        border: none;
        font-weight: 600;
        text-transform: uppercase; 
        border-radius: 25px; 
        transition: all 0.3s ease; 
    }

    .btn-gradient:hover {
        background: linear-gradient(135deg, #0056b3, #003d80); 
        transform: scale(1.05); 
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
    }

    @media (max-width: 768px) {
        .category-card {
            height: auto; 
        }

        .card-body {
            padding: 1rem; 
        }
    }
</style>

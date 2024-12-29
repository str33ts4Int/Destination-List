<script>
    import { enhance } from "$app/forms";
    let { destination } = $props();
</script>

<div class="card shadow-sm mb-4 destination-card">
    <!-- Image Section -->
    <img
        src={destination.image}
        alt={destination.name}
        class="card-img-top img-fluid"
    />

    <!-- Content Section -->
    <div class="card-body">
        <!-- Destination Name -->
        <h5 class="card-title text-primary">
            <a
                href={"/destinations/" + destination._id}
                class="text-decoration-none"
            >
                {destination.name}
            </a>
        </h5>

        <!-- Country -->
        <p class="card-text">
            <strong>Country:</strong> {destination.country}
        </p>

        <!-- Description -->
        <p class="card-text">
            <strong>Description:</strong> {destination.description}
        </p>

        <!-- Add/Remove from MyList -->
        {#if destination.mylist}
        <form method="POST" action="?/removeFromMyList" class="mt-3" use:enhance>
            <input name="id" type="hidden" value={destination._id}>
            <button class="btn btn-remove-from-mylist w-100">Remove from MyList</button>
        </form>
        {:else}
        <form method="POST" action="?/addToMyList" class="mt-3" use:enhance>
            <input name="id" type="hidden" value={destination._id}>
            <button class="btn btn-add-to-mylist w-100">Add to MyList</button>
        </form>
        {/if}

        <!-- Action Buttons -->
        <div class="mt-3 d-flex justify-content-between">
            <a
                href={"/destinations/" + destination._id}
                class="btn btn-primary-modern btn-sm"
            >
                View Details
            </a>
            <a href="/contact" class="btn btn-outline-secondary-modern btn-sm">
                Contact Us
            </a>
        </div>
    </div>
</div>

<style>
    /* General Card Styling */
    .destination-card {
        border-radius: 8px; /* Rounded corners for card */
        overflow: hidden; /* Prevent overflow for rounded corners */
        transition:
            transform 0.2s ease,
            box-shadow 0.2s ease; /* Smooth hover effect */
        height: 100%; /* Ensure all cards are the same height */
        display: flex;
        flex-direction: column;
    }

    .destination-card:hover {
        transform: translateY(-5px); /* Slight lift on hover */
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Stronger shadow on hover */
    }

    /* Image Styling */
    .destination-card .card-img-top {
        object-fit: cover; /* Ensures images maintain aspect ratio */
        max-height: 300px; /* Fixed image height */
        border-bottom: 1px solid #eaeaea; /* Separation line below the image */
    }

    /* Ensure card body takes up remaining space */
    .destination-card .card-body {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between; /* Ensure content is spaced evenly */
    }

    .destination-card .card-body .mt-3 {
        margin-top: auto; /* Push buttons to the bottom */
    }

    /* Card Title */
    .destination-card .card-title {
        font-size: 1.25rem; /* Slightly larger title font size */
        font-weight: bold;
    }

    /* Card Text */
    .destination-card .card-text {
        color: #6c757d; /* Bootstrap muted color for text */
        margin-bottom: 1rem; /* Add spacing between description and buttons */
        display: -webkit-box; /* Create a flexible box for text */
        -webkit-line-clamp: 3; /* Limit text to 3 lines */
        -webkit-box-orient: vertical; /* Define the orientation of the box */
        overflow: hidden; /* Hide overflowing text */
        text-overflow: ellipsis; /* Add "..." for overflowing text */
    }

    /* Buttons */
    .destination-card .btn {
        padding: 0.5rem 1rem; /* Adjust button padding for consistency */
        font-size: 0.9rem; /* Slightly smaller button font size */
    }

    /* Add to MyList Button */
    .btn-add-to-mylist {
        background: linear-gradient(to right, #00c853, #64dd17); /* Modern green gradient */
        color: white;
        border: none;
        font-weight: bold;
        text-transform: uppercase;
        transition: all 0.3s ease;
    }

    .btn-add-to-mylist:hover {
        background: linear-gradient(to right, #64dd17, #00c853); /* Hover effect */
        transform: scale(1.05);
    }

    /* Remove from MyList Button */
    .btn-remove-from-mylist {
        background: linear-gradient(to right, #d50000, #ff1744); /* Modern red gradient */
        color: white;
        border: none;
        font-weight: bold;
        text-transform: uppercase;
        transition: all 0.3s ease;
    }

    .btn-remove-from-mylist:hover {
        background: linear-gradient(to right, #ff1744, #d50000); /* Hover effect */
        transform: scale(1.05);
    }

    /* Primary Modern Button */
    .btn-primary-modern {
        background: linear-gradient(to right, #007bff, #0056b3); /* Modern blue gradient */
        color: white;
        border: none;
        font-weight: bold;
        text-transform: uppercase;
        transition: all 0.3s ease;
    }

    .btn-primary-modern:hover {
        background: linear-gradient(to right, #0056b3, #007bff); /* Hover effect */
        transform: scale(1.05);
    }

    /* Outline Secondary Modern Button */
    .btn-outline-secondary-modern {
        border: 2px solid #6c757d; /* Thicker border for modern feel */
        color: #6c757d; /* Text color */
        font-weight: bold;
        text-transform: uppercase;
        background: transparent;
        transition: all 0.3s ease;
    }

    .btn-outline-secondary-modern:hover {
        background: #6c757d; /* Darker background on hover */
        color: #ffffff; /* White text on hover */
        transform: scale(1.05);
    }
</style>

<script>
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
            <a href={"/destinations/" + destination._id} class="text-decoration-none">
                {destination.name}
            </a>
        </h5>

        <!-- Description -->
        <p class="card-text">
            <strong>Description:</strong> {destination.description}
        </p>

        <!-- Action Buttons -->
        <div class="mt-3 d-flex justify-content-between">
            <a href={"/destinations/" + destination._id} class="btn btn-primary btn-sm">
                View Details
            </a>
            <a href="/contact" class="btn btn-outline-secondary btn-sm">
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
    transition: transform 0.2s ease, box-shadow 0.2s ease; /* Smooth hover effect */
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

/* Card Title */
.destination-card .card-title {
    font-size: 1.25rem; /* Slightly larger title font size */
    font-weight: bold;
}

/* Card Text */
.destination-card .card-text {
    color: #6c757d; /* Bootstrap muted color for text */
    margin-bottom: 1rem; /* Add spacing between description and buttons */
}

/* Buttons */
.destination-card .btn {
    padding: 0.5rem 1rem; /* Adjust button padding for consistency */
    font-size: 0.9rem; /* Slightly smaller button font size */
}

.destination-card .btn-primary {
    background-color: #007bff; /* Bootstrap primary color */
    border: none; /* Remove button border */
}

.destination-card .btn-primary:hover {
    background-color: #0056b3; /* Darker blue on hover */
}

.destination-card .btn-outline-secondary {
    border: 1px solid #6c757d; /* Border for outline button */
    color: #6c757d; /* Text color */
}

.destination-card .btn-outline-secondary:hover {
    background-color: #6c757d; /* Darker background on hover */
    color: #ffffff; /* White text on hover */
}

</style>
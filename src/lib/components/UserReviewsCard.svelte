<script>
    let { review } = $props();
</script>

<div class="card shadow-sm mb-4 user-review-card">
    <div class="card-body">
        <p class="card-text">"{review.review}"</p>
        <p class="text-end text-primary">- {review.name}</p>
    </div>
</div>

<style>
    .user-review-card {
        border-radius: 8px; /* Rounded corners for card */
        overflow: hidden; /* Prevent overflow for rounded corners */
        transition:
            transform 0.2s ease,
            box-shadow 0.2s ease; /* Smooth hover effect */
        height: 100%; /* Ensure all cards are the same height */
        display: flex;
        flex-direction: column;
    }

    .user-review-card:hover {
        transform: translateY(-5px); /* Slight lift on hover */
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Stronger shadow on hover */
    }

    .user-review-card .card-body {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between; /* Ensure content is spaced evenly */
    }

    .user-review-card .card-text {
        color: #6c757d; /* Bootstrap muted color for text */
        margin-bottom: 1rem; /* Add spacing between description and buttons */
        display: -webkit-box; /* Create a flexible box for text */
        -webkit-line-clamp: 3; /* Limit text to 3 lines */
        line-clamp: 3; /* Standard property for compatibility */
        -webkit-box-orient: vertical; /* Define the orientation of the box */
        overflow: hidden; /* Hide overflowing text */
        text-overflow: ellipsis; /* Add "..." for overflowing text */
    }
</style>

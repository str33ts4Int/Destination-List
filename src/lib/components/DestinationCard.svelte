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
            <strong>Country:</strong>
            {destination.country}
        </p>

        <!-- Description -->
        <p class="card-text">
            <strong>Description:</strong>
            {destination.description}
        </p>

        <!-- Action Buttons -->
        <div class="mt-3 d-flex justify-content-center align-items-center">
            <a
                href={"/destinations/" + destination._id}
                class="btn btn-primary-modern btn-sm mx-2"
            >
                View Details
            </a>

            {#if destination.mylist}
                <form
                    method="POST"
                    action="?/removeFromMyList"
                    use:enhance
                    class="mx-2"
                >
                    <input name="id" type="hidden" value={destination._id} />
                    <button class="btn btn-remove-from-mylist btn-sm"
                        >Remove from MyList</button
                    >
                </form>
            {:else}
                <form
                    method="POST"
                    action="?/addToMyList"
                    use:enhance
                    class="mx-2"
                >
                    <input name="id" type="hidden" value={destination._id} />
                    <button class="btn btn-add-to-mylist btn-sm"
                        >Add to MyList</button
                    >
                </form>
            {/if}
        </div>
    </div>
</div>

<style>
    /* General Card Styling */
    .destination-card {
        border-radius: 12px; /* More rounded corners for card */
        overflow: hidden; /* Prevent overflow for rounded corners */
        transition:
            transform 0.3s ease,
            box-shadow 0.3s ease; /* Smooth hover effect */
        height: 100%; /* Ensure all cards are the same height */
        display: flex;
        flex-direction: column;
        background: #fff; /* White background for card */
    }

    .destination-card:hover {
        transform: translateY(-8px); /* Slight lift on hover */
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2); /* Stronger shadow on hover */
    }

    /* Image Styling */
    .destination-card .card-img-top {
        object-fit: cover; /* Ensures images maintain aspect ratio */
        max-height: 250px; /* Fixed image height */
        border-bottom: 1px solid #eaeaea; /* Separation line below the image */
    }

    /* Ensure card body takes up remaining space */
    .destination-card .card-body {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between; /* Ensure content is spaced evenly */
        padding: 1.5rem; /* Add padding for better spacing */
    }

    /* Action Buttons */
    .destination-card .card-body .mt-3 {
        margin-top: auto; /* Push buttons to the bottom */
        display: flex;
        justify-content: center; /* Center the buttons */
        gap: 0.5rem; /* Add space between the buttons */
    }

    /* Card Title */
    .destination-card .card-title {
        font-size: 1.5rem; /* Larger title font size */
        font-weight: bold;
        margin-bottom: 0.75rem; /* Add spacing below title */
    }

    /* Card Text */
    .destination-card .card-text {
        color: #6c757d; /* Bootstrap muted color for text */
        margin-bottom: 1rem; /* Add spacing between description and buttons */
        display: -webkit-box; /* Create a flexible box for text */
        -webkit-line-clamp: 3; /* Limit text to 3 lines */
        line-clamp: 3; /* Standard property for compatibility */
        -webkit-box-orient: vertical; /* Define the orientation of the box */
        overflow: hidden; /* Hide overflowing text */
        text-overflow: ellipsis; /* Add "..." for overflowing text */
    }

    /* Buttons */
    .destination-card .btn {
        padding: 0.5rem 1rem; /* Adjust button padding for consistency */
        font-size: 0.9rem; /* Slightly smaller button font size */
        border-radius: 4px; /* Rounded corners for buttons */
    }

    /* Add to MyList Button */
    .btn-add-to-mylist {
        background: linear-gradient(
            to right,
            #00c853,
            #64dd17
        ); /* Modern green gradient */
        color: white;
        border: none;
        font-weight: bold;
        text-transform: uppercase;
        transition: all 0.3s ease;
    }

    .btn-add-to-mylist:hover {
        background: linear-gradient(
            to right,
            #64dd17,
            #00c853
        ); /* Hover effect */
        transform: scale(1.05);
    }

    /* Remove from MyList Button */
    .btn-remove-from-mylist {
        background: linear-gradient(
            to right,
            #d50000,
            #ff1744
        ); /* Modern red gradient */
        color: white;
        border: none;
        font-weight: bold;
        text-transform: uppercase;
        transition: all 0.3s ease;
    }

    .btn-remove-from-mylist:hover {
        background: linear-gradient(
            to right,
            #ff1744,
            #d50000
        ); /* Hover effect */
        transform: scale(1.05);
    }

    /* Primary Modern Button */
    .btn-primary-modern {
        background: linear-gradient(
            to right,
            #007bff,
            #0056b3
        ); /* Modern blue gradient */
        color: white;
        border: none;
        font-weight: bold;
        text-transform: uppercase;
        transition: all 0.3s ease;
    }

    .btn-primary-modern:hover {
        background: linear-gradient(
            to right,
            #0056b3,
            #007bff
        ); /* Hover effect */
        transform: scale(1.05);
    }
</style>

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
form {
    padding: 0%;
}
    .destination-card {
        border-radius: 12px; 
        overflow: hidden; 
        transition:
            transform 0.3s ease,
            box-shadow 0.3s ease; 
        height: 100%; 
        display: flex;
        flex-direction: column;
        background: #fff;
    }

    .destination-card:hover {
        transform: translateY(-8px); 
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2); 
    }

    .destination-card .card-img-top {
        object-fit: cover; 
        max-height: 250px; 
        border-bottom: 1px solid #eaeaea; 
    }

    .destination-card .card-body {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between; 
        padding: 1.5rem; 
    }

    .destination-card .card-body .mt-3 {
        margin-top: auto; 
        display: flex;
        justify-content: center; 
        gap: 0.5rem; 
    }

    .destination-card .card-title {
        font-size: 1.5rem; 
        font-weight: bold;
        margin-bottom: 0.75rem; 
    }

    .destination-card .card-text {
        color: #6c757d; 
        margin-bottom: 1rem; 
        display: -webkit-box; 
        -webkit-line-clamp: 3; 
        line-clamp: 3; 
        -webkit-box-orient: vertical; 
        overflow: hidden; 
        text-overflow: ellipsis; 
    }

    .destination-card .btn {
        padding: 0.5rem 1rem; 
        font-size: 0.9rem; 
        border-radius: 4px; 
    }

    .btn-add-to-mylist {
        background: linear-gradient(
            to right,
            #00c853,
            #64dd17
        ); 
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
        ); 
        transform: scale(1.05);
    }

    .btn-remove-from-mylist {
        background: linear-gradient(
            to right,
            #d50000,
            #ff1744
        ); 
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
        ); 
        transform: scale(1.05);
    }

    .btn-primary-modern {
        background: linear-gradient(
            to right,
            #007bff,
            #0056b3
        ); 
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
        ); 
        transform: scale(1.05);
    }
</style>

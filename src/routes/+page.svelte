<script>
    import UserReviewsCard from "$lib/components/UserReviewsCard.svelte";

    let reviews = $state([
        {
            id: 1,
            review: "The best app for managing my travel bucket list! Super easy to use and visually stunning.",
            name: "Alex D.",
        },
        {
            id: 2,
            review: "I love how I can categorize my destinations and keep track of my adventures. Highly recommend!",
            name: "Sarah M.",
        },
        {
            id: 3,
            review: "A must-have for any traveler! Makes planning so much easier.",
            name: "John T.",
        },
    ]);
</script>

<div class="container">
    <h1 class="mt-4 text-center text-primary display-3 fw-bold">
        🌍 Destination List
    </h1>
    <p class="text-center text-secondary fs-4">
        Plan, manage, and explore your favorite destinations effortlessly!
    </p>

    <div
        id="carouselExampleControls"
        class="carousel slide my-5 shadow-lg rounded overflow-hidden"
        data-bs-ride="carousel"
    >
        <div class="carousel-inner" style="max-height: 600px;">
            <div class="carousel-item active">
                <img
                    src="images/DestinationListTitle.png"
                    class="d-block w-100"
                    alt="Destination List"
                />
            </div>
            <div class="carousel-item">
                <img
                    src="images/DestinationList.png"
                    class="d-block w-100"
                    alt="Destination List"
                />
            </div>
            <div class="carousel-item">
                <img
                    src="images/DestinationList2.png"
                    class="d-block w-100"
                    alt="Destination List"
                />
            </div>
            <div class="carousel-item">
                <img
                    src="images/DestinationList3.png"
                    class="d-block w-100"
                    alt="Destination List"
                />
            </div>
        </div>
        <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
        >
            <span
                class="carousel-control-prev-icon bg-dark p-2 rounded-circle"
                aria-hidden="true"
            ></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
        >
            <span
                class="carousel-control-next-icon bg-dark p-2 rounded-circle"
                aria-hidden="true"
            ></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>

    <section class="mt-5">
        <h2 class="text-primary display-5 fw-bold">About</h2>
        <p class="text-muted fs-5">
            Destination List is your all-in-one solution to organize and explore
            your favorite travel destinations. Whether you're planning a trip or
            simply keeping track of places you've been, this application is
            designed for travelers like you.
        </p>
    </section>

    <section class="mt-5">
        <h2 class="text-primary display-5 fw-bold">Features</h2>
        <ul class="list-group shadow-sm mb-5 rounded">
            <li class="list-group-item fs-5">✔️ View a list of destinations</li>
            <li class="list-group-item fs-5">➕ Add a new destination</li>
            <li class="list-group-item fs-5">➕ Add a new category</li>
            <li class="list-group-item fs-5">
                ✏️ Update an existing destination
            </li>
            <li class="list-group-item fs-5">✏️ Update an existing category</li>
            <li class="list-group-item fs-5">❌ Delete a destination</li>
            <li class="list-group-item fs-5">❌ Delete a category</li>
            <li class="list-group-item fs-5">
                📍 Add destinations to your list
            </li>
            <li class="list-group-item fs-5">
                🚫 Remove destinations from your list
            </li>
            <li class="list-group-item fs-5">
                🌏 Explore destinations seamlessly on an interactive world map
            </li>
            <li class="list-group-item fs-5">
                ⛅️ Check real-time weather updates for your favorite travel
                spots
            </li>
            <li class="list-group-item fs-5">
                📋 Reach out to us easily through a user-friendly contact form
            </li>
        </ul>
    </section>

    <section class="my-5">
        <h2 class="text-primary text-center display-5 fw-bold">
            What Users Say
        </h2>
        <div class="row mt-4">
            {#each reviews as review}
                <div class="col-md-4">
                    <UserReviewsCard {review}></UserReviewsCard>
                </div>
            {/each}
        </div>
    </section>
</div>

<section
    class="full-width-section text-center bg-gradient-primary text-white py-5 rounded shadow-lg"
>
    <h2 class="display-4 fw-bold">Ready to Explore?</h2>
    <p class="fs-5">
        Start looking at your next destination with Destination List!
    </p>
    <a
        href="/destinations"
        class="btn btn-light btn-lg rounded-pill shadow px-4 py-2 fw-bold"
        >Get Started</a
    >
</section>

<style>
    .full-width-section {
        width: 100vw;
        margin-left: calc(50% - 50vw);
    }
</style>

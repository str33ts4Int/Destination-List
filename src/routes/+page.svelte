<script>
    import './styles.css';
</script>

<div class="container">
    <!-- Header -->
    <h1 class="mt-4 text-center text-primary display-4">🌍 Destination List</h1>
    <p class="text-center text-muted fs-5">Plan, manage, and explore your favorite destinations effortlessly!</p>

    <!-- Carousel -->
    <div id="carouselExampleControls" class="carousel slide my-5 shadow-lg rounded" data-bs-ride="carousel">
        <div class="carousel-inner" style="max-height: 600px;">
            <div class="carousel-item active">
                <img
                    src="images/DestinationListTitle.png"
                    class="d-block w-100 rounded"
                    alt="Destination List"
                />
            </div>
            <div class="carousel-item">
                <img
                    src="images/DestinationList.png"
                    class="d-block w-100 rounded"
                    alt="Destination List"
                />
            </div>
            <div class="carousel-item">
                <img
                    src="images/DestinationList2.png"
                    class="d-block w-100 rounded"
                    alt="Destination List"
                />
            </div>
            <div class="carousel-item">
                <img
                    src="images/DestinationList3.png"
                    class="d-block w-100 rounded"
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
            <span class="carousel-control-prev-icon bg-dark p-2 rounded-circle" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
        >
            <span class="carousel-control-next-icon bg-dark p-2 rounded-circle" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>

    <!-- About Section -->
    <section class="mt-5">
        <h2 class="text-primary">About</h2>
        <p class="text-muted fs-5">
            Destination List is your all-in-one solution to organize and explore your favorite travel destinations. Whether you're planning a trip or simply keeping track of places you've been, this application is designed for travelers like you.
        </p>
    </section>

    <!-- Features Section -->
    <section class="mt-4">
        <h2 class="text-primary">Features</h2>
        <ul class="list-group shadow-sm mb-5">
            <li class="list-group-item">✔️ View a list of destinations</li>
            <li class="list-group-item">➕ Add a new destination</li>
            <li class="list-group-item">➕ Add a new category</li>
            <li class="list-group-item">✏️ Update an existing destination</li>
            <li class="list-group-item">✏️ Update an existing category</li>
            <li class="list-group-item">❌ Delete a destination</li>
            <li class="list-group-item">❌ Delete a category</li>
            <li class="list-group-item">📍 Add destinations to your list</li>
            <li class="list-group-item">🚫 Remove destinations from your list</li>
        </ul>
    </section>

    <!-- User Testimonials -->
    <section class="my-5">
        <h2 class="text-primary text-center">What Users Say</h2>
        <div class="row mt-4">
            <div class="col-md-4">
                <div class="card shadow-sm">
                    <div class="card-body">
                        <p class="card-text">"The best app for managing my travel bucket list! Super easy to use and visually stunning."</p>
                        <p class="text-end text-primary">- Alex D.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card shadow-sm">
                    <div class="card-body">
                        <p class="card-text">"I love how I can categorize my destinations and keep track of my adventures. Highly recommend!"</p>
                        <p class="text-end text-primary">- Sarah M.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card shadow-sm">
                    <div class="card-body">
                        <p class="card-text">"A must-have for any traveler! Makes planning so much easier."</p>
                        <p class="text-end text-primary">- John T.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Call to Action -->
    <section class="text-center bg-primary text-white py-5 rounded shadow-lg">
        <h2>Ready to Explore?</h2>
        <p class="fs-5">Sign up today and start organizing your travel dreams with Destination List!</p>
        <a href="/signup" class="btn btn-light btn-lg rounded-pill shadow">Get Started</a>
    </section>
</div>



<script>
  import "./styles.css";
  let { children } = $props();
</script>

<!-- Navbar -->
<nav class="navbar navbar-expand-lg navbar-dark bg-gradient-dark shadow-sm">
  <div class="container">
    <a class="navbar-brand fw-bold" href="/">
      <span class="logo-icon">🌍</span> <span class="logo-text">Destination List</span>
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link" href="/destinations">Destinations</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/categories">Categories</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/mylist">My List</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<!-- Main Content -->
<div class="container mt-4">
  <div class="row">
    <div class="col-lg-12">
      {@render children()}
    </div>
  </div>
</div>

<!-- Footer -->
<footer class="footer bg-dark text-white text-center py-4">
  <h5>Created by <a href="mailto:shariaad@students.zhaw.ch" class="text-info text-decoration-none">shariaad@students.zhaw.ch</a></h5>
  <h6>Prototyping LN2</h6>
  <p class="m-0">© 2024 Destination List. All Rights Reserved.</p>
</footer>



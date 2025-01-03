<script>
  import "./styles.css";
  import { afterNavigate } from "$app/navigation"; // Import afterNavigate lifecycle function
  let { children } = $props();

  let searchQuery = $state(""); // Variable to bind the search input
  let suggestions = $state([]);
  let showSuggestions = $state(false);

  function handleSearch(event) {
    event.preventDefault(); // Prevent the default form submission
    if (searchQuery.trim() !== "") {
      const matchedSuggestion = suggestions.find(
        (suggestion) =>
          suggestion.name.toLowerCase() === searchQuery.trim().toLowerCase(),
      );

      if (matchedSuggestion) {
        // Redirect to the matched suggestion URL
        window.location.href = matchedSuggestion.url;
      } else {
        // If no match is found, redirect to a "not found" or search results page
        console.log("No exact match found. Redirecting to search results...");
        window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
      }
    }
  }

  function handleInput(event) {
    searchQuery = event.target.value;
    if (searchQuery.trim().length > 0) {
      showSuggestions = true;
      suggestions = getSuggestions(searchQuery);
    } else {
      showSuggestions = false;
      suggestions = [];
    }
  }

  function getSuggestions(query) {
    const pages = [
      { name: "Destinations", url: "/destinations" },
      { name: "Contact", url: "/contact" },
      { name: "Categories", url: "/categories" },
      { name: "My List", url: "/mylist" },
      { name: "Map", url: "/map" },
      { name: "Weather", url: "/weather" },
    ];
    return pages.filter((page) =>
      page.name.toLowerCase().includes(query.toLowerCase()),
    );
  }

  function handleSuggestionClick(suggestion) {
    searchQuery = suggestion.name;
    showSuggestions = false;
    window.location.href = suggestion.url;
  }

  // Ensure the page scrolls to the top after navigation
  afterNavigate(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  });
</script>

<!-- Navbar -->
<nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
  <div
    class="container-fluid d-flex align-items-center justify-content-between"
  >
    <!-- Left side: Logo and Links -->
    <div class="d-flex align-items-center">
      <a class="navbar-brand fw-bold me-3 logo-container" href="/">
        <span class="logo-icon fs-3 me-2">🌍</span>
        <span class="logo-text fs-4">Destination List</span>
      </a>
      <ul class="navbar-nav d-flex flex-row align-items-center">
        <li class="nav-item">
          <a class="nav-link fw-bold" href="/destinations">Destinations</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bold" href="/categories">Categories</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bold" href="/mylist">My List</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bold" href="/map">Map</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bold" href="/weather">Weather</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bold" href="/contact">Contact</a>
        </li>
      </ul>
    </div>

    <!-- Right side: Search Bar -->
    <form class="search-bar d-flex" role="search" onsubmit={handleSearch}>
      <input
        class="form-control border-0 rounded-start shadow-sm"
        type="search"
        placeholder="Search destinations..."
        aria-label="Search"
        bind:value={searchQuery}
        oninput={handleInput}
      />
      <button class="btn btn-success rounded-end shadow-sm px-4" type="submit">
        Search
      </button>
      {#if showSuggestions}
        <ul class="suggestions-list">
          {#each suggestions as suggestion}
            <li>
              <button
                type="button"
                class="suggestion-item"
                onclick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion.name}
              </button>
            </li>
          {/each}
        </ul>
      {/if}
    </form>
  </div>
</nav>

<!-- Main Content -->
<div class="container mt-5">
  <div class="row">
    <div class="col-lg-12">
      {@render children()}
    </div>
  </div>
</div>

<!-- Footer -->
<footer class="footer bg-primary text-white text-center py-5 shadow">
  <div class="container">
    <!-- Contact -->
    <p class="fs-5">
      Have a question or need help?{" "}
      <a href="/contact" class="text-light fw-bold text-decoration-underline"
        >Click here to contact us</a
      >.
    </p>

    <!-- Creator Info -->
    <p class="mb-4">
      Designed by <span class="text-info fw-bold">Shariaad</span> | Prototyping LN2
    </p>

    <!-- Social Media Links -->
    <div class="mb-4">
      <h4 class="mb-3">Follow Us</h4>
      <a
        href="https://facebook.com"
        target="_blank"
        class="me-3"
        aria-label="Facebook"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
          alt="Facebook Icon"
          width="32"
          height="32"
        />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        class="me-3"
        aria-label="Twitter"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
          alt="Twitter Icon"
          width="32"
          height="32"
        />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        class="me-3"
        aria-label="Instagram"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
          alt="Instagram Icon"
          width="32"
          height="32"
        />
      </a>
    </div>

    <!-- Copyright -->
    <p class="mb-0">© 2024 Destination List. All Rights Reserved.</p>
  </div>
</footer>


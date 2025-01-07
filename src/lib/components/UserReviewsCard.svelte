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
        border-radius: 8px; 
        overflow: hidden; 
        transition:
            transform 0.2s ease,
            box-shadow 0.2s ease; 
        height: 100%; 
        display: flex;
        flex-direction: column;
    }

    .user-review-card:hover {
        transform: translateY(-5px); 
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); 
    }

    .user-review-card .card-body {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between; 
    }

    .user-review-card .card-text {
        color: #6c757d; 
        margin-bottom: 1rem; 
        display: -webkit-box; 
        -webkit-line-clamp: 3; 
        line-clamp: 3; 
        -webkit-box-orient: vertical; 
        overflow: hidden; 
        text-overflow: ellipsis; 
    }
</style>

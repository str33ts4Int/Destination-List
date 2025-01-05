<script>
    import { onMount } from "svelte";
    import { page } from "$app/stores";

    let firstName = $state("");
    let lastName = $state("");
    let email = $state("");
    let phone = $state("");
    let reason = $state("");
    let submitted = $state(false);
    let message = $state("");

    $effect(() => {
        if ($page.form?.success) {
            submitted = true;
            message = $page.form.message;

            // Felder leeren
            firstName = "";
            lastName = "";
            email = "";
            phone = "";
            reason = "";

            // Hide the message after 6 seconds
            setTimeout(() => {
                submitted = false;
            }, 6000);
        }
    });
</script>

<div class="container d-flex flex-column min-vh-100">
    <div class="contact-container">
        <h1 class="text-center text-primary display-4 mb-4">Contact Us</h1>
        {#if submitted}
            <div class="alert alert-success text-center" role="alert">
                {message}
            </div>
        {/if}
        <form method="POST" class="contact-form">
            <div class="form-group">
                <label for="firstName">First Name</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    bind:value={firstName}
                    class="form-control"
                    placeholder="Enter your first name"
                    required
                />
            </div>
            <div class="form-group">
                <label for="lastName">Last Name</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    bind:value={lastName}
                    class="form-control"
                    placeholder="Enter your last name"
                    required
                />
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    bind:value={email}
                    class="form-control"
                    placeholder="Enter your email address"
                    required
                />
            </div>
            <div class="form-group">
                <label for="phone">Phone</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    bind:value={phone}
                    class="form-control"
                    placeholder="Enter your phone number"
                    required
                />
            </div>
            <div class="form-group">
                <label for="reason">Reason for Enquiry</label>
                <textarea
                    id="reason"
                    name="reason"
                    bind:value={reason}
                    class="form-control"
                    placeholder="Tell us why you're reaching out"
                    required
                ></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-block mt-4"
                >Submit</button
            >
        </form>
    </div>
</div>

<style>
    .container {
        display: auto;
        justify-content: center;
        align-items: center;
        padding: 2rem;
        background-color: #f8f9fa;
    }

    .contact-container {
        background: #ffffff;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        max-width: 1200px; 
        width: 100%;
    }

    .contact-form {
        min-height: 800px; 
    }

    .contact-form label {
        font-weight: bold;
        margin-bottom: 0.5rem;
        display: block;
    }

    .contact-form input,
    .contact-form textarea {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid #ced4da;
        border-radius: 4px;
        font-size: 1rem;
    }

    .contact-form input:focus,
    .contact-form textarea:focus {
        border-color: #80bdff;
        outline: none;
        box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }

    .contact-form button {
        background-color: #007bff;
        color: #ffffff;
        padding: 0.75rem;
        border: none;
        border-radius: 4px;
        font-size: 1.25rem;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .contact-form button:hover {
        background-color: #0056b3;
    }

    .alert {
        margin-bottom: 1.5rem;
    }
</style>

<script>
    let { form } = $props();
    let firstName = $state();
    let lastName = $state();
    let email = $state();
    let phone = $state();
    let reason = $state();
    let submitted = $state(false);
</script>

<div class="contact-container">
    <h1 class="text-center text-primary display-4 mb-4">Contact Us</h1>
    {#if submitted}
        <div class="alert alert-success text-center" role="alert">
            Thank you for your message! We will get back to you shortly.
        </div>
    {/if}
    <form on:submit|preventDefault={form} class="contact-form">
        <div class="form-group">
            <label for="firstName">First Name</label>
            <input
                type="text"
                id="firstName"
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
                bind:value={reason}
                class="form-control"
                placeholder="Tell us why you're reaching out"
                required
            ></textarea>
        </div>
        <button type="submit" class="btn btn-primary btn-block mt-4">Submit</button>
    </form>
</div>

<style>
    /* General container styling */
    .contact-container {
        max-width: 600px;
        margin: 2rem auto;
        padding: 2rem;
        background-color: #ffffff;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    /* Form Header */
    h1 {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    }

    /* Form Group */
    .form-group {
        margin-bottom: 1.5rem;
    }

    /* Labels */
    label {
        font-weight: bold;
        margin-bottom: 0.5rem;
        display: inline-block;
        font-size: 1rem;
    }

    /* Inputs and Textarea */
    .form-control {
        width: 100%;
        padding: 0.75rem;
        font-size: 1rem;
        border: 1px solid #ccc;
        border-radius: 5px;
        transition: border-color 0.3s ease;
    }

    .form-control:focus {
        border-color: #007bff;
        outline: none;
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.25);
    }

    textarea {
        min-height: 120px;
        resize: vertical;
    }

    /* Submit Button */
    .btn-block {
        display: block;
        width: 100%;
    }

    .btn-primary {
        padding: 0.75rem;
        font-size: 1.1rem;
        border-radius: 5px;
        transition: background-color 0.3s ease, box-shadow 0.3s ease;
    }

    .btn-primary:hover {
        background-color: #0056b3;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    /* Success Alert */
    .alert-success {
        margin-bottom: 1.5rem;
        padding: 1rem;
        border-radius: 5px;
        background-color: #d4edda;
        color: #155724;
        border: 1px solid #c3e6cb;
    }
</style>

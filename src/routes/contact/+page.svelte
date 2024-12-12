<script>
    let firstName = '';
    let lastName = '';
    let email = '';
    let phone = '';
    let reason = '';

    function handleSubmit() {
        alert(`Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nReason: ${reason}`);
    }
</script>

<h1>Contact Us</h1>

<form on:submit|preventDefault={handleSubmit}>
    <div class="form-group">
        <label for="firstName">First Name:</label>
        <input type="text" id="firstName" bind:value={firstName} required />
    </div>
    <div class="form-group">
        <label for="lastName">Last Name:</label>
        <input type="text" id="lastName" bind:value={lastName} required />
    </div>
    <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" bind:value={email} required />
    </div>
    <div class="form-group">
        <label for="phone">Phone:</label>
        <input type="tel" id="phone" bind:value={phone} required />
    </div>
    <div class="form-group">
        <label for="reason">Reason for Enquiry:</label>
        <textarea id="reason" bind:value={reason} required></textarea>
    </div>
    <button type="submit">Submit</button>
</form>

<style>
    form {
        display: flex;
        flex-direction: column;
        max-width: 400px;
        margin: auto;
        background-color: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    .form-group {
        display: flex;
        flex-direction: column;
        margin-bottom: 16px;
    }

    label {
        margin-bottom: 8px;
        font-weight: bold;
    }

    input, textarea {
        padding: 8px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    textarea {
        resize: vertical;
        min-height: 100px;
    }

    button {
        padding: 10px 20px;
        font-size: 16px;
        color: white;
        background-color: #007bff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    button:hover {
        background-color: #0056b3;
    }
</style>
<script>
    let { form } = $props();
    let firstName = $state();
    let lastName = $state();
    let email = $state();
    let phone = $state();
    let reason = $state();

</script>

<h1>Contact Us</h1>

<form on:submit|preventDefault={form}>
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

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const firstName = formData.get('firstName');
        const lastName = formData.get('lastName');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const reason = formData.get('reason');

        // Here you can handle the form data, e.g., save it to a database or send an email

        console.log('Form submitted:', { firstName, lastName, email, phone, reason });

        return {
            success: true,
            message: 'Your message has been sent.'
        };
    }
};
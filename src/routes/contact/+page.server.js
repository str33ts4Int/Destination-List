export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const firstName = formData.get('firstName');
        const lastName = formData.get('lastName');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const reason = formData.get('reason');
        console.log('Form submitted:', { firstName, lastName, email, phone, reason });
        return {
            success: true,
            message: 'Your message has been sent.'
        };
    }
};
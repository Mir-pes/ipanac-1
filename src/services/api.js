// API Service for form submissions
const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT || 'https://YOUR_API_ID.execute-api.ap-south-1.amazonaws.com/prod/submit';

export const submitForm = async (formType, formData) => {
    try {
        const response = await fetch(API_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                formType,
                formData
            })
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || 'Failed to submit form');
        }

        return result;
    } catch (error) {
        console.error('Form submission error:', error);
        throw error;
    }
};

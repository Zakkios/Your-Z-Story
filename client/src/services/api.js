const API_URL = 'http://localhost:3001';

export const getChapter = async () => {
    const response = await fetch(`${API_URL}/chapter`);
    if (!response.ok) throw new Error('Failed to fetch chapter');
    return response.json();
};

export const sendChoice = async (choice) => {
    const response = await fetch(`${API_URL}/choice`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ choice }),
    });
    if (!response.ok) throw new Error('Failed to send choice');
    return response.json();
};
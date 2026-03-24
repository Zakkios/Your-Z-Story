const API_URL = 'http://localhost:3001';

export const getEnemy = async () => {
    const response = await fetch(`${API_URL}/enemy`);
    if (!response.ok) throw new Error('Failed to fetch enemy');
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
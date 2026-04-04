const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001";

export const fetchScene = async (chapterId, sceneId) => {
    const response = await fetch(`${API_URL}/chapter/${chapterId}/scene/${sceneId}`, {
        method: "GET"
    });

    if (!response.ok) {
        throw new Error("Failed to fetch scene");
    }

    const responseJson = await response.json();
    const codeStatus = response.status;

    return {
        scene: responseJson,
        status: codeStatus
    };
};

export const sendChoice = async (payload) => {
    const response = await fetch(`${API_URL}/choice`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });

    if (!response.ok) {
        throw new Error("Failed to send choice");
    }

    const responseJson = await response.json();
    const codeStatus = response.status;

    return {
        scene: responseJson,
        status: codeStatus
    };
};
import React, { useState, useEffect } from 'react';

const FirstChoice = () => {
    const [enemy, setEnemy] = useState(null);
    const [choice, setChoice] = useState(false);
    const [result, setResult] = useState(null);

    useEffect(() => {
        const fetchEnemy = async () => {
            try {
                const response = await fetch('http://localhost:3001/enemy');
                const data = await response.json();
                setEnemy(data.enemy ?? null);
            } catch (error) {
                console.error('Error fetching enemy:', error);
                setEnemy(null);
            }
        };

        fetchEnemy();
    }, []);

    const handleChoice = async (choice) => {
        try {
            const response = await fetch('http://localhost:3001/choice', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ choice }),
            });
            const data = await response.json();
            setResult(data.text);
            setChoice(true);
        } catch (error) {
            console.error('Error making choice:', error);
            alert('Une erreur est survenue. Veuillez réessayer.');
        }
    };


    return (
        <>
            <h1 className="text-3xl font-bold p-4">Bievenue dans Your Z Story</h1>
            <h2 className="text-xl font-semibold p-2 text-red-500">{enemy ? `${enemy} apparaît !` : 'Aucun ennemi en vue.'}</h2>
            <h3 className="text-lg font-medium p-2">Faites un choix</h3>
            {result && <p className="text-md p-2">{result}</p>}
            {!choice && (
                <>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded" onClick={() => handleChoice('fight')}>Affronter l'ennemi</button>
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 m-2 rounded" onClick={() => handleChoice('run')}>Prendre la fuite</button>
                </>
            )}
        </>
    );
};

export default FirstChoice;
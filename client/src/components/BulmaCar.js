import { useState, useEffect } from 'react';
import { getChapter, sendChoice } from '../services/api';

const BulmaCar = () => {
    const [chapter, setChapter] = useState(null);
    const [hasChosen, setHasChosen] = useState(false);
    const [result, setResult] = useState(null);

    useEffect(() => {
        const fetchChapter = async () => {
            try {
                const data = await getChapter();
                setChapter(data.chapter ?? null);
            } catch (error) {
                console.error('Error fetching chapter:', error);
                setChapter(null);
            }
        };

        fetchChapter();
    }, []);

    const handleChoice = async (choice) => {
        try {
            const data = await sendChoice(choice);
            setResult(data.text);
            setHasChosen(true);
        } catch (error) {
            console.error('Error making choice:', error);
            alert('Une erreur est survenue. Veuillez réessayer.');
        }
    };

    return (
        <>
            <h1 className="text-3xl font-bold p-4">Bienvenue dans Your Z Story</h1>

            <h2 className="text-xl font-semibold p-2 text-red-500">
                {chapter ? `${chapter.title}` : 'Aucun chapitre en vue.'}
            </h2>

            <h3 className="text-lg font-medium p-2">Faites un choix</h3>

            {result && <p className="text-md p-2">{result}</p>}

            {!hasChosen && (
                <>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded"
                        onClick={() => handleChoice('fight')}
                    >
                        Affronter l'ennemi
                    </button>

                    <button
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 m-2 rounded"
                        onClick={() => handleChoice('run')}
                    >
                        Prendre la fuite
                    </button>
                </>
            )}
        </>
    );
};

export default BulmaCar;
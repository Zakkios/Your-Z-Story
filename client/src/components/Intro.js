
import { useState } from 'react';
import { getChapter } from '../services/api';

const Intro = ({ startGame }) => {
    const [chapter, setChapter] = useState(null);
    const [error, setError] = useState(null);

    useState(() => {
        const fetchChapter = async () => {
            try {
                const data = await getChapter();
                setChapter(data ?? null);
                console.log('Fetched chapter:', data);
            } catch (error) {
                console.error('Error fetching chapter:', error);
                setError('Failed to load chapter. Please try again later.');
            }
        };
        fetchChapter();
    }, []);

    return (
        <div className="welcome-container">
            <h1 className="text-3xl font-bold p-4">{chapter ? chapter.title : 'Bienvenue dans Your Z Story'}</h1>
            <p className="text-lg p-2">
                {chapter ? chapter.text : ''}
            </p>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded"
                onClick={startGame}
            >
                Lancer l’aventure !
            </button>
            {error && <p className="text-red-500 p-2">{error}</p>}
        </div>
    );
};

export default Intro;
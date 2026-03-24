import { useState } from 'react';
import BulmaCar from '../components/BulmaCar';
import Intro from '../components/Intro';
import { sendChoice } from '../services/api';

const GamePage = () => {
    const [gameStarted, setGameStarted] = useState(false);

    const startGame = () => {
        setGameStarted(true);
        try {
            sendChoice("1");
        } catch (error) {
            console.error('Error starting game:', error);
            alert('Une erreur est survenue lors du démarrage du jeu. Veuillez réessayer.');
        }
    };

    return (
        <div>
            {gameStarted ? null : <Intro startGame={startGame} />}
            {gameStarted && <BulmaCar />}
        </div>
    );
};

export default GamePage;
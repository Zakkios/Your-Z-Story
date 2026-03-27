import { useEffect, useState } from 'react';
import { fetchScene, sendChoice } from '../services/api';
import SceneRenderer from '../components/SceneRenderer';
import GameOverSceneRenderer from '../components/GameOverSceneRenderer';

const GamePage = () => {
    const [gameState, setGameState] = useState(null);
    const [isGameOver, setIsGameOver] = useState(false);

    useEffect(() => {
        const load = async () => {
            const data = await fetchScene("chapter0", "intro");
            setGameState(data);
            setIsGameOver(data.status === "gameover");
        };

        load();
    }, []);

    const handleChoice = async (choiceId) => {
        const choice = gameState.choices[choiceId];
        const payload = {
            chapterId: choice.nextChapterId,
            sceneId: choice.nextSceneId,
            choiceId
        };
        setGameState(null)
        const nextState = await sendChoice(payload);
        setGameState(nextState);
        console.log("Next state:", nextState);
        setIsGameOver(nextState.status === "gameover");
    };

    if (!gameState) {
        return <div>Chargement...</div>;
    }

    return (
        <>
            {isGameOver ? (
                <GameOverSceneRenderer
                    scene={gameState}
                    onChoice={handleChoice}
                />
            ) : (
                <SceneRenderer
                    scene={gameState}
                    onChoice={handleChoice}
                />
            )}
        </>
    );
};

export default GamePage;


import { useEffect, useState } from 'react';
import { fetchScene, sendChoice } from '../services/api';
import SceneRenderer from '../components/SceneRenderer';

const GamePage = () => {
    const [gameState, setGameState] = useState(null);

    useEffect(() => {
        const load = async () => {
            const data = await fetchScene("chapter0", "intro");
            setGameState(data);
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
    };

    if (!gameState) {
        return <div>Chargement...</div>;
    }

    return (
        <SceneRenderer
            scene={gameState}
            onChoice={handleChoice}
        />
    );
};

export default GamePage;


import { useEffect, useState } from 'react';
import { fetchScene, sendChoice } from '../services/api';
import SceneRenderer from '../components/SceneRenderer';
import GameOverSceneRenderer from '../components/GameOverSceneRenderer';

const GamePage = () => {
    const [gameState, setGameState] = useState(null);
    const [isGameOver, setIsGameOver] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const load = async () => {
            try {
                const data = await fetchScene("chapter0", "intro");
                if (!data || data.status !== 200) {
                    setError("Erreur lors du chargement de la scène. Veuillez réessayer plus tard.");
                    return;
                }
                const scene = data.scene;
                setGameState(scene);
                setIsGameOver(scene?.status === "gameover");
            } catch (err) {
                console.error("Error fetching initial scene:", err);
                setError("Erreur lors du chargement de la scène. Veuillez réessayer plus tard.");
            }
        };

        load();
    }, []);

    const handleChoice = async (choiceId) => {
        const choice = gameState.choices.find((choice) => choice.id === choiceId);
        if (!choice) {
            setError("Une erreur s'est produite lors du traitement de votre choix. Veuillez réessayer plus tard.");
            return;
        }

        const payload = {
            chapterId: choice.nextChapterId,
            sceneId: choice.nextSceneId,
            choiceId
        };
        setGameState(null)
        try {
            const data = await sendChoice(payload);
            if (!data || data.status !== 200) {
                setError("Erreur lors du chargement de la scène. Veuillez réessayer plus tard.");
                return;
            }
            const scene = data.scene;
            setGameState(scene);
            setIsGameOver(scene?.status === "gameover");
        } catch (err) {
            console.error("Error sending choice:", err);
            setError("Erreur lors du chargement de la scène. Veuillez réessayer plus tard.");
        }
    };

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }


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


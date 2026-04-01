import { useEffect, useState } from 'react';
import { fetchScene, sendChoice } from '../services/api';
import { useNavigate } from 'react-router-dom';

const useGame = ({ chapterId, sceneId = null }) => {
    const [gameState, setGameState] = useState(null);
    const [isGameOver, setIsGameOver] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const load = async () => {
            try {
                const data = await fetchScene(chapterId, sceneId);
                if (!data || data.status !== 200) {
                    setError("Erreur lors du chargement de la scène. Veuillez réessayer plus tard.");
                    return;
                }
                console.log("Fetched scene data:", data);
                const scene = data.scene;
                setGameState(scene);
                setIsGameOver(scene?.status === "gameover");
            } catch (err) {
                console.error("Error fetching initial scene:", err);
                setError("Erreur lors du chargement de la scène. Veuillez réessayer plus tard.");
            }
        };

        load();
    }, [chapterId, sceneId]);

    const handleChoice = async (choiceId) => {
        const choice = gameState.choices.find((choice) => choice.id === choiceId);
        if (!choice) {
            setError("Une erreur s'est produite lors du traitement de votre choix. Veuillez réessayer plus tard.");
            return;
        }

        if (choice.nextChapterId !== chapterId) {
            navigate(`/chapter/${choice.nextChapterId}`);
            return;
        }

        const payload = {
            chapterId: choice.nextChapterId,
            sceneId: choice.nextSceneId,
            choiceId
        };
        setGameState(null);
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

    return { gameState, isGameOver, error, handleChoice };
};

export default useGame;

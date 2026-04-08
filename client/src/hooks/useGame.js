import { useEffect, useState, useCallback } from 'react';
import { fetchScene, sendChoice } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { saveLastChapterId } from '../services/gameProgress';

const useGame = ({ chapterId, sceneId = null }) => {
    const [gameState, setGameState] = useState(null);
    const [isGameOver, setIsGameOver] = useState(false);
    const [isNewChapter, setIsNewChapter] = useState(true);
    const [chapterTitle, setChapterTitle] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const load = useCallback(async () => {
        try {
            setError(null);
            setGameState(null);
            setIsGameOver(false);

            const data = await fetchScene(chapterId, sceneId);

            if (!data || data.status !== 200) {
                setError("Erreur lors du chargement de la scène. Veuillez réessayer plus tard.");
                return;
            }

            if (data.chapterTitle) {
                setChapterTitle(data.chapterTitle);
            }

            const scene = data.scene;
            saveLastChapterId(chapterId);
            setGameState(scene);
            setIsGameOver(scene?.status === "gameover");
        } catch (err) {
            console.error("Error fetching initial scene:", err);
            setError("Erreur lors du chargement de la scène. Veuillez réessayer plus tard.");
        }
    }, [chapterId, sceneId]);

    useEffect(() => {
        load();
    }, [load]);

    const handleChoice = async (choiceId) => {
        const choice = gameState?.choices?.find((choice) => choice.id === choiceId);

        if (!choice) {
            setError("Une erreur s'est produite lors du traitement de votre choix. Veuillez réessayer plus tard.");
            return;
        }

        if (choice.nextChapterId !== chapterId) {
            saveLastChapterId(choice.nextChapterId);
            setIsNewChapter(true);
            navigate(`/chapter/${choice.nextChapterId}`);
            return;
        }

        setIsNewChapter(false);

        const payload = {
            chapterId: choice.nextChapterId,
            sceneId: choice.nextSceneId,
            choiceId
        };

        try {
            setError(null);
            setGameState(null);

            const data = await sendChoice(payload);

            if (!data || data.status !== 200) {
                setError("Erreur lors du chargement de la scène. Veuillez réessayer plus tard.");
                return;
            }

            const scene = data.scene;
            saveLastChapterId(chapterId);
            setGameState(scene);
            setIsGameOver(scene?.status === "gameover");
        } catch (err) {
            console.error("Error sending choice:", err);
            setError("Erreur lors du chargement de la scène. Veuillez réessayer plus tard.");
        }
    };

    const restartCurrentChapter = async () => {
        await load();
    };

    return { gameState, chapterTitle, isNewChapter, isGameOver, error, handleChoice, restartCurrentChapter };
};

export default useGame;

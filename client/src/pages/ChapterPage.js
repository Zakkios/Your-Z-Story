import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import GameOverSceneRenderer from "../components/game/GameOverSceneRenderer";
import SceneRenderer from "../components/game/SceneRenderer";
import Loading from "../components/ui/Loading";

const ChapterPage = () => {
    const { chapterId } = useParams();
    const { gameState, isGameOver, error, handleChoice, restartCurrentChapter } = useGame({ chapterId });

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    if (!gameState) {
        return <Loading />;
    }

    return (
        <>
            {isGameOver ? (
                <GameOverSceneRenderer
                    scene={gameState}
                    restartCurrentChapter={restartCurrentChapter}
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

export default ChapterPage;
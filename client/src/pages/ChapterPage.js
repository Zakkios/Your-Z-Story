import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import GameOverSceneRenderer from "../components/game/GameOverSceneRenderer";
import SceneRenderer from "../components/game/SceneRenderer";
import Loading from "../components/ui/Loading";
import { useEffect, useState } from "react";
import ChapterTitleRender from "../components/game/ChapterTitleRender";

const ChapterPage = () => {
    const { chapterId } = useParams();
    const { gameState, chapterTitle, isNewChapter, isGameOver, error, handleChoice, restartCurrentChapter } = useGame({ chapterId });

    const [showTitle, setShowTitle] = useState(false);

    useEffect(() => {
        if (isNewChapter && chapterTitle) {
            setShowTitle(true);
            const timer = setTimeout(() => setShowTitle(false), 2500);
            return () => clearTimeout(timer);
        }
    }, [isNewChapter, chapterTitle]);

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    if (!gameState) {
        return <Loading />;
    }

    return (
        <>
            <div className={`absolute flex justify-center items-center min-h-[100vh] min-w-[100vw] z-10 ${showTitle ? "opacity-100" : "opacity-0 pointer-events-none transition-opacity duration-700 ease-in-out"}`}>
                <ChapterTitleRender title={chapterTitle} />
            </div>

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
import useGame from '../hooks/useGame';
import SceneRenderer from '../components/game/SceneRenderer';
import GameOverSceneRenderer from '../components/game/GameOverSceneRenderer';

const GamePage = () => {
    const { gameState, isGameOver, error, handleChoice } = useGame();

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

import { useEffect, useState } from "react";

const SceneRenderer = ({ scene, onChoice }) => {
    const [currentShotIndex, setCurrentShotIndex] = useState(0);

    const shots = scene?.shots || [];
    const hasShots = shots.length > 0;
    const areShotsFinished = !hasShots || currentShotIndex >= shots.length;

    useEffect(() => {
        setCurrentShotIndex(0);
    }, [scene]);

    const handleNext = () => {
        if (!hasShots) return;
        setCurrentShotIndex((prev) => prev + 1);
    };

    return (
        <>
            {!areShotsFinished && (
                <div id="shots" className="mb-4">
                    <div className={`${shots[currentShotIndex].transition}`}>
                        <img
                            src={shots[currentShotIndex].image}
                            alt={shots[currentShotIndex].title || `shot-${currentShotIndex}`}
                            className={`${shots[currentShotIndex].animation}`}
                        />
                    </div>
                </div>
            )}

            {areShotsFinished && (
                <div id="scene-content">
                    <h1>{scene.title}</h1>
                    <p>{scene.text}</p>

                    <div>
                        {scene.choices.map((choice) => (
                            <button
                                key={choice.id}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded"
                                onClick={() => onChoice(choice.id)}
                            >
                                {choice.text}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {!areShotsFinished && (
                <div className="absolute bottom-20 right-20">
                    <button
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                        onClick={handleNext}
                    >
                        Next
                    </button>
                </div>
            )}
        </>
    );
};

export default SceneRenderer;
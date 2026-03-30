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

    const handlePrevious = () => {
        if (!hasShots) return;
        setCurrentShotIndex((prev) => Math.max(prev - 1, 0));
    }

    const displayedShot = areShotsFinished
        ? shots[shots.length - 1]
        : shots[currentShotIndex];

    return (
        <div id="scene-renderer" className="flex flex-col">
            {areShotsFinished && (
                <h1 className="text-4xl mb-4">{scene.title}</h1>
            )}
            {
                hasShots && displayedShot && (
                    <div
                        id="shots"
                        className={`
                mb-4 flex justify-center items-center overflow-hidden
                transition-all duration-500 ease-in-out
                ${areShotsFinished ? "max-h-[50vh]" : "h-auto"}
            `}
                    >
                        <div
                            className={`
                    w-full flex flex-col justify-center items-center
                    transition-all duration-500 ease-in-out
                    ${displayedShot.transition || ""}
                `}
                        >
                            <img
                                src={displayedShot.image}
                                alt={displayedShot.title || "scene-shot"}
                                className={`
                        w-auto object-contain transition-all duration-500 ease-in-out
                        ${displayedShot.animation || ""}
                        ${areShotsFinished ? "h-full max-h-[50vh]" : "max-h-[80vh]"}
                    `}
                            />
                        </div>
                    </div>
                )
            }

            {
                areShotsFinished && (
                    <div id="scene-content">
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
                )
            }

            {
                !areShotsFinished && (
                    <>
                        <div className="absolute bottom-20 right-20">
                            <button
                                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                                onClick={handleNext}
                            >
                                Next
                            </button>
                        </div>
                        <div className="absolute bottom-20 left-20">
                            <button
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                onClick={handlePrevious}
                            >
                                Previous
                            </button>
                        </div>
                    </>
                )
            }
        </div >
    );
};

export default SceneRenderer;

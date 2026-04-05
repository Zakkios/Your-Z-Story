import { useEffect, useState } from "react";
import Button from "../ui/Button";
import preloadImages from "../../services/preloadImages";
import Loading from "../ui/Loading";

const SceneRenderer = ({ scene, onChoice }) => {
    const [currentShotIndex, setCurrentShotIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setCurrentShotIndex(0);
        setIsLoading(true);
        const imagesUrls = scene?.shots
            .filter((shot) => shot.isImageType === "true" && shot.image)
            .map((shot) => shot.image) ?? [];
        preloadImages(imagesUrls).then(() => {
            setIsLoading(false);
        }).catch((error) => {
            console.error("Error preloading images:", error);
            setIsLoading(false);
        });
    }, [scene]);

    if (isLoading) {
        return <Loading />;
    }

    const shots = scene?.shots || [];
    const hasShots = shots.length > 0;
    const areShotsFinished = !hasShots || currentShotIndex >= shots.length;

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
                <h1 className="text-6xl max-md:text-4xl mb-4 bebas-neue">{scene.title}</h1>
            )}
            {
                hasShots && displayedShot && displayedShot.isImageType === "true" ? (
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
                        bebas-neue w-auto object-contain transition-all duration-500 ease-in-out
                        ${displayedShot.animation || ""}
                        ${areShotsFinished ? "h-full max-h-[50vh]" : "max-h-[60vh]"}
                    `}
                            />
                            <p dangerouslySetInnerHTML={{ __html: displayedShot.text }} className={`pt-4 cc-wild-words-roman text-lg max-md:text-sm ${areShotsFinished ? "hidden" : ""}`} />
                        </div>
                    </div>
                ) : (
                    <p className="cc-wild-words-roman text-xl max-md:text-base" dangerouslySetInnerHTML={{ __html: displayedShot.text }} />
                )
            }
            {
                areShotsFinished && (
                    <div id="scene-content">
                        <p className="cc-wild-words-roman text-lg max-md:text-sm" dangerouslySetInnerHTML={{ __html: scene.text }} />
                        <div>
                            {scene.choices.map((choice) => (
                                <Button key={choice.id} text={choice.text} onClick={() => onChoice(choice.id)} />
                            ))}
                        </div>
                    </div>
                )
            }

            {
                !areShotsFinished && (
                    <>
                        <div className="absolute bottom-0 right-10">
                            <button
                                className="bg-contain bg-no-repeat bg-center w-32 h-32 max-sm:w-24 max-sm:h-24 max-xs:w-20 max-xs:h-20"
                                style={{ backgroundImage: "url('/images/kinto.png')" }}
                                onClick={handleNext}
                            >
                            </button>
                        </div>
                        <div className="absolute bottom-0 left-10">
                            <button
                                className="bg-contain bg-no-repeat bg-center w-32 h-32 max-sm:w-24 max-sm:h-24 max-xs:w-20 max-xs:h-20 -scale-x-100"
                                style={{ backgroundImage: "url('/images/kinto.png')" }}
                                onClick={handlePrevious}
                            >
                            </button>
                        </div>
                    </>
                )
            }
        </div >
    );
};

export default SceneRenderer;

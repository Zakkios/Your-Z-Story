import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

const GameOverSceneRenderer = ({ scene, restartCurrentChapter }) => {
    const shot = scene?.shots?.[0] || null;
    const navigate = useNavigate();

    return (
        <div id="scene-renderer" className="flex flex-col">
            <h1 className="bebas-neue text-6xl max-md:text-4xl mb-4">Game Over</h1>
            {
                shot && (
                    <div
                        id="shots"
                        className="flex justify-center items-center overflow-hidden"
                    >
                        <div className={`max-h-[50vh] max-w-full flex justify-center items-center ${shot.transition || ""}`}>
                            <img
                                src={shot.image}
                                alt={shot.title || "scene-shot"}
                                className={`
                        ${shot.animation || ""}
                        max-h-[50vh] max-w-full object-contain
                    `}
                            />
                        </div>
                    </div>
                )
            }
            <div id="scene-content">
                <p className="cc-wild-words-roman text-lg max-md:text-sm mt-4" dangerouslySetInnerHTML={{ __html: scene.text }} />
            </div>
            <div>
                <Button text="Recommencer le chapitre" onClick={() => restartCurrentChapter()} />
                <Button text="Retour à l'écran titre" onClick={() => navigate("/")} />
            </div>
            <div>
            </div>
        </div>
    );
};

export default GameOverSceneRenderer;

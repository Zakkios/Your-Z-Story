const GameOverSceneRenderer = ({ scene, onChoice }) => {
    const shot = scene?.shots?.[0] || null;

    return (
        <div id="scene-renderer" className="flex flex-col">
            <h1 className="text-4xl">GameOver</h1>
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
                <h1>{scene.title}</h1>
                <p>{scene.text}</p>
            </div>
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
    );
};

export default GameOverSceneRenderer;

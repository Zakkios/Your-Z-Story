const SceneRenderer = ({ scene, onChoice }) => {
    return (
        <div>
            <h1>{scene.title}</h1>
            <p>{scene.text}</p>

            <div>
                {scene.choices.map((choice) => (
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded"
                        key={choice.id}
                        onClick={() => onChoice(choice.id)}
                    >
                        {choice.text}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SceneRenderer;
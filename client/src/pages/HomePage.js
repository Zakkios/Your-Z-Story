import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1 className="text-4xl font-bold mb-4">Bienvenue dans Your Z Story</h1>
            <button onClick={() => navigate("/chapter/1")}>
                Commencer l'aventure
            </button>
        </div>
    );
};

export default HomePage;
import { useNavigate } from "react-router-dom";
import EnergyParticles from "../components/home/EnergyParticles";
import HeroActionButton from "../components/home/HeroActionButton";
import { getLastChapterId } from "../services/gameProgress";
import "../styles/homepage.css";

const HOMEPAGE_STEPS = [
    { emoji: "⚖️", label: "Choisis" },
    { emoji: "⚔️", label: "Combats" },
    { emoji: "📈", label: "Progresse" },
];

const HomePage = () => {
    const navigate = useNavigate();
    const savedChapterId = getLastChapterId();

    const handleStart = () => {
        navigate("/chapter/1");
    };

    const handleContinue = () => {
        if (!savedChapterId) {
            return;
        }

        navigate(`/chapter/${savedChapterId}`);
    };

    return (
        <main className="homepage">
            <img
                src="/images/homepage-bg.jpg"
                alt=""
                className="homepage__background"
                width="1920"
                height="1080"
            />
            <div className="homepage__overlay" aria-hidden="true" />
            <EnergyParticles />

            <section className="homepage__content">
                <h1
                    className="homepage__title homepage-enter"
                    style={{ "--homepage-enter-delay": "0ms" }}
                >
                    Gokū-den
                </h1>

                <p
                    className="homepage__subtitle homepage-enter"
                    style={{ "--homepage-enter-delay": "180ms" }}
                >
                    Prépare toi à faire les choix les plus difficiles que Gokū ait jamais eu à faire !
                </p>

                <div
                    className="homepage__actions homepage-enter"
                    style={{ "--homepage-enter-delay": "360ms" }}
                >
                    <HeroActionButton
                        label="Commencer l'aventure"
                        onClick={handleStart}
                        variant="primary"
                    />
                    <HeroActionButton
                        label="Reprendre"
                        onClick={handleContinue}
                        variant="secondary"
                        disabled={!savedChapterId}
                        title={
                            savedChapterId
                                ? `Reprendre au chapitre ${savedChapterId}`
                                : "Aucune progression disponible pour le moment"
                        }
                    />
                </div>

                <div
                    className="homepage__steps homepage-enter"
                    style={{ "--homepage-enter-delay": "560ms" }}
                >
                    {HOMEPAGE_STEPS.map((step, index) => (
                        <div
                            key={step.label}
                            className="homepage__step"
                            style={{ "--homepage-float-delay": `${index * 0.4}s` }}
                        >
                            <span className="homepage__step-icon" aria-hidden="true">
                                {step.emoji}
                            </span>
                            <span className="homepage__step-label">{step.label}</span>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default HomePage;

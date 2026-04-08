import EnergyParticles from "../home/EnergyParticles";
import "../../styles/homepage.css";

const ChapterTitleRender = ({ title }) => {
    return (
        <main className="homepage min-w-[100vw]">
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
                <h1 className=" bebas-neue text-6xl max-md:text-4xl mb-4">{title}</h1>
            </section>
        </main>
    );
}

export default ChapterTitleRender;
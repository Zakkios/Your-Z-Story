const PARTICLE_CONFIG = Array.from({ length: 20 }, (_, index) => ({
  id: index,
  left: `${(index * 11.7 + (index % 4) * 7.5) % 100}%`,
  delay: `${(index * 0.35).toFixed(2)}s`,
  duration: `${(4.5 + (index % 6) * 0.8).toFixed(2)}s`,
  size: `${(2.5 + (index % 5) * 0.9).toFixed(1)}px`,
  tone: index % 2 === 0 ? "orange" : "blue",
}));

const EnergyParticles = () => (
  <div className="homepage-particles" aria-hidden="true">
    {PARTICLE_CONFIG.map((particle) => (
      <span
        key={particle.id}
        className={`homepage-particle homepage-particle--${particle.tone}`}
        style={{
          "--particle-left": particle.left,
          "--particle-delay": particle.delay,
          "--particle-duration": particle.duration,
          "--particle-size": particle.size,
        }}
      />
    ))}
  </div>
);

export default EnergyParticles;

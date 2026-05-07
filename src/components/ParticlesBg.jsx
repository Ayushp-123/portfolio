import Particles from "react-tsparticles";

export default function ParticlesBg() {
  return (
    <Particles
      options={{
        fullScreen: { enable: false },
        particles: {
          number: { value: 40 },
          size: { value: 3 },
          move: { speed: 1 },
          opacity: { value: 0.3 },
        },
      }}
      className="absolute inset-0 -z-10"
    />
  );
}
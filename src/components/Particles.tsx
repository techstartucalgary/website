import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Particle = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    [],
  );
  return (
    <Particles
      className="absolute inset-y-0 left-0 z-0 m-0 size-full"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: false },
        interactivity: {
          detect_on: "canvas",
          events: {
            onclick: {
              enable: true,
              mode: "bubble",
            },
            onhover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 170.53621458328246,
              duration: 0.6496617698410762,
              opacity: 0.162415442460269,
              size: 28.42270243054708,
              /*speed: 3,*/
            },
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1,
              },
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
            repulse: {
              distance: 150,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#17EFC8",
          },
          line_linked: {
            color: "#17EFC8",
            distance: 150,
            enable: true,
            opacity: 0.7455866083024681,
            width: 1.603412060865523,
          },
          move: {
            attract: {
              enable: false,
              rotateX: 7776.548495197786,
              rotateY: 1200,
            },
            bounce: false,
            direction: "none",
            enable: true,
            out_mode: "bounce",
            random: false,
            speed: 4,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 641.3648243462092,
            },
            value: 125,
          },
          opacity: {
            anim: {
              enable: false,
              opacity_min: 0.1,
              speed: 1,
              sync: false,
            },
            random: false,
            value: 0.5,
          },
          shape: {
            image: {
              height: 100,
              src: "img/github.svg",
              width: 100,
            },
            polygon: {
              nb_sides: 5,
            },
            stroke: {
              color: "#ffffff",
              width: 0,
            },
            type: "circle",
          },
          size: {
            anim: {
              enable: false,
              size_min: 0.1,
              speed: 40,
              sync: false,
            },
            random: true,
            value: 0,
          },
        },
        retina_detect: false,
      }}
      style={{ height: "100%", width: "100%" }}
    />
  );
};

export default Particle;

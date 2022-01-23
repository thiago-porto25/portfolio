import * as THREE from "three";

import { useEffect } from "react";
import { Info, Intro, Projects, SocialNetworks } from "../sections";
import { Footer } from "../components";

import { content } from "../utils/content";

export default function Home() {
  useEffect(() => {
    // Starting Three JS
    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector("canvas"),
      antialias: true,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    const scene = new THREE.Scene();

    // Camera Setup
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 30;

    // Lights
    const pointLight = new THREE.PointLight(0x555555, 1);
    pointLight.position.set(15, 15, 15);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1);

    scene.add(ambientLight, pointLight);

    // Triangle
    const geometry = new THREE.TorusGeometry(7, 2, 5, 5);
    const material = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 1,
      roughness: 0.6,
    });
    const triangle = new THREE.Mesh(geometry, material);
    scene.add(triangle);

    // Functions
    const addStar = () => {
      const starGeometry = new THREE.SphereGeometry(0.1, 15, 15);
      const startMaterial = new THREE.MeshBasicMaterial({ color: 0xeeeeee });

      const star = new THREE.Mesh(starGeometry, startMaterial);

      const [x, y, z] = Array(3)
        .fill()
        .map(() => THREE.MathUtils.randFloatSpread(100));

      star.position.set(x, y, z);
      scene.add(star);
    };

    Array(75).fill().forEach(addStar);

    const animate = function () {
      requestAnimationFrame(animate);

      triangle.rotation.x += 0.008;
      triangle.rotation.y += 0.009;
      triangle.rotation.z += 0.006;

      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return (
    <>
      <canvas />

      <main className="absolute z-10">
        <Intro content={content.intro} />
        <Info content={content.info} />
        <Projects content={content.projects} />
        <SocialNetworks content={content.social} />
        <Footer content={content.footer} />
      </main>
    </>
  );
}

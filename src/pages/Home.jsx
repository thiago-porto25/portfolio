import * as THREE from "three";

import { useEffect } from "react";
import { Info, Intro, Projects, SocialNetworks } from "../sections";
import { Footer } from "../components";

import { content } from "../utils/content";

export default function Home() {
  useEffect(() => {
    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector("canvas"),
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const geometry = new THREE.TorusGeometry(10, 3, 16, 30);
    const material = new THREE.MeshBasicMaterial({ color: 0x323233 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 5;

    const animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return (
    <>
      <canvas />

      <main>
        <Intro content={content.intro} />
        <Info content={content.info} />
        <Projects content={content.projects} />
        <SocialNetworks content={content.social} />
      </main>
      <Footer content={content.footer} />
    </>
  );
}

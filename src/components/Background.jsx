import * as THREE from "three";

import { useEffect } from "react";

export default function Background() {
  useEffect(() => {
    // state
    let lastScrollValue = 0;

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

    const pointLight2 = new THREE.PointLight(0x999999, 1);
    pointLight2.position.set(60, 50, -80);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1);

    scene.add(ambientLight, pointLight, pointLight2);

    // Hex
    const tGeometry = new THREE.TorusGeometry(7, 2, 5, 5);
    const tMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 1,
      roughness: 0.6,
    });
    const hex = new THREE.Mesh(tGeometry, tMaterial);
    hex.position.z = -20;
    scene.add(hex);

    // knot
    const nGeometry = new THREE.TorusKnotGeometry(9, 1, 23, 9, 20, 7);
    const nMaterial = new THREE.MeshStandardMaterial({
      color: 0x000000,
      metalness: 1,
      roughness: 0.3,
    });
    const knot = new THREE.Mesh(nGeometry, nMaterial);
    knot.position.z = -50;
    knot.position.y = 20;
    knot.position.x = 50;

    scene.add(knot);

    // knot 2
    const kGeometry = new THREE.TorusKnotGeometry(9, 1, 23, 9, 5, 4);
    const kMaterial = new THREE.MeshStandardMaterial({
      color: 0x441122,
      metalness: 1,
      roughness: 0.3,
    });
    const knot2 = new THREE.Mesh(kGeometry, kMaterial);
    knot2.position.z = -80;
    knot2.position.x = -60;
    knot2.position.y = 10;

    scene.add(knot2);

    // knot 3
    const oGeometry = new THREE.TorusKnotGeometry(9, 1, 23, 9, 13, 14);
    const oMaterial = new THREE.MeshStandardMaterial({
      color: 0x3300aa,
      metalness: 1,
      roughness: 0.3,
    });
    const knot3 = new THREE.Mesh(oGeometry, oMaterial);
    knot3.position.z = -30;
    knot3.position.x = 30;
    knot3.position.y = -15;
    scene.add(knot3);

    // Functions
    const moveCamera = () => {
      const { top } = document.body.getBoundingClientRect();

      if (lastScrollValue > top) {
        if (top <= -1900) {
          camera.position.z += top * 0.0001;
          camera.rotation.y += top * -0.000014;
        } else if (top <= -1000) {
          camera.position.z += top * 0.0004;
          camera.rotation.z += top * -0.00002;
          camera.rotation.y += top * 0.00001;
        } else {
          camera.position.z += top * -0.0015;
          camera.position.y += top * -0.00005;
        }
      }
      if (lastScrollValue < top) {
        if (top <= -1900) {
          camera.position.z += top * -0.0001;
          camera.rotation.y += top * 0.000016;
        } else if (top <= -1000) {
          camera.position.z += top * -0.0004;
          camera.rotation.z += top * 0.000022;
          camera.rotation.y += top * -0.000012;
        } else {
          camera.position.z += top * 0.001;
          camera.position.y += top * 0.00005;
        }
      }

      lastScrollValue = top;
    };

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

    const animate = function () {
      requestAnimationFrame(animate);

      hex.rotation.x += 0.008;
      hex.rotation.y += 0.009;
      hex.rotation.z += 0.006;

      knot.rotation.x += 0.005;

      knot2.rotation.y += 0.02;

      knot3.rotation.y += 0.03;
      knot3.rotation.z += 0.01;

      renderer.render(scene, camera);
    };

    // Create Stars, animate, add scroll listener
    document.body.onscroll = moveCamera;
    Array(150).fill().forEach(addStar);
    animate();
  }, []);
  return <canvas />;
}

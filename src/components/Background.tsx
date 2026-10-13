import {
  AmbientLight,
  BufferGeometry,
  ColorManagement,
  LinearSRGBColorSpace,
  Material,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  MathUtils,
  PerspectiveCamera,
  PointLight,
  Scene,
  SphereGeometry,
  TorusGeometry,
  TorusKnotGeometry,
  WebGLRenderer,
} from "three";

import { useEffect, useRef } from "react";

// ponytail: the camera used to accumulate a delta per scroll event, so its
// position depended on how many events the browser fired. It is now a pure
// function of scroll depth. SCROLL_STEP is the average px per event the old
// values were tuned against (assumed); raise it to make the camera move less.
const SCROLL_STEP = 20;

// The camera path was tuned for a page ~3100px long. Map the scroll progress
// onto that length so adding content does not push the camera past the shapes.
const JOURNEY = 3100;

// Integral of (rate * u) over [from, to], clamped to the current depth u.
const seg = (u: number, from: number, to: number, rate: number) => {
  const m = Math.min(Math.max(u, from), to);
  return (rate * (m * m - from * from)) / 2;
};

const cameraPose = (u: number) => {
  const k = 1 / SCROLL_STEP;
  return {
    z:
      30 +
      k *
        (seg(u, 0, 1000, 0.001) +
          seg(u, 1000, 1900, -0.0004) +
          seg(u, 1900, Infinity, -0.0001)),
    y: k * seg(u, 0, 1000, 0.000025),
    rotZ: k * seg(u, 1000, 1900, 0.00001),
    rotY:
      k * (seg(u, 1000, 1900, -0.000005) + seg(u, 1900, Infinity, 0.000012)),
  };
};

const makeMesh = (
  geometry: BufferGeometry,
  color: number,
  metalness: number,
  roughness: number,
  [x, y, z]: [number, number, number]
) => {
  const mesh = new Mesh(
    geometry,
    new MeshStandardMaterial({ color, metalness, roughness })
  );
  mesh.position.set(x, y, z);
  return mesh;
};

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    let renderer;
    try {
      renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true });
    } catch (e) {
      // No WebGL: leave the plain dark background
      console.warn("WebGL unavailable, skipping the 3D background", e);
      canvas.style.display = "none";
      return undefined;
    }
    // The scene was tuned before three's color management existed
    ColorManagement.enabled = false;
    renderer.outputColorSpace = LinearSRGBColorSpace;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new Scene();
    const camera = new PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 30;
    // Portrait screens crop the view horizontally, which makes the shapes
    // look huge; widen the vertical FOV to keep the horizontal one constant
    const fitCamera = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.fov = Math.min(50 / Math.min(camera.aspect, 1), 100);
      camera.updateProjectionMatrix();
    };
    fitCamera();

    // Lights: three >= r155 uses physical units, so scale by PI and drop the
    // distance decay to keep the look the scene was designed with
    const pointLight = new PointLight(0x555555, Math.PI, 0, 0);
    pointLight.position.set(15, 15, 15);

    const pointLight2 = new PointLight(0x999999, Math.PI, 0, 0);
    pointLight2.position.set(60, 50, -80);

    scene.add(new AmbientLight(0xffffff, Math.PI), pointLight, pointLight2);

    // Shapes
    const hex = makeMesh(
      new TorusGeometry(7, 2, 5, 5),
      0xffffff,
      1,
      0.6,
      [0, 0, -20]
    );
    const knot = makeMesh(
      new TorusKnotGeometry(9, 1, 23, 9, 20, 7),
      0x000000,
      1,
      0.3,
      [50, 20, -50]
    );
    const knot2 = makeMesh(
      new TorusKnotGeometry(9, 1, 23, 9, 5, 4),
      0x441122,
      1,
      0.3,
      [-60, 10, -80]
    );
    const knot3 = makeMesh(
      new TorusKnotGeometry(9, 1, 23, 9, 13, 14),
      0x3300aa,
      1,
      0.3,
      [30, -15, -30]
    );
    scene.add(hex, knot, knot2, knot3);

    // Stars share one geometry and material
    const starGeometry = new SphereGeometry(0.1, 15, 15);
    const starMaterial = new MeshBasicMaterial({ color: 0xeeeeee });
    Array.from({ length: window.innerWidth < 640 ? 80 : 150 }, () => {
      const star = new Mesh(starGeometry, starMaterial);
      star.position.set(
        MathUtils.randFloatSpread(100),
        MathUtils.randFloatSpread(100),
        MathUtils.randFloatSpread(100)
      );
      return star;
    }).forEach(star => scene.add(star));

    const moveCamera = () => {
      if (reducedMotion.matches) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        max > 0 ? Math.min(Math.max(window.scrollY / max, 0), 1) : 0;
      const pose = cameraPose(progress * JOURNEY);
      camera.position.z = pose.z;
      camera.position.y = pose.y;
      camera.rotation.z = pose.rotZ;
      camera.rotation.y = pose.rotY;
    };

    // Subtle mouse parallax (fine pointers only, off with reduced motion)
    let mouseX = 0;
    let offsetX = 0;
    const onMouse = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 4;
    };
    if (window.matchMedia("(pointer: fine)").matches) {
      window.addEventListener("mousemove", onMouse, { passive: true });
    }

    let frame = 0;
    const tick = () => {
      if (!reducedMotion.matches) {
        offsetX += (mouseX - offsetX) * 0.05;
        camera.position.x = offsetX;
        hex.rotation.x += 0.006;
        hex.rotation.y += 0.006;
        hex.rotation.z += 0.002;
        knot.rotation.x += 0.001;
        knot2.rotation.y += 0.008;
        knot3.rotation.y += 0.009;
        knot3.rotation.z += 0.008;
      }
      renderer.render(scene, camera);
      // Reduced motion: a single still frame, no loop
      frame = reducedMotion.matches ? 0 : requestAnimationFrame(tick);
    };

    const start = () => {
      cancelAnimationFrame(frame);
      tick();
    };

    const onResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      fitCamera();
      if (!frame) renderer.render(scene, camera);
    };

    const onVisibility = () =>
      document.hidden ? cancelAnimationFrame(frame) : start();

    moveCamera();
    start();
    window.addEventListener("scroll", moveCamera, { passive: true });
    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibility);
    reducedMotion.addEventListener("change", start);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", moveCamera);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouse);
      document.removeEventListener("visibilitychange", onVisibility);
      reducedMotion.removeEventListener("change", start);
      scene.traverse(obj => {
        if (!(obj instanceof Mesh)) return;
        obj.geometry.dispose();
        (obj.material as Material).dispose();
      });
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" />;
}

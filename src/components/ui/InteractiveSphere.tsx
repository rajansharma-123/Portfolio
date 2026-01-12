import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import { AfterimagePass } from "three/examples/jsm/postprocessing/AfterimagePass";

type Props = {
  size?: number;
  pointCount?: number;
};

// Three.js-based hyperreal sphere composed of many small metallic spheres.
// - Uses InstancedMesh for performance
// - Animates a turquoise wave across the surface
// - Highlights bright spheres and creates simple fading trails

const InteractiveSphere: React.FC<Props> = ({ size = 900, pointCount = 1200 }) => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const reqRef = useRef<number | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const width = size;
    const height = size;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    // keep renderer transparent so the page background (or section gradient) shows through
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    // do not set a scene background so renderer's alpha transparency is preserved
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 1000);
    camera.position.set(0, 0, 6.2);

    const light = new THREE.DirectionalLight(0xffffff, 1.2);
    light.position.set(5, 10, 7);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0x111111));

    // create instanced spheres
    const geometry = new THREE.SphereGeometry(0.045, 12, 10);
    const material = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 0.8,
      roughness: 0.22,
      emissive: 0x000000,
      flatShading: false,
      vertexColors: true,
    });

    const count = pointCount;
    const mesh = new THREE.InstancedMesh(geometry, material, count);
    mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);

    // provide per-instance color buffer
    const colors = new Float32Array(count * 3);
    const matrix = new THREE.Matrix4();
    const tempPos = new THREE.Vector3();

    // store base positions and seeds
    const basePositions: THREE.Vector3[] = [];
    const seeds = new Float32Array(count);

    // Fibonacci sphere distribution
    for (let i = 0; i < count; i++) {
      const t = (i + 0.5) / count;
      const phi = Math.acos(1 - 2 * t);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      const x = Math.sin(phi) * Math.cos(theta);
      const y = Math.sin(phi) * Math.sin(theta);
      const z = Math.cos(phi);
      const radius = 1.6; // large sphere radius
      tempPos.set(x * radius, y * radius, z * radius);
      basePositions.push(tempPos.clone());

      // initial transform
      matrix.makeTranslation(tempPos.x, tempPos.y, tempPos.z);
      matrix.scale(new THREE.Vector3(1, 1, 1));
      mesh.setMatrixAt(i, matrix);

      // seed
      seeds[i] = Math.random() * Math.PI * 2;

      // base color: off-white bubbles
      const r = 242 / 255;
      const g = 242 / 255;
      const b = 245 / 255;
      colors[i * 3 + 0] = r;
      colors[i * 3 + 1] = g;
      colors[i * 3 + 2] = b;
    }

    mesh.instanceColor = new THREE.InstancedBufferAttribute(colors, 3);
    scene.add(mesh);

    // small points used as glowing trails (dynamic)
    const maxTrails = 600;
    const trailPositions = new Float32Array(maxTrails * 3);
    const trailAlphas = new Float32Array(maxTrails);
    const trailGeo = new THREE.BufferGeometry();
    trailGeo.setAttribute("position", new THREE.BufferAttribute(trailPositions, 3).setUsage(THREE.DynamicDrawUsage));
    trailGeo.setAttribute("aAlpha", new THREE.BufferAttribute(trailAlphas, 1).setUsage(THREE.DynamicDrawUsage));

    const trailMat = new THREE.PointsMaterial({
      color: 0x2ee6df,
      size: 0.07,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const trails = new THREE.Points(trailGeo, trailMat);
    scene.add(trails);

    // control state
    let time = 0;
    const waveSpeed = 1.6;
    const waveFreq = 3.2;
    const glowThreshold = 0.55;

    // trail pool
    const activeTrails: { x: number; y: number; z: number; life: number }[] = [];

    // mount renderer
    mountRef.current!.appendChild(renderer.domElement);

    // postprocessing: composer with bloom and afterimage (trails)
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    const bloomPass = new UnrealBloomPass(new THREE.Vector2(width, height), 1.6, 0.4, 0.8);
    bloomPass.threshold = 0.15;
    bloomPass.strength = 1.4; // intensity
    bloomPass.radius = 0.6;
    composer.addPass(bloomPass);
    const after = new AfterimagePass(0.85); // dampening: closer to 1 leaves longer trails
    composer.addPass(after);

    // static render (no animation)
    function renderOnce() {
      // pick a stable time value to produce a pleasing static highlight
      time = 1.2;

      const dir = new THREE.Vector3(Math.cos(time * 0.3), Math.sin(time * 0.2), Math.cos(time * 0.5)).normalize();
      const colorAttr = mesh.instanceColor as THREE.InstancedBufferAttribute;

      for (let i = 0; i < count; i++) {
        const pos = basePositions[i];
        const nd = pos.clone().normalize().dot(dir);
        const phase = Math.sin(nd * waveFreq - time * waveSpeed + seeds[i]);
        const energy = Math.max(0, phase * 0.5 + 0.5);

        const scl = 0.9 + energy * 1.4;
        matrix.makeTranslation(pos.x, pos.y, pos.z);
        matrix.scale(new THREE.Vector3(scl, scl, scl));
        mesh.setMatrixAt(i, matrix);

        const t = Math.min(1, energy * 1.6);
        const br = 14 / 255;
        const bg = 20 / 255;
        const bb = 23 / 255;
        const tr = 46 / 255;
        const tg = 230 / 255;
        const tb = 223 / 255;
        colorAttr.setXYZ(i, br * (1 - t) + tr * t, bg * (1 - t) + tg * t, bb * (1 - t) + tb * t);
      }
      mesh.instanceMatrix.needsUpdate = true;
      (mesh.instanceColor as THREE.InstancedBufferAttribute).needsUpdate = true;

      // make a subtle fixed rotation
      mesh.rotation.y = 0.18;
      mesh.rotation.x = 0.02;

      // clear trails (no dynamic trails in static mode)
      const posAttr = trails.geometry.getAttribute("position") as THREE.BufferAttribute;
      const alphaAttr = trails.geometry.getAttribute("aAlpha") as THREE.BufferAttribute;
      for (let i = 0; i < maxTrails; i++) {
        posAttr.setXYZ(i, 9999, 9999, 9999);
        alphaAttr.setX(i, 0);
      }
      posAttr.needsUpdate = true;
      alphaAttr.needsUpdate = true;

      composer.render();
    }

    // do one static render
    renderOnce();

    // handle resize
    function onResize() {
      const rect = mountRef.current!.getBoundingClientRect();
      const w = rect.width || width;
      const h = rect.height || height;
      renderer.setSize(w, h);
      composer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderOnce();
    }
    window.addEventListener("resize", onResize);

    // cleanup
    return () => {
      window.removeEventListener("resize", onResize);
      renderer.forceContextLoss();
      try {
        renderer.domElement && renderer.domElement.remove();
      } catch {}
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      trailGeo.dispose();
      trailMat.dispose();
    };
  }, [size, pointCount]);

  return <div ref={mountRef} style={{ width: size, height: size, display: "block" }} />;
};

export default InteractiveSphere;

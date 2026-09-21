"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export function WaveGridBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 12, 18);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "low-power",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Grid of points geometry
    const cols = 55;
    const rows = 40;
    const count = cols * rows;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const initialY = new Float32Array(count);

    const xSpacing = 0.85;
    const zSpacing = 0.85;
    const xOffset = ((cols - 1) * xSpacing) / 2;
    const zOffset = ((rows - 1) * zSpacing) / 2;

    let idx = 0;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = c * xSpacing - xOffset;
        const z = r * zSpacing - zOffset;
        const y = 0;
        positions[idx * 3] = x;
        positions[idx * 3 + 1] = y;
        positions[idx * 3 + 2] = z;
        initialY[idx] = 0;
        idx++;
      }
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    // Custom points material
    const material = new THREE.PointsMaterial({
      color: 0x8b8b86,
      size: 0.12,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
    });

    const pointsMesh = new THREE.Points(geometry, material);
    scene.add(pointsMesh);

    // Subtle connecting lines for tech aesthetic
    const lineGeo = new THREE.WireframeGeometry(
      new THREE.PlaneGeometry(cols * xSpacing, rows * zSpacing, cols / 2, rows / 2)
    );
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x315cff,
      transparent: true,
      opacity: 0.04,
    });
    const lineMesh = new THREE.LineSegments(lineGeo, lineMat);
    lineMesh.rotation.x = -Math.PI / 2;
    lineMesh.position.y = -0.2;
    scene.add(lineMesh);

    // Mouse tracking with smooth lerp
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetMouseX = nx * 3;
      targetMouseY = ny * 3;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Visibility Observer to pause when off-screen
    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // Animation loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const elapsedTime = clock.getElapsedTime();
      const posAttr = geometry.attributes.position as THREE.BufferAttribute;
      const arr = posAttr.array as Float32Array;

      currentMouseX += (targetMouseX - currentMouseX) * 0.05;
      currentMouseY += (targetMouseY - currentMouseY) * 0.05;

      if (!prefersReducedMotion) {
        let pIndex = 0;
        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            const x = arr[pIndex * 3];
            const z = arr[pIndex * 3 + 2];

            // Wave equation with radial distance & mouse reaction
            const distFromMouse = Math.sqrt(
              Math.pow(x - currentMouseX, 2) + Math.pow(z - currentMouseY, 2)
            );
            const mouseInfluence = Math.exp(-distFromMouse * 0.35) * 1.5;

            const wave =
              Math.sin(x * 0.35 + elapsedTime * 1.2) *
              Math.cos(z * 0.35 + elapsedTime * 0.9) *
              0.55;

            arr[pIndex * 3 + 1] = wave + mouseInfluence;
            pIndex++;
          }
        }
        posAttr.needsUpdate = true;
      }

      camera.position.x = currentMouseX * 0.3;
      camera.position.y = 12 + currentMouseY * 0.2;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      lineGeo.dispose();
      lineMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
}

"use client";

import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { inSphere } from "maath/random";

function StarField() {
  const ref = useRef();
const [positions] = useState(() =>
  inSphere(new Float32Array(5000 * 3), { radius: 1.2 })
);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function StarsCanvas() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <StarField />
        </Suspense>
      </Canvas>
    </div>
  );
}


// Jumlah titik 5000 → pas, gak terlalu rame.

// Radius 1.2 → rapat di tengah.

// Rotasi cepat pas (delta / 10 & delta / 15).

// Ukuran titik 0.002 → bener-bener kayak bintang.

// Kamera dekat ([0, 0, 1]) → bikin bintang kelihatan penuh layar.
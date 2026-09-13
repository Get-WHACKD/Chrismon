import { useEffect, useMemo, useRef, type ReactNode } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { PALETTE, RELIEF } from "@/lib/palette";
import {
  DEFAULT_FRAME,
  LAYER_FRAMES,
  type LayerId,
} from "@/lib/glyph-data";
import { useGlyphStore } from "@/lib/store";

const EXPLODE_Z: Record<LayerId, number> = {
  alpha: 0.42,
  omega: 0.62,
  wreath: 0.82,
  chi: 1.02,
  rho: 1.22,
  figures: 1.42,
  synthesis: 0,
};

function fromUv(u: number, v: number): [number, number] {
  return [(u - 0.5) * RELIEF.width, (0.5 - v) * RELIEF.height];
}

function GlyphMaterial({
  id,
  roughness = 0.62,
}: {
  id: LayerId;
  roughness?: number;
}) {
  const selected = useGlyphStore((s) => s.selected);
  const viewMode = useGlyphStore((s) => s.viewMode);
  const dim =
    selected !== null && selected !== id && selected !== "synthesis";
  const lit = selected === id || selected === "synthesis";
  const both = viewMode === "both";
  const wire = viewMode === "both";

  return (
    <meshStandardMaterial
      color={dim ? PALETTE.stone : lit ? PALETTE.iceHot : PALETTE.bone}
      emissive={lit ? PALETTE.ice : both ? PALETTE.ice : PALETTE.ink}
      emissiveIntensity={lit ? 0.7 : both ? 0.35 : 0.05}
      roughness={roughness}
      metalness={0.06}
      transparent
      opacity={dim ? 0.12 : both ? 0.55 : 0.96}
      depthWrite={!dim && !both}
      wireframe={wire}
    />
  );
}

function LayerGroup({
  id,
  children,
}: {
  id: LayerId;
  children: ReactNode;
}) {
  const explode = useGlyphStore((s) => s.explode);
  const select = useGlyphStore((s) => s.select);
  const group = useRef<THREE.Group>(null);
  const goal = EXPLODE_Z[id];

  useFrame((_, dt) => {
    const d = Math.min(dt, 0.1);
    const g = group.current;
    if (!g) return;
    const z = explode * goal;
    g.position.z = THREE.MathUtils.damp(g.position.z, z, 6, d);
  });

  return (
    <group
      ref={group}
      onClick={(e) => {
        e.stopPropagation();
        select(id);
      }}
      onPointerOver={() => {
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        document.body.style.cursor = "";
      }}
    >
      {children}
    </group>
  );
}

function AlphaLayer() {
  const [x1, y1] = fromUv(0.22, 0.38);
  const [x2, y2] = fromUv(0.78, 0.36);
  const [, yPeak] = fromUv(0.5, 0.07);
  const leftRot = Math.atan2(yPeak - y1, 0 - x1) - Math.PI / 2;
  const rightRot = Math.atan2(yPeak - y2, 0 - x2) - Math.PI / 2;

  return (
    <LayerGroup id="alpha">
      <mesh position={[-0.72, 0.58, 0.04]} rotation={[0, 0, leftRot]}>
        <boxGeometry args={[0.15, 2.05, 0.1]} />
        <GlyphMaterial id="alpha" />
      </mesh>
      <mesh position={[0.74, 0.6, 0.04]} rotation={[0, 0, rightRot]}>
        <boxGeometry args={[0.15, 2.05, 0.1]} />
        <GlyphMaterial id="alpha" />
      </mesh>
      <mesh position={[0, 0.86, 0.05]}>
        <boxGeometry args={[0.72, 0.1, 0.09]} />
        <GlyphMaterial id="alpha" />
      </mesh>
      <mesh position={[-0.38, 0.78, 0.055]} rotation={[0, 0, 0.7]}>
        <boxGeometry args={[0.42, 0.09, 0.08]} />
        <GlyphMaterial id="alpha" />
      </mesh>
    </LayerGroup>
  );
}

function OmegaLayer() {
  const left = useMemo(
    () =>
      new THREE.QuadraticBezierCurve3(
        new THREE.Vector3(-1.55, 0.72, 0.03),
        new THREE.Vector3(-1.92, -0.15, 0.03),
        new THREE.Vector3(-1.05, -1.28, 0.03),
      ),
    [],
  );
  const right = useMemo(
    () =>
      new THREE.QuadraticBezierCurve3(
        new THREE.Vector3(1.55, 0.78, 0.03),
        new THREE.Vector3(1.95, -0.08, 0.03),
        new THREE.Vector3(1.08, -1.26, 0.03),
      ),
    [],
  );

  return (
    <LayerGroup id="omega">
      <mesh>
        <tubeGeometry args={[left, 28, 0.07, 8, false]} />
        <GlyphMaterial id="omega" />
      </mesh>
      <mesh>
        <tubeGeometry args={[right, 28, 0.07, 8, false]} />
        <GlyphMaterial id="omega" />
      </mesh>
    </LayerGroup>
  );
}

function WreathLayer() {
  const [cx, cy] = fromUv(0.5, 0.58);
  return (
    <LayerGroup id="wreath">
      <mesh position={[cx, cy, 0.02]} rotation={[0, 0, 0]}>
        <torusGeometry args={[0.9, 0.065, 12, 64]} />
        <GlyphMaterial id="wreath" roughness={0.5} />
      </mesh>
      <mesh position={[cx, cy, 0.015]}>
        <torusGeometry args={[1.08, 0.04, 10, 64]} />
        <GlyphMaterial id="wreath" roughness={0.55} />
      </mesh>
    </LayerGroup>
  );
}

function ChiLayer() {
  const [cx, cy] = fromUv(0.5, 0.58);
  return (
    <LayerGroup id="chi">
      <mesh position={[cx, cy, 0.055]} rotation={[0, 0, Math.PI / 4.6]}>
        <boxGeometry args={[1.72, 0.095, 0.09]} />
        <GlyphMaterial id="chi" />
      </mesh>
      <mesh position={[cx, cy, 0.05]} rotation={[0, 0, -Math.PI / 3.8]}>
        <boxGeometry args={[1.68, 0.095, 0.09]} />
        <GlyphMaterial id="chi" />
      </mesh>
    </LayerGroup>
  );
}

function RhoLayer() {
  const [cx, cy] = fromUv(0.54, 0.5);
  return (
    <LayerGroup id="rho">
      <mesh position={[cx + 0.16, cy + 0.02, 0.07]} rotation={[0, 0, 0.12]}>
        <boxGeometry args={[0.12, 1.02, 0.1]} />
        <GlyphMaterial id="rho" />
      </mesh>
      <mesh
        position={[cx - 0.02, cy + 0.18, 0.07]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <torusGeometry args={[0.3, 0.085, 12, 24, Math.PI]} />
        <GlyphMaterial id="rho" />
      </mesh>
    </LayerGroup>
  );
}

function FigureMesh({
  position,
}: {
  position: [number, number, number];
}) {
  return (
    <group position={position}>
      <mesh position={[0, 0.16, 0]}>
        <sphereGeometry args={[0.11, 16, 12]} />
        <GlyphMaterial id="figures" roughness={0.7} />
      </mesh>
      <mesh position={[0, -0.02, 0]}>
        <capsuleGeometry args={[0.09, 0.16, 4, 10]} />
        <GlyphMaterial id="figures" roughness={0.7} />
      </mesh>
    </group>
  );
}

function FiguresLayer() {
  const [lx, ly] = fromUv(0.38, 0.66);
  const [rx, ry] = fromUv(0.64, 0.63);
  return (
    <LayerGroup id="figures">
      <FigureMesh position={[lx, ly, 0.08]} />
      <FigureMesh position={[rx, ry, 0.08]} />
    </LayerGroup>
  );
}

function Hotspot({
  id,
  u,
  v,
  z = 0.18,
}: {
  id: LayerId;
  u: number;
  v: number;
  z?: number;
}) {
  const [x, y] = fromUv(u, v);
  const selected = useGlyphStore((s) => s.selected);
  const explode = useGlyphStore((s) => s.explode);
  const select = useGlyphStore((s) => s.select);
  const active = selected === id;
  const pulse = useRef(0);
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((_, dt) => {
    pulse.current += dt;
    const m = mesh.current;
    if (!m) return;
    const s = active ? 1.15 : 0.85 + Math.sin(pulse.current * 2.2) * 0.06;
    m.scale.setScalar(s);
  });

  const ez = explode * EXPLODE_Z[id];

  return (
    <group position={[x, y, z + ez]}>
      <mesh
        ref={mesh}
        onClick={(e) => {
          e.stopPropagation();
          select(id);
        }}
      >
        <sphereGeometry args={[0.055, 16, 16]} />
        <meshBasicMaterial
          color={active ? PALETTE.iceHot : PALETTE.ice}
          transparent
          opacity={active ? 1 : 0.8}
          depthTest={false}
        />
      </mesh>
    </group>
  );
}

function DecodedGlyphs() {
  const viewMode = useGlyphStore((s) => s.viewMode);
  const visible = viewMode !== "relief";
  if (!visible) return null;
  return (
    <group>
      <AlphaLayer />
      <OmegaLayer />
      <WreathLayer />
      <ChiLayer />
      <RhoLayer />
      <FiguresLayer />
    </group>
  );
}

function StoneRelief() {
  const viewMode = useGlyphStore((s) => s.viewMode);
  const [map, disp, nor] = useTexture([
    "/carving.jpg",
    "/carving-height.png",
    "/carving-normal.png",
  ]);

  useEffect(() => {
    map.colorSpace = THREE.SRGBColorSpace;
    map.anisotropy = 8;
    disp.colorSpace = THREE.NoColorSpace;
    nor.colorSpace = THREE.NoColorSpace;
    nor.flipY = true;
  }, [map, disp, nor]);

  const hidden = viewMode === "decoded" || viewMode === "explode";
  const normalScale = useMemo(() => new THREE.Vector2(1.15, 1.15), []);

  return (
    <mesh
      position={[0, 0, 0]}
      castShadow
      receiveShadow
      visible={!hidden}
    >
      <planeGeometry args={[RELIEF.width, RELIEF.height, 240, 175]} />
      <meshStandardMaterial
        map={map}
        displacementMap={disp}
        displacementScale={hidden ? 0 : 0.32}
        displacementBias={-0.04}
        normalMap={nor}
        normalScale={normalScale}
        roughness={0.78}
        metalness={0.03}
        envMapIntensity={0.3}
      />
    </mesh>
  );
}

function Surround() {
  const tex = useTexture("/stone.jpg");
  useEffect(() => {
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(3.4, 2.4);
    tex.anisotropy = 8;
  }, [tex]);

  return (
    <>
      <mesh position={[0, 0, -0.32]} receiveShadow>
        <planeGeometry args={[16, 11]} />
        <meshStandardMaterial map={tex} roughness={0.92} metalness={0.02} />
      </mesh>
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -5.2, 3]}
        receiveShadow
      >
        <planeGeometry args={[22, 16]} />
        <meshStandardMaterial color={PALETTE.ink} roughness={1} />
      </mesh>
    </>
  );
}

function Dust() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const n = 160;
    const arr = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 7;
      arr[i * 3 + 2] = Math.random() * 5 - 0.2;
    }
    return arr;
  }, []);

  useFrame((_, dt) => {
    const p = ref.current;
    if (!p) return;
    p.rotation.y += Math.min(dt, 0.1) * 0.018;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.018}
        color={PALETTE.ice}
        transparent
        opacity={0.28}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  );
}

function RakingLight() {
  const azimuth = useGlyphStore((s) => s.azimuth);
  const elevation = useGlyphStore((s) => s.elevation);
  const light = useRef<THREE.DirectionalLight>(null);

  const pos = useMemo(() => {
    const az = (azimuth * Math.PI) / 180;
    const el = (elevation * Math.PI) / 180;
    const r = 6.4;
    return new THREE.Vector3(
      r * Math.cos(el) * Math.sin(az),
      r * Math.sin(el),
      r * Math.cos(el) * Math.cos(az),
    );
  }, [azimuth, elevation]);

  useEffect(() => {
    const l = light.current;
    if (!l) return;
    l.shadow.mapSize.set(2048, 2048);
    l.shadow.camera.near = 1;
    l.shadow.camera.far = 16;
    l.shadow.camera.left = -5;
    l.shadow.camera.right = 5;
    l.shadow.camera.top = 4;
    l.shadow.camera.bottom = -4;
  }, []);

  return (
    <>
      <directionalLight
        ref={light}
        position={pos}
        intensity={2.55}
        color={PALETTE.iceHot}
        castShadow
      />
      <ambientLight intensity={0.14} color="#1c2833" />
      <hemisphereLight args={["#2a3a48", "#07080c", 0.4]} />
      <pointLight
        position={[0, -0.2, 1.4]}
        intensity={0.35}
        color={PALETTE.ice}
        distance={6}
      />
    </>
  );
}

function CameraRig({
  controls,
}: {
  controls: { current: any };
}) {
  const { camera } = useThree();
  const selected = useGlyphStore((s) => s.selected);
  const framing = useGlyphStore((s) => s.framing);
  const desired = useMemo(() => {
    if (selected && framing) return LAYER_FRAMES[selected];
    if (framing) return DEFAULT_FRAME;
    return null;
  }, [selected, framing]);

  const pos = useRef(new THREE.Vector3());
  const look = useRef(new THREE.Vector3());

  useFrame((_, dt) => {
    if (!desired || !controls.current) return;
    const d = Math.min(dt, 0.1);
    const k = 1 - Math.exp(-3.4 * d);
    pos.current.set(...desired.position);
    look.current.set(...desired.target);
    camera.position.lerp(pos.current, k);
    controls.current.target.lerp(look.current, k);
    controls.current.update();
  });

  return null;
}

function SceneBody() {
  const controls = useRef<any>(null);
  const select = useGlyphStore((s) => s.select);
  const stopFraming = useGlyphStore((s) => s.stopFraming);
  const showLabels = useGlyphStore((s) => s.showLabels);

  return (
    <>
      <color attach="background" args={[PALETTE.ink]} />
      <fog attach="fog" args={[PALETTE.ink, 8, 18]} />
      <RakingLight />
      <Surround />
      <StoneRelief />
      <DecodedGlyphs />
      <Dust />
      {showLabels ? (
        <group>
          <Hotspot id="alpha" u={0.5} v={0.14} z={0.22} />
          <Hotspot id="omega" u={0.16} v={0.48} z={0.2} />
          <Hotspot id="wreath" u={0.5} v={0.4} z={0.2} />
          <Hotspot id="chi" u={0.58} v={0.7} z={0.22} />
          <Hotspot id="rho" u={0.56} v={0.48} z={0.24} />
          <Hotspot id="figures" u={0.38} v={0.66} z={0.22} />
          <Hotspot id="synthesis" u={0.5} v={0.3} z={0.28} />
        </group>
      ) : null}
      <OrbitControls
        ref={controls}
        makeDefault
        enableDamping
        dampingFactor={0.08}
        minDistance={1.7}
        maxDistance={11}
        minPolarAngle={0.35}
        maxPolarAngle={1.55}
        target={[0, 0.04, 0]}
        onStart={stopFraming}
      />
      <CameraRig controls={controls} />
      <mesh
        position={[0, 0, -0.01]}
        onClick={() => select(null, false)}
        visible={false}
      >
        <planeGeometry args={[20, 14]} />
      </mesh>
    </>
  );
}

export function ChrismonCanvas() {
  return (
    <Canvas
      className="chrismon-canvas"
      camera={{ position: [1.55, 0.48, 4.35], fov: 40, near: 0.1, far: 40 }}
      dpr={[1, 1.75]}
      shadows
      gl={{
        antialias: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.05,
      }}
      onCreated={({ gl }) => {
        gl.shadowMap.type = THREE.PCFShadowMap;
      }}
      onPointerMissed={() => useGlyphStore.getState().select(null, false)}
    >
      <SceneBody />
    </Canvas>
  );
}

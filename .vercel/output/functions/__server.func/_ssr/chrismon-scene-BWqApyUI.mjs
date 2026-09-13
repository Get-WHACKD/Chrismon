import { i as __toESM } from "../_runtime.mjs";
import { _ as require_react, a as Canvas, d as RepeatWrapping, f as SRGBColorSpace, g as require_jsx_runtime, l as MathUtils, m as Vector3, n as useTexture, o as useFrame, p as Vector2, r as Html, s as useThree, t as OrbitControls, u as QuadraticBezierCurve3 } from "../_libs/@react-three/drei+[...].mjs";
import { i as LAYER_FRAMES, n as useGlyphStore, r as DEFAULT_FRAME } from "./routes-99p8xfv_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/chrismon-scene-BWqApyUI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PALETTE = {
	ice: "#7eb8c9",
	iceHot: "#c5e8f0",
	bone: "#e6e1d6",
	ink: "#07080c",
	slate: "#10141c",
	stone: "#1c242c",
	stoneLit: "#3d4c58",
	dim: "#8b939e"
};
var RELIEF = {
	aspect: 1.3734,
	height: 3.2,
	get width() {
		return this.height * this.aspect;
	}
};
var EXPLODE_Z = {
	alpha: .42,
	omega: .62,
	wreath: .82,
	chi: 1.02,
	rho: 1.22,
	figures: 1.42,
	synthesis: 0
};
function fromUv(u, v) {
	return [(u - .5) * RELIEF.width, (.5 - v) * RELIEF.height];
}
function GlyphMaterial({ id, roughness = .62 }) {
	const selected = useGlyphStore((s) => s.selected);
	const viewMode = useGlyphStore((s) => s.viewMode);
	const dim = selected !== null && selected !== id && selected !== "synthesis";
	const lit = selected === id || selected === "synthesis";
	const both = viewMode === "both";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
		color: dim ? PALETTE.stone : lit ? PALETTE.iceHot : PALETTE.bone,
		emissive: lit ? PALETTE.ice : PALETTE.ink,
		emissiveIntensity: lit ? .55 : both ? .12 : .04,
		roughness,
		metalness: .06,
		transparent: true,
		opacity: dim ? .18 : both ? .78 : .96,
		depthWrite: !dim
	});
}
function LayerGroup({ id, children }) {
	const explode = useGlyphStore((s) => s.explode);
	const select = useGlyphStore((s) => s.select);
	const group = (0, import_react.useRef)(null);
	const goal = EXPLODE_Z[id];
	useFrame((_, dt) => {
		const d = Math.min(dt, .1);
		const g = group.current;
		if (!g) return;
		const z = explode * goal;
		g.position.z = MathUtils.damp(g.position.z, z, 6, d);
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
		ref: group,
		onClick: (e) => {
			e.stopPropagation();
			select(id);
		},
		onPointerOver: () => {
			document.body.style.cursor = "pointer";
		},
		onPointerOut: () => {
			document.body.style.cursor = "";
		},
		children
	});
}
function AlphaLayer() {
	const [x1, y1] = fromUv(.22, .38);
	const [x2, y2] = fromUv(.78, .36);
	const [, yPeak] = fromUv(.5, .07);
	const leftRot = Math.atan2(yPeak - y1, 0 - x1) - Math.PI / 2;
	const rightRot = Math.atan2(yPeak - y2, 0 - x2) - Math.PI / 2;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LayerGroup, {
		id: "alpha",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					-.72,
					.58,
					.04
				],
				rotation: [
					0,
					0,
					leftRot
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.15,
					2.05,
					.1
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlyphMaterial, { id: "alpha" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					.74,
					.6,
					.04
				],
				rotation: [
					0,
					0,
					rightRot
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.15,
					2.05,
					.1
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlyphMaterial, { id: "alpha" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.86,
					.05
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.72,
					.1,
					.09
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlyphMaterial, { id: "alpha" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					-.38,
					.78,
					.055
				],
				rotation: [
					0,
					0,
					.7
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.42,
					.09,
					.08
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlyphMaterial, { id: "alpha" })]
			})
		]
	});
}
function OmegaLayer() {
	const left = (0, import_react.useMemo)(() => new QuadraticBezierCurve3(new Vector3(-1.55, .72, .03), new Vector3(-1.92, -.15, .03), new Vector3(-1.05, -1.28, .03)), []);
	const right = (0, import_react.useMemo)(() => new QuadraticBezierCurve3(new Vector3(1.55, .78, .03), new Vector3(1.95, -.08, .03), new Vector3(1.08, -1.26, .03)), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LayerGroup, {
		id: "omega",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("tubeGeometry", { args: [
			left,
			28,
			.07,
			8,
			false
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlyphMaterial, { id: "omega" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("tubeGeometry", { args: [
			right,
			28,
			.07,
			8,
			false
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlyphMaterial, { id: "omega" })] })]
	});
}
function WreathLayer() {
	const [cx, cy] = fromUv(.5, .58);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LayerGroup, {
		id: "wreath",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				cx,
				cy,
				.02
			],
			rotation: [
				0,
				0,
				0
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
				.9,
				.065,
				12,
				64
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlyphMaterial, {
				id: "wreath",
				roughness: .5
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				cx,
				cy,
				.015
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
				1.08,
				.04,
				10,
				64
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlyphMaterial, {
				id: "wreath",
				roughness: .55
			})]
		})]
	});
}
function ChiLayer() {
	const [cx, cy] = fromUv(.5, .58);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LayerGroup, {
		id: "chi",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				cx,
				cy,
				.055
			],
			rotation: [
				0,
				0,
				Math.PI / 4.6
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				1.72,
				.095,
				.09
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlyphMaterial, { id: "chi" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				cx,
				cy,
				.05
			],
			rotation: [
				0,
				0,
				-Math.PI / 3.8
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				1.68,
				.095,
				.09
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlyphMaterial, { id: "chi" })]
		})]
	});
}
function RhoLayer() {
	const [cx, cy] = fromUv(.54, .5);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LayerGroup, {
		id: "rho",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				cx + .16,
				cy + .02,
				.07
			],
			rotation: [
				0,
				0,
				.12
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				.12,
				1.02,
				.1
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlyphMaterial, { id: "rho" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				cx - .02,
				cy + .18,
				.07
			],
			rotation: [
				0,
				0,
				Math.PI / 2
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
				.3,
				.085,
				12,
				24,
				Math.PI
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlyphMaterial, { id: "rho" })]
		})]
	});
}
function FigureMesh({ position }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		position,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				.16,
				0
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
				.11,
				16,
				12
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlyphMaterial, {
				id: "figures",
				roughness: .7
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				-.02,
				0
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("capsuleGeometry", { args: [
				.09,
				.16,
				4,
				10
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlyphMaterial, {
				id: "figures",
				roughness: .7
			})]
		})]
	});
}
function FiguresLayer() {
	const [lx, ly] = fromUv(.38, .66);
	const [rx, ry] = fromUv(.64, .63);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LayerGroup, {
		id: "figures",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FigureMesh, { position: [
			lx,
			ly,
			.08
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FigureMesh, { position: [
			rx,
			ry,
			.08
		] })]
	});
}
function Hotspot({ id, u, v, z = .18 }) {
	const [x, y] = fromUv(u, v);
	const selected = useGlyphStore((s) => s.selected);
	const showLabels = useGlyphStore((s) => s.showLabels);
	const explode = useGlyphStore((s) => s.explode);
	const select = useGlyphStore((s) => s.select);
	const active = selected === id;
	const pulse = (0, import_react.useRef)(0);
	const mesh = (0, import_react.useRef)(null);
	useFrame((_, dt) => {
		pulse.current += dt;
		const m = mesh.current;
		if (!m) return;
		const s = active ? 1.15 : .85 + Math.sin(pulse.current * 2.2) * .06;
		m.scale.setScalar(s);
	});
	const ez = explode * EXPLODE_Z[id];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		position: [
			x,
			y,
			z + ez
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			ref: mesh,
			onClick: (e) => {
				e.stopPropagation();
				select(id);
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
				.055,
				16,
				16
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
				color: active ? PALETTE.iceHot : PALETTE.ice,
				transparent: true,
				opacity: active ? 1 : .8,
				depthTest: false
			})]
		}), showLabels ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Html, {
			center: true,
			sprite: true,
			distanceFactor: 7,
			style: { pointerEvents: "none" },
			position: [
				0,
				.16,
				0
			],
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "hotspot-label",
				children: id === "synthesis" ? "☧" : id
			})
		}) : null]
	});
}
function DecodedGlyphs() {
	if (!(useGlyphStore((s) => s.viewMode) !== "relief")) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlphaLayer, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OmegaLayer, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WreathLayer, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChiLayer, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RhoLayer, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiguresLayer, {})
	] });
}
function StoneRelief() {
	const viewMode = useGlyphStore((s) => s.viewMode);
	const [map, disp, nor] = useTexture([
		"/carving.jpg",
		"/carving-height.png",
		"/carving-normal.png"
	]);
	(0, import_react.useEffect)(() => {
		map.colorSpace = SRGBColorSpace;
		map.anisotropy = 8;
		disp.colorSpace = "";
		nor.colorSpace = "";
		nor.flipY = true;
	}, [
		map,
		disp,
		nor
	]);
	const hidden = viewMode === "decoded" || viewMode === "explode";
	const normalScale = (0, import_react.useMemo)(() => new Vector2(1.15, 1.15), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		position: [
			0,
			0,
			0
		],
		castShadow: true,
		receiveShadow: true,
		visible: !hidden,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [
			RELIEF.width,
			RELIEF.height,
			240,
			175
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
			map,
			displacementMap: disp,
			displacementScale: hidden ? 0 : .17,
			displacementBias: -.02,
			normalMap: nor,
			normalScale,
			roughness: .78,
			metalness: .03,
			envMapIntensity: .3
		})]
	});
}
function Surround() {
	const tex = useTexture("/stone.jpg");
	(0, import_react.useEffect)(() => {
		tex.colorSpace = SRGBColorSpace;
		tex.wrapS = RepeatWrapping;
		tex.wrapT = RepeatWrapping;
		tex.repeat.set(3.4, 2.4);
		tex.anisotropy = 8;
	}, [tex]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		position: [
			0,
			0,
			-.32
		],
		receiveShadow: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [16, 11] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
			map: tex,
			roughness: .92,
			metalness: .02
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		rotation: [
			-Math.PI / 2,
			0,
			0
		],
		position: [
			0,
			-5.2,
			3
		],
		receiveShadow: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [22, 16] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
			color: PALETTE.ink,
			roughness: 1
		})]
	})] });
}
function Dust() {
	const ref = (0, import_react.useRef)(null);
	const positions = (0, import_react.useMemo)(() => {
		const n = 160;
		const arr = /* @__PURE__ */ new Float32Array(480);
		for (let i = 0; i < n; i++) {
			arr[i * 3] = (Math.random() - .5) * 10;
			arr[i * 3 + 1] = (Math.random() - .5) * 7;
			arr[i * 3 + 2] = Math.random() * 5 - .2;
		}
		return arr;
	}, []);
	useFrame((_, dt) => {
		const p = ref.current;
		if (!p) return;
		p.rotation.y += Math.min(dt, .1) * .018;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("points", {
		ref,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("bufferGeometry", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("bufferAttribute", {
			attach: "attributes-position",
			args: [positions, 3]
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointsMaterial", {
			size: .018,
			color: PALETTE.ice,
			transparent: true,
			opacity: .28,
			depthWrite: false,
			sizeAttenuation: true
		})]
	});
}
function RakingLight() {
	const azimuth = useGlyphStore((s) => s.azimuth);
	const elevation = useGlyphStore((s) => s.elevation);
	const light = (0, import_react.useRef)(null);
	const pos = (0, import_react.useMemo)(() => {
		const az = azimuth * Math.PI / 180;
		const el = elevation * Math.PI / 180;
		const r = 6.4;
		return new Vector3(r * Math.cos(el) * Math.sin(az), r * Math.sin(el), r * Math.cos(el) * Math.cos(az));
	}, [azimuth, elevation]);
	(0, import_react.useEffect)(() => {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
			ref: light,
			position: pos,
			intensity: 2.55,
			color: PALETTE.iceHot,
			castShadow: true
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ambientLight", {
			intensity: .14,
			color: "#1c2833"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hemisphereLight", { args: [
			"#2a3a48",
			"#07080c",
			.4
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
			position: [
				0,
				-.2,
				1.4
			],
			intensity: .35,
			color: PALETTE.ice,
			distance: 6
		})
	] });
}
function CameraRig({ controls }) {
	const { camera } = useThree();
	const selected = useGlyphStore((s) => s.selected);
	const framing = useGlyphStore((s) => s.framing);
	const desired = (0, import_react.useMemo)(() => {
		if (selected && framing) return LAYER_FRAMES[selected];
		if (framing) return DEFAULT_FRAME;
		return null;
	}, [selected, framing]);
	const pos = (0, import_react.useRef)(new Vector3());
	const look = (0, import_react.useRef)(new Vector3());
	useFrame((_, dt) => {
		if (!desired || !controls.current) return;
		const k = 1 - Math.exp(-3.4 * Math.min(dt, .1));
		pos.current.set(...desired.position);
		look.current.set(...desired.target);
		camera.position.lerp(pos.current, k);
		controls.current.target.lerp(look.current, k);
		controls.current.update();
	});
	return null;
}
function SceneBody() {
	const controls = (0, import_react.useRef)(null);
	const select = useGlyphStore((s) => s.select);
	const stopFraming = useGlyphStore((s) => s.stopFraming);
	const showLabels = useGlyphStore((s) => s.showLabels);
	const viewMode = useGlyphStore((s) => s.viewMode);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("color", {
			attach: "background",
			args: [PALETTE.ink]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("fog", {
			attach: "fog",
			args: [
				PALETTE.ink,
				8,
				18
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RakingLight, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Surround, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoneRelief, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DecodedGlyphs, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dust, {}),
		showLabels || viewMode === "relief" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hotspot, {
				id: "alpha",
				u: .5,
				v: .14,
				z: .22
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hotspot, {
				id: "omega",
				u: .16,
				v: .48,
				z: .2
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hotspot, {
				id: "wreath",
				u: .5,
				v: .4,
				z: .2
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hotspot, {
				id: "chi",
				u: .58,
				v: .7,
				z: .22
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hotspot, {
				id: "rho",
				u: .56,
				v: .48,
				z: .24
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hotspot, {
				id: "figures",
				u: .38,
				v: .66,
				z: .22
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hotspot, {
				id: "synthesis",
				u: .5,
				v: .3,
				z: .28
			})
		] }) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrbitControls, {
			ref: controls,
			makeDefault: true,
			enableDamping: true,
			dampingFactor: .08,
			minDistance: 1.7,
			maxDistance: 11,
			minPolarAngle: .35,
			maxPolarAngle: 1.55,
			target: [
				0,
				.02,
				0
			],
			onStart: stopFraming
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CameraRig, { controls }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
			position: [
				0,
				0,
				-.01
			],
			onClick: () => select(null, false),
			visible: false,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [20, 14] })
		})
	] });
}
function ChrismonCanvas() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Canvas, {
		className: "chrismon-canvas",
		camera: {
			position: [
				0,
				.12,
				4.9
			],
			fov: 40,
			near: .1,
			far: 40
		},
		dpr: [1, 1.75],
		shadows: true,
		gl: {
			antialias: true,
			toneMapping: 4,
			toneMappingExposure: 1.05
		},
		onPointerMissed: () => useGlyphStore.getState().select(null, false),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SceneBody, {})
	});
}
//#endregion
export { ChrismonCanvas };

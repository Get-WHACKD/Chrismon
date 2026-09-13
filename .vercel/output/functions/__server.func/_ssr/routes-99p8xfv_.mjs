import { i as __toESM } from "../_runtime.mjs";
import { _ as require_react, g as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
import { t as create } from "../_libs/zustand.mjs";
import { a as Layers, c as Aperture, i as RotateCcw, o as ChevronRight, r as SunMedium, s as ChevronLeft, t as X } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-99p8xfv_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var LAYERS = [
	{
		id: "alpha",
		index: "01",
		title: "Alpha",
		glyph: "Α",
		language: "Greek",
		summary: "The peaked chevron is the letter Alpha — the Beginning.",
		body: "The two heavy strokes that meet above the roundel are not a roof. They are Greek Alpha (Α), the first letter of the alphabet. In early Christian carving Alpha almost always travels with Omega: “I am the Alpha and the Omega.” The Y- and H-like cuts in the peak are the Alpha’s crossbar and junctions, thickened by the chisel."
	},
	{
		id: "omega",
		index: "02",
		title: "Omega",
		glyph: "Ω",
		language: "Greek · vesica",
		summary: "The curved arms wrapping the circle are Omega — the End.",
		body: "The horseshoe that clasps the roundel is Omega (Ω), last letter of the Greek alphabet. Read with Alpha it is Revelation 22:13 in a single emblem. The pointed oval those arcs form is also a vesica piscis, the fish-outline of ΙΧΘΥΣ — Jesus Christ, God’s Son, Savior — which itself contains Chi."
	},
	{
		id: "wreath",
		index: "03",
		title: "Wreath",
		glyph: "○",
		language: "Roman clipeus",
		summary: "The circle is Constantine’s wreath, later the ring of the Celtic Cross.",
		body: "Chi-Rho was set in a golden laurel wreath on the labarum, the imperial war-standard. That wreath becomes a plain circle in stone, and in the Insular west the circle becomes the ring of the Celtic Cross. The Ambrose chrismon in Milan names it: the circle contains the Highest King, whom you see without beginning or end."
	},
	{
		id: "chi",
		index: "04",
		title: "Chi",
		glyph: "Χ",
		language: "Greek",
		summary: "The saltire through the roundel is Chi — first letter of Christos.",
		body: "Chi (Χ) is the first letter of ΧΡΙΣΤΟΣ. The X is also the crux decussata, the crossed cross the church fathers already treated as a cosmic sign. Here the arms do double duty: they are a letter, and they are the crossed staves that pin the two figures into the Name."
	},
	{
		id: "rho",
		index: "05",
		title: "Rho",
		glyph: "Ρ",
		language: "Greek (loop reversed)",
		summary: "The D-like loop is Rho. Together with Chi it is the christogram ☧.",
		body: "Rho (Ρ) is the second letter of Christos. The loop sits to the left of the stem, so it reads as a Latin D. That is a reversed or Insular rho-hook — the same form seen on Irish stones such as Drumaqueran. Chi + Rho = ☧, the Name. A Latin eye can also take D + X as Deus over the cross; the wreath, Alpha, and figures still speak Chi-Rho grammar."
	},
	{
		id: "figures",
		index: "06",
		title: "Witnesses",
		glyph: "··",
		language: "Pictographic",
		summary: "Two bodies in the lower quadrants: soldiers, apostles, or lambs.",
		body: "Fourth-century sarcophagi set two figures under a wreathed Chi-Rho: soldiers at the empty tomb (one waking, one asleep), Peter and Paul, or twin lambs. The crossed Chi-arms running through these bodies make them witnesses at a crossing. The martial reading — labarum guards — fits Constantine’s victory sign."
	},
	{
		id: "synthesis",
		index: "07",
		title: "The hinge",
		glyph: "☧",
		language: "Greek · Latin · Celtic",
		summary: "Four ages of writing occupy the same cuts. This is how a Chi-Rho becomes a Celtic Cross.",
		body: "Pictograph, Greek christogram, Roman labarum, Celtic ring-cross — stacked, not sequential. Constantine’s ☧-in-wreath is regularized: Chi’s diagonals flatten to a crossbar, the wreath becomes a ring, and the Celtic Cross is what remains. The three-fold stack (triangle, circle, Name) is also Celtic triplism mapped onto the Trinity. Not a triquetra. The other Celtic trinity: geometry instead of interlace."
	}
];
var LAYER_BY_ID = Object.fromEntries(LAYERS.map((layer) => [layer.id, layer]));
var LANGUAGES = [
	{
		name: "Greek",
		marks: "Α Χ Ρ Ω",
		note: "The sacred core — Name, Beginning, End."
	},
	{
		name: "Latin / imperial",
		marks: "D · labarum",
		note: "Reversed Rho as D; wreath; two soldiers as the state’s sign."
	},
	{
		name: "Celtic / Insular",
		marks: "○  △  3",
		note: "Circle, triplism, the path from wreath to ringed cross."
	},
	{
		name: "Pictographic",
		marks: "two bodies + X",
		note: "Older than letters: two witnesses at a crossing."
	}
];
var DEFAULT_FRAME = {
	position: [
		0,
		.12,
		4.9
	],
	target: [
		0,
		.02,
		0
	]
};
var LAYER_FRAMES = {
	alpha: {
		position: [
			.15,
			1.15,
			3.15
		],
		target: [
			0,
			.92,
			0
		]
	},
	omega: {
		position: [
			0,
			.05,
			3.7
		],
		target: [
			0,
			-.05,
			0
		]
	},
	wreath: {
		position: [
			.05,
			-.18,
			3.05
		],
		target: [
			0,
			-.26,
			0
		]
	},
	chi: {
		position: [
			.2,
			-.22,
			2.55
		],
		target: [
			.02,
			-.26,
			0
		]
	},
	rho: {
		position: [
			.42,
			.08,
			2.35
		],
		target: [
			.16,
			.06,
			0
		]
	},
	figures: {
		position: [
			0,
			-.55,
			2.55
		],
		target: [
			0,
			-.58,
			0
		]
	},
	synthesis: {
		position: [
			0,
			.2,
			5.4
		],
		target: [
			0,
			.02,
			0
		]
	}
};
var ORDER = [
	"alpha",
	"omega",
	"wreath",
	"chi",
	"rho",
	"figures",
	"synthesis"
];
var useGlyphStore = create((set, get) => ({
	entered: false,
	viewMode: "both",
	selected: null,
	azimuth: -38,
	elevation: 42,
	explode: 0,
	showLabels: true,
	framing: false,
	enter: () => set({ entered: true }),
	setViewMode: (viewMode) => set({
		viewMode,
		explode: viewMode === "explode" ? 1 : 0
	}),
	select: (id, frame = true) => set({
		selected: id,
		framing: Boolean(id) && frame
	}),
	setAzimuth: (azimuth) => set({ azimuth }),
	setElevation: (elevation) => set({ elevation }),
	setExplode: (explode) => set({ explode }),
	toggleLabels: () => set((s) => ({ showLabels: !s.showLabels })),
	stopFraming: () => set({ framing: false }),
	resetView: () => set({
		selected: null,
		framing: true,
		viewMode: "both",
		explode: 0,
		azimuth: -38,
		elevation: 42
	}),
	nextLayer: () => {
		const { selected } = get();
		const next = ORDER[((selected ? ORDER.indexOf(selected) : -1) + 1) % ORDER.length];
		set({
			selected: next,
			framing: true
		});
	},
	prevLayer: () => {
		const { selected } = get();
		const prev = ORDER[((selected ? ORDER.indexOf(selected) : 0) - 1 + ORDER.length) % ORDER.length];
		set({
			selected: prev,
			framing: true
		});
	}
}));
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var MODES = [
	{
		id: "relief",
		label: "Photograph"
	},
	{
		id: "both",
		label: "Overlay"
	},
	{
		id: "decoded",
		label: "Decoded"
	},
	{
		id: "explode",
		label: "Explode"
	}
];
function IntroGate() {
	const entered = useGlyphStore((s) => s.entered);
	const enter = useGlyphStore((s) => s.enter);
	if (entered) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "intro-gate",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "intro-gate-inner",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker",
					children: "Early Christian · Celtic stone"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "display-title",
					children: "Chrismon"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "lede",
					children: "A 3D reading of the carved Name. Chi-Rho, Alpha and Omega, and the hinge toward the Celtic Cross — pulled apart in space."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "btn-primary",
					onClick: enter,
					children: "Enter the stone"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "hint",
					children: "Drag to orbit · tap a glyph · rake the light"
				})
			]
		})
	});
}
function ChrismonOverlay() {
	const entered = useGlyphStore((s) => s.entered);
	const viewMode = useGlyphStore((s) => s.viewMode);
	const setViewMode = useGlyphStore((s) => s.setViewMode);
	const selected = useGlyphStore((s) => s.selected);
	const select = useGlyphStore((s) => s.select);
	const azimuth = useGlyphStore((s) => s.azimuth);
	const elevation = useGlyphStore((s) => s.elevation);
	const setAzimuth = useGlyphStore((s) => s.setAzimuth);
	const setElevation = useGlyphStore((s) => s.setElevation);
	const resetView = useGlyphStore((s) => s.resetView);
	const nextLayer = useGlyphStore((s) => s.nextLayer);
	const prevLayer = useGlyphStore((s) => s.prevLayer);
	const showLabels = useGlyphStore((s) => s.showLabels);
	const toggleLabels = useGlyphStore((s) => s.toggleLabels);
	(0, import_react.useEffect)(() => {
		if (!entered) return;
		const onKey = (e) => {
			if (e.key === "ArrowRight") nextLayer();
			if (e.key === "ArrowLeft") prevLayer();
			if (e.key === "Escape") select(null, false);
			if (e.key === "r" || e.key === "R") resetView();
			if (e.key === "e" || e.key === "E") setViewMode("explode");
			if (e.key === "d" || e.key === "D") setViewMode("decoded");
			if (e.key === "p" || e.key === "P") setViewMode("relief");
			if (e.key === "o" || e.key === "O") setViewMode("both");
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		entered,
		nextLayer,
		prevLayer,
		select,
		resetView,
		setViewMode
	]);
	const layer = selected ? LAYER_BY_ID[selected] : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IntroGate, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: cn("topbar", entered && "is-in"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "brand",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "brand-mark",
					children: "☧"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "brand-name",
					children: "Chrismon"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "brand-sub",
					children: "Chi-Rho stone · 3D reading"
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mode-switch",
				role: "tablist",
				"aria-label": "View mode",
				children: MODES.map((mode) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					role: "tab",
					"aria-selected": viewMode === mode.id,
					className: cn("mode-btn", viewMode === mode.id && "is-on"),
					onClick: () => setViewMode(mode.id),
					children: mode.label
				}, mode.id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: cn("layer-rail", entered && "is-in"),
			"aria-label": "Glyph layers",
			children: LAYERS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: cn("layer-chip", selected === item.id && "is-on"),
				onClick: () => select(item.id),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "layer-index",
						children: item.index
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "layer-glyph",
						children: item.glyph
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "layer-title",
						children: item.title
					})
				]
			}, item.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
			className: cn("analysis", entered && "is-in", layer && "is-open"),
			"aria-live": "polite",
			children: layer ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "analysis-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "analysis-head",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "kicker",
							children: [
								layer.index,
								" · ",
								layer.language
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "analysis-glyph",
							children: layer.glyph
						}), layer.title] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "icon-btn",
							"aria-label": "Close reading",
							onClick: () => select(null, false),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
								size: 18,
								strokeWidth: 1.75
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "analysis-summary",
						children: layer.summary
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "analysis-body",
						children: layer.body
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
						className: "analysis-nav",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "btn-ghost",
							onClick: prevLayer,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
								size: 16,
								strokeWidth: 1.75
							}), "Prev"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "btn-ghost",
							onClick: nextLayer,
							children: ["Next", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
								size: 16,
								strokeWidth: 1.75
							})]
						})]
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "analysis-card is-idle",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kicker",
						children: "Thesis"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Α ☧ Ω" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "analysis-summary",
						children: "Alpha, the Name, Omega — three Greek letters in a Roman wreath, on the hinge toward a Celtic ring-cross."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "lang-list",
						children: LANGUAGES.map((lang) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: lang.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: lang.marks })] }, lang.name))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "analysis-body",
						children: "Tap a layer, or start a guided reading from Alpha."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "btn-secondary",
						onClick: () => select("alpha"),
						children: "Begin reading"
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
			className: cn("bottom-bar", entered && "is-in"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "slider-block",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SunMedium, {
							size: 16,
							strokeWidth: 1.75
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Azimuth" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "range",
							min: -160,
							max: 160,
							value: azimuth,
							onChange: (e) => setAzimuth(Number(e.target.value)),
							"aria-label": "Light azimuth"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "slider-block",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Aperture, {
							size: 16,
							strokeWidth: 1.75
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Elevation" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "range",
							min: 12,
							max: 78,
							value: elevation,
							onChange: (e) => setElevation(Number(e.target.value)),
							"aria-label": "Light elevation"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bottom-actions",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: cn("icon-btn", showLabels && "is-on"),
						onClick: toggleLabels,
						"aria-pressed": showLabels,
						"aria-label": "Toggle labels",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, {
							size: 16,
							strokeWidth: 1.75
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "icon-btn",
						onClick: resetView,
						"aria-label": "Reset view",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, {
							size: 16,
							strokeWidth: 1.75
						})
					})]
				})
			]
		})
	] });
}
var routes_exports = /* @__PURE__ */ __exportAll({ component: () => Home });
function Home() {
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setReady(true);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "chrismon-shell",
		children: [ready ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CanvasLazy, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "chrismon-canvas" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChrismonOverlay, {})]
	});
}
function CanvasLazy() {
	const [Scene, setScene] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		let mounted = true;
		import("./chrismon-scene-BWqApyUI.mjs").then((mod) => {
			if (!mounted) return;
			setScene(() => () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(mod.ChrismonCanvas, {}));
		});
		return () => {
			mounted = false;
		};
	}, []);
	if (!Scene) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "chrismon-canvas" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scene, {});
}
//#endregion
export { LAYER_FRAMES as i, useGlyphStore as n, DEFAULT_FRAME as r, routes_exports as t };

import { useEffect } from "react";
import {
  Aperture,
  ChevronLeft,
  ChevronRight,
  Layers,
  RotateCcw,
  SunMedium,
  X,
} from "lucide-react";
import { LAYERS, LANGUAGES, LAYER_BY_ID, type ViewMode } from "@/lib/glyph-data";
import { useGlyphStore } from "@/lib/store";
import { cn } from "@/lib/utils";

const MODES: { id: ViewMode; label: string }[] = [
  { id: "relief", label: "Photograph" },
  { id: "both", label: "Overlay" },
  { id: "decoded", label: "Decoded" },
  { id: "explode", label: "Explode" },
];

export function IntroGate() {
  const entered = useGlyphStore((s) => s.entered);
  const enter = useGlyphStore((s) => s.enter);

  if (entered) return null;

  return (
    <div className="intro-gate">
      <div className="intro-gate-inner">
        <p className="kicker">Early Christian · Celtic stone</p>
        <h1 className="display-title">Chrismon</h1>
        <p className="lede">
          A 3D reading of the carved Name. Chi-Rho, Alpha and Omega, and the
          hinge toward the Celtic Cross — pulled apart in space.
        </p>
        <button type="button" className="btn-primary" onClick={enter}>
          Enter the stone
        </button>
        <p className="hint">
          Drag to orbit · tap a glyph · rake the light
        </p>
      </div>
    </div>
  );
}

export function ChrismonOverlay() {
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

  useEffect(() => {
    if (!entered) return;
    const onKey = (e: KeyboardEvent) => {
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
  }, [entered, nextLayer, prevLayer, select, resetView, setViewMode]);

  const layer = selected ? LAYER_BY_ID[selected] : null;

  return (
    <>
      <IntroGate />

      <header className={cn("topbar", entered && "is-in")} aria-hidden={!entered} {...(!entered ? { inert: true } : {})}>
        <div className="brand">
          <span className="brand-mark" aria-hidden="true">☧</span>
          <div>
            <p className="brand-name">Chrismon</p>
            <p className="brand-sub">Chi-Rho stone · 3D reading</p>
          </div>
        </div>
        <p className="topbar-note">Rotate the stone to read the relief</p>
        <div className="mode-switch" role="tablist" aria-label="View mode">
          {MODES.map((mode) => (
            <button
              key={mode.id}
              type="button"
              role="tab"
              aria-selected={viewMode === mode.id}
              className={cn("mode-btn", viewMode === mode.id && "is-on")}
              onClick={() => setViewMode(mode.id)}
            >
              {mode.label}
            </button>
          ))}
        </div>
      </header>

      <nav className={cn("layer-rail", entered && "is-in")} aria-label="Glyph layers" aria-hidden={!entered} {...(!entered ? { inert: true } : {})}>
        {LAYERS.map((item) => (
          <button
            key={item.id}
            type="button"
            className={cn("layer-chip", selected === item.id && "is-on")}
            onClick={() => select(item.id)}
          >
            <span className="layer-index">{item.index}</span>
            <span className="layer-glyph">{item.glyph}</span>
            <span className="layer-title">{item.title}</span>
          </button>
        ))}
      </nav>

      <aside
        className={cn("analysis", entered && "is-in", layer && "is-open")}
        aria-live="polite"
        aria-hidden={!entered}
        {...(!entered ? { inert: true } : {})}
      >
        {layer ? (
          <article className="analysis-card">
            <header className="analysis-head">
              <div>
                <p className="kicker">
                  {layer.index} · {layer.language}
                </p>
                <h2>
                  <span className="analysis-glyph">{layer.glyph}</span>
                  {layer.title}
                </h2>
              </div>
              <button
                type="button"
                className="icon-btn"
                aria-label="Close reading"
                onClick={() => select(null, false)}
              >
                <X size={18} strokeWidth={1.75} />
              </button>
            </header>
            <p className="analysis-summary">{layer.summary}</p>
            <p className="analysis-body">{layer.body}</p>
            <footer className="analysis-nav">
              <button type="button" className="btn-ghost" onClick={prevLayer}>
                <ChevronLeft size={16} strokeWidth={1.75} />
                Prev
              </button>
              <button type="button" className="btn-ghost" onClick={nextLayer}>
                Next
                <ChevronRight size={16} strokeWidth={1.75} />
              </button>
            </footer>
          </article>
        ) : (
          <article className="analysis-card is-idle">
            <p className="kicker">Thesis</p>
            <h2>Α ☧ Ω</h2>
            <p className="analysis-summary">
              Alpha, the Name, Omega — three Greek letters in a Roman wreath,
              on the hinge toward a Celtic ring-cross.
            </p>
            <ul className="lang-list">
              {LANGUAGES.map((lang) => (
                <li key={lang.name}>
                  <span>{lang.name}</span>
                  <span>{lang.marks}</span>
                </li>
              ))}
            </ul>
            <p className="analysis-body">
              Tap a layer, or start a guided reading from Alpha. You can return
              here at any time.
            </p>
            <button
              type="button"
              className="btn-secondary"
              onClick={() => select("alpha")}
            >
              Begin reading
            </button>
          </article>
        )}
      </aside>

      <footer className={cn("bottom-bar", entered && "is-in")} aria-hidden={!entered} {...(!entered ? { inert: true } : {})}>
        <label className="slider-block">
          <SunMedium size={16} strokeWidth={1.75} />
          <span>Light direction</span>
          <input
            type="range"
            min={-160}
            max={160}
            value={azimuth}
            onChange={(e) => setAzimuth(Number(e.target.value))}
            aria-label="Light azimuth"
          />
        </label>
        <label className="slider-block">
          <Aperture size={16} strokeWidth={1.75} />
          <span>Light height</span>
          <input
            type="range"
            min={12}
            max={78}
            value={elevation}
            onChange={(e) => setElevation(Number(e.target.value))}
            aria-label="Light elevation"
          />
        </label>
        <div className="bottom-actions">
          <button
            type="button"
            className={cn("icon-btn", showLabels && "is-on")}
            onClick={toggleLabels}
            aria-pressed={showLabels}
            aria-label="Toggle labels"
          >
            <Layers size={16} strokeWidth={1.75} />
          </button>
          <button
            type="button"
            className="icon-btn"
            onClick={resetView}
            aria-label="Reset view"
          >
            <RotateCcw size={16} strokeWidth={1.75} />
          </button>
        </div>
      </footer>
    </>
  );
}

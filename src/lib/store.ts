import { create } from "zustand";
import type { LayerId, ViewMode } from "@/lib/glyph-data";

interface GlyphState {
  entered: boolean;
  viewMode: ViewMode;
  selected: LayerId | null;
  azimuth: number;
  elevation: number;
  explode: number;
  showLabels: boolean;
  framing: boolean;
  enter: () => void;
  setViewMode: (mode: ViewMode) => void;
  select: (id: LayerId | null, frame?: boolean) => void;
  setAzimuth: (value: number) => void;
  setElevation: (value: number) => void;
  setExplode: (value: number) => void;
  toggleLabels: () => void;
  stopFraming: () => void;
  resetView: () => void;
  nextLayer: () => void;
  prevLayer: () => void;
}

const ORDER: LayerId[] = [
  "alpha",
  "omega",
  "wreath",
  "chi",
  "rho",
  "figures",
  "synthesis",
];

export const useGlyphStore = create<GlyphState>((set, get) => ({
  entered: false,
  viewMode: "relief" as ViewMode,
  selected: null,
  azimuth: -38,
  elevation: 42,
  explode: 0,
  showLabels: false,
  framing: false,
  enter: () => set({ entered: true, framing: true }),
  setViewMode: (viewMode) =>
    set({
      viewMode,
      explode: viewMode === "explode" ? 1 : 0,
    }),
  select: (id, frame = true) =>
    set({
      selected: id,
      framing: Boolean(id) && frame,
    }),
  setAzimuth: (azimuth) => set({ azimuth }),
  setElevation: (elevation) => set({ elevation }),
  setExplode: (explode) => set({ explode }),
  toggleLabels: () => set((s) => ({ showLabels: !s.showLabels })),
  stopFraming: () => set({ framing: false }),
  resetView: () =>
    set({
      selected: null,
      framing: true,
      viewMode: "relief",
      explode: 0,
      azimuth: -38,
      elevation: 42,
    }),
  nextLayer: () => {
    const { selected } = get();
    const i = selected ? ORDER.indexOf(selected) : -1;
    const next = ORDER[(i + 1) % ORDER.length];
    set({ selected: next, framing: true });
  },
  prevLayer: () => {
    const { selected } = get();
    const i = selected ? ORDER.indexOf(selected) : 0;
    const prev = ORDER[(i - 1 + ORDER.length) % ORDER.length];
    set({ selected: prev, framing: true });
  },
}));

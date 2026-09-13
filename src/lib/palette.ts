export const PALETTE = {
  ice: "#7eb8c9",
  iceHot: "#c5e8f0",
  bone: "#e6e1d6",
  ink: "#07080c",
  slate: "#10141c",
  stone: "#1c242c",
  stoneLit: "#3d4c58",
  dim: "#8b939e",
} as const;

export const RELIEF = {
  aspect: 1.3734,
  height: 3.2,
  get width() {
    return this.height * this.aspect;
  },
};

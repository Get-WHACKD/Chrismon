export type LayerId =
  | "alpha"
  | "omega"
  | "wreath"
  | "chi"
  | "rho"
  | "figures"
  | "synthesis";

export type ViewMode = "relief" | "decoded" | "both" | "explode";

export interface GlyphLayer {
  id: LayerId;
  index: string;
  title: string;
  glyph: string;
  language: string;
  summary: string;
  body: string;
}

export const LAYERS: GlyphLayer[] = [
  {
    id: "alpha",
    index: "01",
    title: "Alpha",
    glyph: "Α",
    language: "Greek",
    summary: "The peaked chevron is the letter Alpha — the Beginning.",
    body: "The two heavy strokes that meet above the roundel are not a roof. They are Greek Alpha (Α), the first letter of the alphabet. In early Christian carving Alpha almost always travels with Omega: “I am the Alpha and the Omega.” The Y- and H-like cuts in the peak are the Alpha’s crossbar and junctions, thickened by the chisel.",
  },
  {
    id: "omega",
    index: "02",
    title: "Omega",
    glyph: "Ω",
    language: "Greek · vesica",
    summary: "The curved arms wrapping the circle are Omega — the End.",
    body: "The horseshoe that clasps the roundel is Omega (Ω), last letter of the Greek alphabet. Read with Alpha it is Revelation 22:13 in a single emblem. The pointed oval those arcs form is also a vesica piscis, the fish-outline of ΙΧΘΥΣ — Jesus Christ, God’s Son, Savior — which itself contains Chi.",
  },
  {
    id: "wreath",
    index: "03",
    title: "Wreath",
    glyph: "○",
    language: "Roman clipeus",
    summary: "The circle is Constantine’s wreath, later the ring of the Celtic Cross.",
    body: "Chi-Rho was set in a golden laurel wreath on the labarum, the imperial war-standard. That wreath becomes a plain circle in stone, and in the Insular west the circle becomes the ring of the Celtic Cross. The Ambrose chrismon in Milan names it: the circle contains the Highest King, whom you see without beginning or end.",
  },
  {
    id: "chi",
    index: "04",
    title: "Chi",
    glyph: "Χ",
    language: "Greek",
    summary: "The saltire through the roundel is Chi — first letter of Christos.",
    body: "Chi (Χ) is the first letter of ΧΡΙΣΤΟΣ. The X is also the crux decussata, the crossed cross the church fathers already treated as a cosmic sign. Here the arms do double duty: they are a letter, and they are the crossed staves that pin the two figures into the Name.",
  },
  {
    id: "rho",
    index: "05",
    title: "Rho",
    glyph: "Ρ",
    language: "Greek (loop reversed)",
    summary: "The D-like loop is Rho. Together with Chi it is the christogram ☧.",
    body: "Rho (Ρ) is the second letter of Christos. The loop sits to the left of the stem, so it reads as a Latin D. That is a reversed or Insular rho-hook — the same form seen on Irish stones such as Drumaqueran. Chi + Rho = ☧, the Name. A Latin eye can also take D + X as Deus over the cross; the wreath, Alpha, and figures still speak Chi-Rho grammar.",
  },
  {
    id: "figures",
    index: "06",
    title: "Witnesses",
    glyph: "··",
    language: "Pictographic",
    summary: "Two bodies in the lower quadrants: soldiers, apostles, or lambs.",
    body: "Fourth-century sarcophagi set two figures under a wreathed Chi-Rho: soldiers at the empty tomb (one waking, one asleep), Peter and Paul, or twin lambs. The crossed Chi-arms running through these bodies make them witnesses at a crossing. The martial reading — labarum guards — fits Constantine’s victory sign.",
  },
  {
    id: "synthesis",
    index: "07",
    title: "The hinge",
    glyph: "☧",
    language: "Greek · Latin · Celtic",
    summary: "Four ages of writing occupy the same cuts. This is how a Chi-Rho becomes a Celtic Cross.",
    body: "Pictograph, Greek christogram, Roman labarum, Celtic ring-cross — stacked, not sequential. Constantine’s ☧-in-wreath is regularized: Chi’s diagonals flatten to a crossbar, the wreath becomes a ring, and the Celtic Cross is what remains. The three-fold stack (triangle, circle, Name) is also Celtic triplism mapped onto the Trinity. Not a triquetra. The other Celtic trinity: geometry instead of interlace.",
  },
];

export const LAYER_BY_ID = Object.fromEntries(
  LAYERS.map((layer) => [layer.id, layer]),
) as Record<LayerId, GlyphLayer>;

export const LANGUAGES = [
  {
    name: "Greek",
    marks: "Α Χ Ρ Ω",
    note: "The sacred core — Name, Beginning, End.",
  },
  {
    name: "Latin / imperial",
    marks: "D · labarum",
    note: "Reversed Rho as D; wreath; two soldiers as the state’s sign.",
  },
  {
    name: "Celtic / Insular",
    marks: "○  △  3",
    note: "Circle, triplism, the path from wreath to ringed cross.",
  },
  {
    name: "Pictographic",
    marks: "two bodies + X",
    note: "Older than letters: two witnesses at a crossing.",
  },
];

export interface CameraFrame {
  position: [number, number, number];
  target: [number, number, number];
}

export const DEFAULT_FRAME: CameraFrame = {
  position: [1.55, 0.48, 4.35],
  target: [0, 0.04, 0],
};

export const LAYER_FRAMES: Record<LayerId, CameraFrame> = {
  alpha: { position: [0.15, 1.15, 3.15], target: [0, 0.92, 0] },
  omega: { position: [0, 0.05, 3.7], target: [0, -0.05, 0] },
  wreath: { position: [0.05, -0.18, 3.05], target: [0, -0.26, 0] },
  chi: { position: [0.2, -0.22, 2.55], target: [0.02, -0.26, 0] },
  rho: { position: [0.42, 0.08, 2.35], target: [0.16, 0.06, 0] },
  figures: { position: [0, -0.55, 2.55], target: [0, -0.58, 0] },
  synthesis: { position: [0.0, 0.2, 5.4], target: [0, 0.02, 0] },
};

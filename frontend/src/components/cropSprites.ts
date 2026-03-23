// All pixel art sprite data for crops and stats.
// Sprites use a 16×16 grid as [x, y, color] tuples.
// Stat sprites use an 8×8 grid as [x, y, color] tuples.

export type SpriteData = [number, number, string][]

export type CropStages = {
  seedling: SpriteData
  growing: SpriteData
  mature: SpriteData
}

// ─── CORN ──────────────────────────────────────────────────────────────────────
// Seedling: small sprout with two tiny leaves
// Growing:  taller stalk with larger leaves jutting left and right
// Mature:   full stalk with a yellow ear of corn on the right side

const CORN_SEEDLING: SpriteData = [
  [7, 15, '#78350f'], [7, 14, '#166534'], [7, 13, '#15803d'],
  [6, 13, '#22c55e'], [8, 13, '#22c55e'],
  [7, 12, '#15803d'],
  [6, 11, '#4ade80'], [7, 11, '#16a34a'], [8, 11, '#4ade80'],
]

const CORN_GROWING: SpriteData = [
  [7, 15, '#78350f'], [7, 14, '#166534'], [7, 13, '#15803d'],
  [7, 12, '#15803d'],
  [5, 12, '#22c55e'], [6, 12, '#22c55e'],              // left leaf
  [8, 11, '#22c55e'], [9, 11, '#22c55e'],              // right leaf
  [7, 11, '#16a34a'],
  [7, 10, '#16a34a'], [7,  9, '#15803d'],
  [5,  9, '#4ade80'], [6,  9, '#4ade80'],              // upper left leaf
  [8,  8, '#4ade80'], [9,  8, '#4ade80'],              // upper right leaf
  [7,  8, '#166534'], [7,  7, '#166534'],
]

const CORN_MATURE: SpriteData = [
  [7, 15, '#78350f'], [7, 14, '#166534'], [7, 13, '#15803d'],
  [7, 12, '#15803d'],
  [5, 12, '#22c55e'], [6, 12, '#22c55e'],
  [8, 11, '#22c55e'], [9, 11, '#22c55e'],
  [7, 11, '#16a34a'],
  [7, 10, '#16a34a'], [7,  9, '#15803d'],
  [5,  9, '#4ade80'], [6,  9, '#4ade80'],
  [8,  8, '#4ade80'], [9,  8, '#4ade80'],
  [7,  8, '#166534'], [7,  7, '#166534'], [7,  6, '#166534'],
  // ear of corn on the right (x=9-10, y=9-12)
  [9, 12, '#ca8a04'], [10, 12, '#eab308'],
  [9, 11, '#ca8a04'], [10, 11, '#fde047'],
  [9, 10, '#ca8a04'], [10, 10, '#fde047'],
  [9,  9, '#a16207'], [10,  9, '#ca8a04'],
  // corn silk (top of ear)
  [10,  8, '#fef9c3'], [11,  8, '#fef9c3'],
]

// ─── WHEAT ─────────────────────────────────────────────────────────────────────
// Seedling: 3 thin green shoots
// Growing:  5 taller green stalks
// Mature:   golden stalks with drooping grain heads

const WHEAT_SEEDLING: SpriteData = [
  [5, 15, '#78350f'], [7, 15, '#78350f'], [9, 15, '#78350f'],
  [5, 14, '#4ade80'], [7, 14, '#4ade80'], [9, 14, '#4ade80'],
  [5, 13, '#22c55e'], [7, 13, '#22c55e'], [9, 13, '#22c55e'],
  [6, 13, '#22c55e'], [8, 13, '#22c55e'],
  [6, 12, '#16a34a'], [7, 12, '#16a34a'], [8, 12, '#16a34a'],
]

const WHEAT_GROWING: SpriteData = [
  [5, 15, '#78350f'], [7, 15, '#78350f'], [9, 15, '#78350f'],
  [5, 14, '#15803d'], [6, 14, '#15803d'], [7, 14, '#16a34a'],
  [8, 14, '#15803d'], [9, 14, '#15803d'],
  [5, 13, '#16a34a'], [6, 13, '#22c55e'], [7, 13, '#22c55e'],
  [8, 13, '#22c55e'], [9, 13, '#16a34a'],
  [5, 12, '#22c55e'], [7, 12, '#22c55e'], [9, 12, '#22c55e'],
  [5, 11, '#4ade80'], [7, 11, '#4ade80'], [9, 11, '#4ade80'],
  [6, 11, '#22c55e'], [8, 11, '#22c55e'],
  [6, 10, '#16a34a'], [7, 10, '#16a34a'], [8, 10, '#16a34a'],
  [7,  9, '#15803d'],
]

const WHEAT_MATURE: SpriteData = [
  [5, 15, '#78350f'], [7, 15, '#78350f'], [9, 15, '#78350f'],
  [5, 14, '#92400e'], [7, 14, '#a16207'], [9, 14, '#92400e'],
  [5, 13, '#ca8a04'], [7, 13, '#eab308'], [9, 13, '#ca8a04'],
  [5, 12, '#eab308'], [6, 12, '#fde047'], [7, 12, '#fde047'],
  [8, 12, '#fde047'], [9, 12, '#eab308'],
  // grain heads drooping
  [4, 10, '#eab308'], [5, 11, '#fde047'], [5, 10, '#fde047'],
  [6, 10, '#eab308'],
  [7, 11, '#fde047'], [7, 10, '#fde047'], [7,  9, '#ca8a04'],
  [8, 10, '#eab308'],
  [9, 11, '#fde047'], [9, 10, '#fde047'],
  [10, 10, '#eab308'],
  // drooped tips
  [4,  9, '#ca8a04'], [5,  9, '#a16207'],
  [9,  9, '#a16207'], [10,  9, '#ca8a04'],
]

// ─── COTTON ────────────────────────────────────────────────────────────────────
// Seedling: small bushy sprout
// Growing:  wider bushy plant with spreading branches
// Mature:   full bush with white cotton bolls on branch tips

const COTTON_SEEDLING: SpriteData = [
  [7, 15, '#78350f'],
  [7, 14, '#166534'], [6, 14, '#22c55e'], [8, 14, '#22c55e'],
  [5, 13, '#4ade80'], [6, 13, '#22c55e'], [7, 13, '#16a34a'],
  [8, 13, '#22c55e'], [9, 13, '#4ade80'],
  [6, 12, '#16a34a'], [7, 12, '#15803d'], [8, 12, '#16a34a'],
]

const COTTON_GROWING: SpriteData = [
  [7, 15, '#78350f'],
  [7, 14, '#166534'],
  [5, 13, '#15803d'], [6, 13, '#16a34a'], [7, 13, '#16a34a'],
  [8, 13, '#16a34a'], [9, 13, '#15803d'],
  [4, 12, '#22c55e'], [5, 12, '#22c55e'], [6, 12, '#22c55e'],
  [7, 12, '#16a34a'],
  [8, 12, '#22c55e'], [9, 12, '#22c55e'], [10, 12, '#22c55e'],
  [4, 11, '#4ade80'], [5, 11, '#22c55e'], [6, 11, '#22c55e'],
  [7, 11, '#16a34a'],
  [8, 11, '#22c55e'], [9, 11, '#22c55e'], [10, 11, '#4ade80'],
  [5, 10, '#22c55e'], [7, 10, '#16a34a'], [9, 10, '#22c55e'],
  [6, 10, '#4ade80'], [8, 10, '#4ade80'],
]

const COTTON_MATURE: SpriteData = [
  [7, 15, '#78350f'],
  [7, 14, '#166534'],
  [5, 13, '#15803d'], [6, 13, '#16a34a'], [7, 13, '#16a34a'],
  [8, 13, '#16a34a'], [9, 13, '#15803d'],
  [4, 12, '#22c55e'], [5, 12, '#22c55e'], [6, 12, '#22c55e'],
  [7, 12, '#16a34a'],
  [8, 12, '#22c55e'], [9, 12, '#22c55e'], [10, 12, '#22c55e'],
  [4, 11, '#4ade80'], [5, 11, '#22c55e'], [6, 11, '#22c55e'],
  [7, 11, '#16a34a'],
  [8, 11, '#22c55e'], [9, 11, '#22c55e'], [10, 11, '#4ade80'],
  [5, 10, '#22c55e'], [7, 10, '#16a34a'], [9, 10, '#22c55e'],
  [6, 10, '#4ade80'], [8, 10, '#4ade80'],
  // cotton bolls — white/cream fluffy bits at branch tips
  [3, 11, '#f0fdf4'], [3, 10, '#dcfce7'], [4, 10, '#f0fdf4'],
  [11, 11, '#f0fdf4'], [11, 10, '#dcfce7'], [10, 10, '#f0fdf4'],
  [5,  9, '#f0fdf4'], [6,  9, '#dcfce7'], [5,  8, '#dcfce7'],
  [7,  9, '#f0fdf4'], [7,  8, '#dcfce7'],
  [9,  9, '#f0fdf4'], [8,  9, '#dcfce7'], [9,  8, '#dcfce7'],
]

// ─── STRAWBERRY ────────────────────────────────────────────────────────────────
// Seedling: 2-3 small trifoliate leaves at ground level
// Growing:  denser leaf canopy, small white flowers starting to show
// Mature:   full leaf canopy with 3 bright red berries hanging below

const STRAWBERRY_SEEDLING: SpriteData = [
  [7, 15, '#78350f'],
  [6, 14, '#15803d'], [7, 14, '#16a34a'], [8, 14, '#15803d'],
  [5, 13, '#22c55e'], [6, 13, '#4ade80'], [7, 13, '#22c55e'],
  [8, 13, '#4ade80'], [9, 13, '#22c55e'],
  [6, 12, '#16a34a'], [7, 12, '#16a34a'], [8, 12, '#16a34a'],
]

const STRAWBERRY_GROWING: SpriteData = [
  [7, 15, '#78350f'],
  [5, 14, '#166534'], [6, 14, '#15803d'], [7, 14, '#166534'],
  [8, 14, '#15803d'], [9, 14, '#166534'],
  [4, 13, '#22c55e'], [5, 13, '#16a34a'], [6, 13, '#4ade80'],
  [7, 13, '#16a34a'],
  [8, 13, '#4ade80'], [9, 13, '#16a34a'], [10, 13, '#22c55e'],
  [4, 12, '#4ade80'], [5, 12, '#22c55e'], [6, 12, '#22c55e'],
  [7, 12, '#16a34a'],
  [8, 12, '#22c55e'], [9, 12, '#22c55e'], [10, 12, '#4ade80'],
  // small white flowers
  [5, 11, '#fafafa'], [7, 11, '#fafafa'], [9, 11, '#fafafa'],
  [5, 10, '#fde68a'], [7, 10, '#fde68a'], [9, 10, '#fde68a'],
]

const STRAWBERRY_MATURE: SpriteData = [
  [7, 15, '#78350f'],
  [5, 14, '#166534'], [6, 14, '#15803d'], [7, 14, '#166534'],
  [8, 14, '#15803d'], [9, 14, '#166534'],
  [4, 13, '#22c55e'], [5, 13, '#16a34a'], [6, 13, '#4ade80'],
  [7, 13, '#16a34a'],
  [8, 13, '#4ade80'], [9, 13, '#16a34a'], [10, 13, '#22c55e'],
  [4, 12, '#4ade80'], [5, 12, '#22c55e'], [6, 12, '#22c55e'],
  [7, 12, '#16a34a'],
  [8, 12, '#22c55e'], [9, 12, '#22c55e'], [10, 12, '#4ade80'],
  // ripe red berries hanging below canopy
  // left berry
  [5, 11, '#dc2626'], [6, 11, '#ef4444'],
  [5, 10, '#b91c1c'], [6, 10, '#dc2626'],
  [6,  9, '#991b1b'],
  // center berry
  [7, 11, '#dc2626'], [8, 11, '#ef4444'],
  [7, 10, '#b91c1c'], [8, 10, '#dc2626'],
  [7,  9, '#991b1b'],
  // right berry
  [9, 11, '#dc2626'], [10, 11, '#ef4444'],
  [9, 10, '#b91c1c'], [10, 10, '#dc2626'],
  [9,  9, '#991b1b'],
  // berry seeds (cream dots)
  [5, 10, '#fde68a'], [7, 10, '#fde68a'], [9, 10, '#fde68a'],
]

export const CROP_SPRITES: Record<string, CropStages> = {
  CORN:       { seedling: CORN_SEEDLING,       growing: CORN_GROWING,       mature: CORN_MATURE       },
  WHEAT:      { seedling: WHEAT_SEEDLING,      growing: WHEAT_GROWING,      mature: WHEAT_MATURE      },
  COTTON:     { seedling: COTTON_SEEDLING,     growing: COTTON_GROWING,     mature: COTTON_MATURE     },
  STRAWBERRY: { seedling: STRAWBERRY_SEEDLING, growing: STRAWBERRY_GROWING, mature: STRAWBERRY_MATURE },
}

export function getCropStage(growth: number): keyof CropStages {
  if (growth < 33) return 'seedling'
  if (growth < 66) return 'growing'
  return 'mature'
}

// ─── STAT SPRITES (8×8 grid) ───────────────────────────────────────────────────

// Growth — tiny seedling: single stalk with two small leaves
const STAT_GROWTH: SpriteData = [
  [3, 7, '#78350f'],
  [3, 6, '#15803d'], [3, 5, '#16a34a'],
  [2, 5, '#22c55e'], [4, 4, '#22c55e'],
  [3, 4, '#16a34a'], [3, 3, '#15803d'],
  [2, 3, '#4ade80'], [4, 3, '#4ade80'],
  [3, 2, '#22c55e'],
]

// Hydration — water droplet (teardrop shape)
const STAT_HYDRATION: SpriteData = [
  [3, 1, '#7dd3fc'],
  [2, 2, '#38bdf8'], [3, 2, '#38bdf8'], [4, 2, '#7dd3fc'],
  [1, 3, '#0ea5e9'], [2, 3, '#38bdf8'], [3, 3, '#7dd3fc'], [4, 3, '#38bdf8'], [5, 3, '#0ea5e9'],
  [1, 4, '#0ea5e9'], [2, 4, '#38bdf8'], [3, 4, '#7dd3fc'], [4, 4, '#38bdf8'], [5, 4, '#0ea5e9'],
  [1, 5, '#0284c7'], [2, 5, '#0ea5e9'], [3, 5, '#38bdf8'], [4, 5, '#0ea5e9'], [5, 5, '#0284c7'],
  [2, 6, '#0284c7'], [3, 6, '#0ea5e9'], [4, 6, '#0284c7'],
  [3, 7, '#0369a1'],
]

// Health — small heart shape
const STAT_HEALTH: SpriteData = [
  [1, 2, '#f87171'], [2, 1, '#ef4444'], [3, 2, '#f87171'],
  [4, 2, '#f87171'], [5, 1, '#ef4444'], [6, 2, '#f87171'],
  [1, 3, '#ef4444'], [2, 2, '#fca5a5'], [3, 3, '#fca5a5'],
  [4, 3, '#fca5a5'], [5, 2, '#fca5a5'], [6, 3, '#ef4444'],
  [1, 4, '#dc2626'], [2, 3, '#f87171'], [3, 4, '#f87171'],
  [4, 4, '#f87171'], [5, 3, '#f87171'], [6, 4, '#dc2626'],
  [2, 4, '#ef4444'], [3, 5, '#ef4444'], [4, 5, '#ef4444'], [5, 4, '#ef4444'],
  [3, 6, '#dc2626'], [4, 6, '#dc2626'],
  [3, 7, '#b91c1c'], [4, 7, '#b91c1c'],
]

// Weeds — Y-shaped weed
const STAT_WEEDS: SpriteData = [
  [3, 7, '#78350f'], [3, 6, '#a16207'], [3, 5, '#92400e'],
  [2, 4, '#a16207'], [3, 4, '#92400e'], [4, 4, '#a16207'],
  [1, 3, '#78350f'], [3, 3, '#78350f'], [5, 3, '#78350f'],
  [2, 3, '#a16207'], [4, 3, '#a16207'],
  [1, 2, '#92400e'], [5, 2, '#92400e'],
]

// Harvest — sickle: curved golden blade with a brown handle
const STAT_HARVEST: SpriteData = [
  [5, 0, '#fde047'], [6, 0, '#eab308'],
  [4, 1, '#fde047'], [5, 1, '#eab308'], [6, 1, '#ca8a04'],
  [3, 2, '#eab308'], [4, 2, '#fde047'],
  [2, 3, '#ca8a04'], [3, 3, '#eab308'],
  [2, 4, '#a16207'], [3, 4, '#ca8a04'],
  [4, 3, '#78350f'],
  [3, 5, '#92400e'], [4, 5, '#78350f'],
  [4, 6, '#78350f'], [5, 6, '#92400e'],
  [5, 7, '#78350f'], [6, 7, '#78350f'],
]

export const STAT_SPRITES: Record<string, SpriteData> = {
  growth:    STAT_GROWTH,
  hydration: STAT_HYDRATION,
  health:    STAT_HEALTH,
  weeds:     STAT_WEEDS,
  harvest:   STAT_HARVEST,
}

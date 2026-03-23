import { Stage, Layer, Rect, Text, Group } from 'react-konva'
import type { Plot } from "../hooks/useSocket";
import { CROP_SPRITES, STAT_SPRITES, getCropStage } from './cropSprites'

type Action = 'WATER' | 'WEED' | 'PLANT' | 'HARVEST'

interface PlotProps {
   plot: Plot,
   selectedAction: Action
   onAction: (plotId: string, type: string, version: number) => void
}

function getColor(health: number): string {
   if (health > 66) return "#4CAF50";
   if (health > 33) return "#FFEB3B";
   return "#F44336";
}

const CROP_SCALE = 4   // 16×16 sprite → 64×64px
const STAT_SCALE = 3   // 8×8 sprite  → 24×24px
const STAT_SPRITE_W = 8 * STAT_SCALE  // 24px
const STAT_COL_W = STAT_SPRITE_W + 30 // sprite + number text
const STATS_W = STAT_COL_W * 2        // 2 columns
const STATS_H = (STAT_SPRITE_W + 4) * 2 // 2 rows

// Renders the 16×16 crop pixel art + weed sprites overlaid
function PixelPlant({ crop, growth, weeds }: { crop: string; growth: number; weeds: number }) {
  const stage = getCropStage(growth)
  const sprites = CROP_SPRITES[crop] ?? CROP_SPRITES['CORN']
  const pixels = sprites[stage]

  const WEED_ANCHORS = [
    { x: 1,  y: 13 },
    { x: 12, y: 13 },
    { x: 1,  y: 10 },
    { x: 12, y: 10 },
  ]
  const WEED_SPRITE: [number, number][] = [
    [0, 0], [0, 1], [0, 2],
    [-1, 0], [1, 0],
  ]
  const weedCount = Math.floor((weeds / 100) * WEED_ANCHORS.length)

  return (
    <Stage width={16 * CROP_SCALE} height={16 * CROP_SCALE} style={{ display: 'block', margin: 'auto' }}>
      <Layer>
        {pixels.map(([x, y, color], i) => (
          <Rect key={i} x={x * CROP_SCALE} y={y * CROP_SCALE} width={CROP_SCALE} height={CROP_SCALE} fill={color} />
        ))}
        {WEED_ANCHORS.slice(0, weedCount).map((anchor, i) =>
          WEED_SPRITE.map(([dx, dy], j) => (
            <Rect
              key={`w-${i}-${j}`}
              x={(anchor.x + dx) * CROP_SCALE}
              y={(anchor.y + dy) * CROP_SCALE}
              width={CROP_SCALE}
              height={CROP_SCALE}
              fill="#a16207"
            />
          ))
        )}
      </Layer>
    </Stage>
  )
}

// 4-stat bar: growth, hydration, health, weeds — laid out as 2×2 grid
function StatBar({ plot }: { plot: Plot }) {
  const stats: { key: string; value: number }[] = [
    { key: 'growth',    value: plot.growth    },
    { key: 'hydration', value: plot.hydration },
    { key: 'health',    value: plot.health    },
    { key: 'weeds',     value: plot.weeds     },
  ]
  return (
    <Stage width={STATS_W} height={STATS_H} style={{ display: 'block', margin: 'auto' }}>
      <Layer>
        {stats.map(({ key, value }, i) => {
          const col = i % 2
          const row = Math.floor(i / 2)
          const offsetX = col * STAT_COL_W
          const offsetY = row * (STAT_SPRITE_W + 4)
          const pixels = STAT_SPRITES[key] ?? []
          return (
            <Group key={key} x={offsetX} y={offsetY}>
              {pixels.map(([x, y, color], pi) => (
                <Rect
                  key={pi}
                  x={x * STAT_SCALE}
                  y={y * STAT_SCALE}
                  width={STAT_SCALE}
                  height={STAT_SCALE}
                  fill={color}
                />
              ))}
              <Text
                x={STAT_SPRITE_W + 3}
                y={4}
                text={String(Math.round(value))}
                fontSize={11}
                fontFamily="monospace"
                fill="#1c1917"
              />
            </Group>
          )
        })}
      </Layer>
    </Stage>
  )
}

export default function Plot({ plot, selectedAction, onAction }: PlotProps) {
   const isDisabled =
     (selectedAction === 'PLANT'   && plot.occupied) ||
     (selectedAction === 'HARVEST' && !plot.occupied)

   const handleClick = () => {
      if (isDisabled) return;
      onAction(plot.id, selectedAction, plot.version);
   }

   if (!plot.occupied) {
      return (
      <div
        onClick={handleClick}
        style={{
          backgroundColor: '#92400e',
          padding: '8px',
          borderRadius: '6px',
          cursor: selectedAction === 'PLANT' ? 'pointer' : 'default',
          minHeight: '80px',
        }}
      >
        <span style={{ fontWeight: 'bold', fontSize: '12px', color: '#fef3c7' }}>{plot.id}</span>
      </div>
    )
   }

   return (
    <div
      onClick={handleClick}
      style={{
        backgroundColor: getColor(plot.health),
        padding: '8px',
        borderRadius: '6px',
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        opacity: isDisabled ? 0.5 : 1,
        userSelect: 'none',
        minHeight: '80px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '4px',
      }}
    >
      <span style={{ fontWeight: 'bold', fontSize: '12px', alignSelf: 'flex-start' }}>{plot.id}</span>
      <PixelPlant crop={plot.crop} growth={plot.growth} weeds={plot.weeds} />
      <StatBar plot={plot} />
    </div>
  )
}



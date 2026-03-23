import { useState } from 'react'
import { Stage, Layer, Rect } from 'react-konva'
import type { Garden } from '../hooks/useSocket'
import Plot from './Plot'
import { STAT_SPRITES, CROP_SPRITES } from './cropSprites'
import type { SpriteData } from './cropSprites'

type Action = 'WATER' | 'WEED' | 'PLANT' | 'HARVEST'
type CropType = 'CORN' | 'WHEAT' | 'COTTON' | 'STRAWBERRY'

const ACTIONS: { type: Action; spriteKey: string; label: string }[] = [
  { type: 'WATER',   spriteKey: 'hydration', label: 'Water'   },
  { type: 'WEED',    spriteKey: 'weeds',     label: 'Weed'    },
  { type: 'PLANT',   spriteKey: 'growth',    label: 'Plant'   },
  { type: 'HARVEST', spriteKey: 'harvest',   label: 'Harvest' },
]

const CROPS: { type: CropType; label: string }[] = [
  { type: 'CORN',       label: 'Corn'       },
  { type: 'WHEAT',      label: 'Wheat'      },
  { type: 'COTTON',     label: 'Cotton'     },
  { type: 'STRAWBERRY', label: 'Strawberry' },
]

const PLOT_IDS = ['A','B','C','D','E'].flatMap(row =>
  [1,2,3,4,5].map(col => `${row}${col}`)
)

function SpriteIcon({ pixels, scale, size }: { pixels: SpriteData; scale: number; size: number }) {
  return (
    <Stage width={size} height={size} style={{ display: 'block', flexShrink: 0 }}>
      <Layer>
        {pixels.map(([x, y, color], i) => (
          <Rect key={i} x={x * scale} y={y * scale} width={scale} height={scale} fill={color} />
        ))}
      </Layer>
    </Stage>
  )
}

interface GardenProps {
  garden: Garden
  onAction: (plotId: string, type: string, version: number, crop?: string) => void
}

export default function Garden({ garden, onAction }: GardenProps) {
  const [selectedAction, setSelectedAction] = useState<Action>('WATER')
  const [selectedCrop, setSelectedCrop] = useState<CropType>('CORN')

  const handlePlotAction = (plotId: string, type: string, version: number) => {
    onAction(plotId, type, version, type === 'PLANT' ? selectedCrop : undefined)
  }

  return (
    <div>
      {/* Action toolbar */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '8px', flexWrap: 'wrap' }}>
        {ACTIONS.map(({ type, spriteKey, label }) => (
          <button
            key={type}
            onClick={() => setSelectedAction(type)}
            style={{
              padding: '8px 12px',
              cursor: 'pointer',
              fontWeight: selectedAction === type ? 'bold' : 'normal',
              border: selectedAction === type ? '2px solid #000' : '2px solid transparent',
              borderRadius: '4px',
              background: selectedAction === type ? '#e7f5e9' : '#f5f5f5',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <SpriteIcon pixels={STAT_SPRITES[spriteKey] ?? []} scale={3} size={24} />
            <span>{label}</span>
          </button>
        ))}
      </div>

      {/* Crop picker — only visible when PLANT is selected */}
      {selectedAction === 'PLANT' && (
        <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
          {CROPS.map(({ type, label }) => (
            <button
              key={type}
              onClick={() => setSelectedCrop(type)}
              style={{
                padding: '6px 10px',
                cursor: 'pointer',
                fontWeight: selectedCrop === type ? 'bold' : 'normal',
                border: selectedCrop === type ? '2px solid #16a34a' : '2px solid transparent',
                borderRadius: '4px',
                background: selectedCrop === type ? '#dcfce7' : '#f5f5f5',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '13px',
              }}
            >
              <SpriteIcon pixels={CROP_SPRITES[type]?.seedling ?? []} scale={2} size={32} />
              <span>{label}</span>
            </button>
          ))}
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '8px' }}>
        {PLOT_IDS.map(id => {
          const plot = garden.plots[id]
          if (!plot) return null
          return (
            <Plot
              key={id}
              plot={plot}
              selectedAction={selectedAction}
              onAction={handlePlotAction}
            />
          )
        })}
      </div>
    </div>
  )
}
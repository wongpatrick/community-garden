import { useState } from 'react'
import type { Garden } from '../hooks/useSocket'
import Plot from './Plot'

type Action = 'WATER' | 'WEED' | 'PLANT'

const ACTIONS: { type: Action; label: string }[] = [
  { type: 'WATER', label: 'Water' },
  { type: 'WEED',  label: 'Weed'  },
  { type: 'PLANT', label: 'Plant' },
]

const PLOT_IDS = ['A','B','C','D','E'].flatMap(row =>
  [1,2,3,4,5].map(col => `${row}${col}`)
)

interface GardenProps {
  garden: Garden
  onAction: (plotId: string, type: string, version: number) => void
}

export default function Garden({ garden, onAction }: GardenProps) {
  const [selectedAction, setSelectedAction] = useState<Action>('WATER')

  return (
    <div>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        {ACTIONS.map(({ type, label }) => (
          <button
            key={type}
            onClick={() => setSelectedAction(type)}
            style={{
              padding: '8px 16px',
              cursor: 'pointer',
              fontWeight: selectedAction === type ? 'bold' : 'normal',
              border: selectedAction === type ? '2px solid #000' : '2px solid transparent',
              borderRadius: '4px',
            }}
          >
            {label}
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '8px' }}>
        {PLOT_IDS.map(id => {
          const plot = garden.plots[id]
          if (!plot) return null
          return (
            <Plot
              key={id}
              plot={plot}
              selectedAction={selectedAction}
              onAction={onAction}
            />
          )
        })}
      </div>
    </div>
  )
}
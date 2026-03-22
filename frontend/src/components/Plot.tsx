import type { Plot } from "../hooks/useSocket";

interface PlotProps {
   plot: Plot,
   selectedAction: 'WATER' | 'WEED' | 'PLANT'
   onAction: (plotId: string, type: string, version: number) => void
}

function getColor(health: number): string {
   const green = "#4CAF50";
   const yellow = "#FFEB3B";
   const red = "#F44336";
   if (health > 66) return green;
   if (health > 33) return yellow;
   return red;
}

function PixelPlant() {
  return (
    <svg width="24" height="24" viewBox="0 0 8 8" style={{ imageRendering: 'pixelated' }}>
      {/* stem */}
      <rect x="3" y="4" width="1" height="4" fill="#166534" />
      {/* left leaf */}
      <rect x="1" y="3" width="2" height="1" fill="#16a34a" />
      {/* right leaf */}
      <rect x="4" y="2" width="2" height="1" fill="#16a34a" />
      {/* top */}
      <rect x="3" y="1" width="1" height="2" fill="#15803d" />
    </svg>
  )
}

export default function Plot({ plot, selectedAction, onAction }: PlotProps) { 
   const isDisabled = selectedAction === 'PLANT' && plot.occupied;

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
        justifyContent: 'space-between',
      }}
    >
      <span style={{ fontWeight: 'bold', fontSize: '12px' }}>{plot.id}</span>
      <span style={{ fontSize: '11px' }}>{Math.round(plot.health)}</span>
      {plot.occupied && <PixelPlant />}
    </div>
  )
}
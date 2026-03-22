import { useSocket } from './hooks/useSocket'
import Garden from './components/Garden'

export default function App() {
  const { garden, connected, send } = useSocket('ws://localhost:8080/ws')

  const handleAction = (plotId: string, type: string, version: number) => {
    send({ type, plotId, version })
  }

  return (
    <div style={{ padding: '24px' }}>
      <h1>Community Garden</h1>
      <p style={{ color: connected ? 'green' : 'red' }}>
        {connected ? 'Connected' : 'Disconnected'}
      </p>
      {garden ? (
        <Garden garden={garden} onAction={handleAction} />
      ) : (
        <p>Waiting for garden state...</p>
      )}
    </div>
  )
}
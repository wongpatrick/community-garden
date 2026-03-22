import { useEffect, useRef, useState } from "react"

export interface Plot {
   id: string
   hydration: number
   weeds: number
   occupied: boolean
   health: number
   version: number
}

export interface Garden {
   plots: Record<string, Plot>
}

export function useSocket(url: string) {
   const [garden, setGarden] = useState<Garden | null>(null)
   const [connected, setConnected] = useState(false)
   const wsRef = useRef<WebSocket | null>(null)

   useEffect(() => { 
      const ws = new WebSocket(url)
      wsRef.current = ws

      ws.onopen = () => setConnected(true)
      ws.onclose = () => {
         setConnected(false)
         setGarden(null)
      }

      ws.onmessage = (event) => { 
         const msg = JSON.parse(event.data)
         if (msg.type === 'STATE') {
            setGarden(msg.garden)
         } else if (msg.type === 'ERROR') {
            console.error('Error from server:', msg.error)
         }
      }

      return () => ws.close()
   }, [url])

   const send = (message: object) => { 
      if (wsRef.current?.readyState === WebSocket.OPEN) {
         wsRef.current.send(JSON.stringify(message))
      }
   }

   return { garden, connected, send }
}
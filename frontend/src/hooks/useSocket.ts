import { useEffect, useRef, useState } from "react"

export interface Plot {
   id: string
   crop: string
   growth: number
   hydration: number
   weeds: number
   occupied: boolean
   health: number
   version: number
}

export interface Garden {
   plots: Record<string, Plot>
   score: number
}

export function useSocket(url: string) {
   const [garden, setGarden] = useState<Garden | null>(null)
   const [connected, setConnected] = useState(false)
   const [errorMsg, setErrorMsg] = useState<string | null>(null)
   const wsRef = useRef<WebSocket | null>(null)
   const errorTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

   const showError = (msg: string) => {
      setErrorMsg(msg)
      if (errorTimerRef.current) clearTimeout(errorTimerRef.current)
      errorTimerRef.current = setTimeout(() => setErrorMsg(null), 3000)
   }

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
            showError(msg.message)
         }
      }

      return () => ws.close()
   }, [url])

   const send = (message: object) => { 
      if (wsRef.current?.readyState === WebSocket.OPEN) {
         wsRef.current.send(JSON.stringify(message))
      }
   }

   return { garden, connected, errorMsg, send }
}
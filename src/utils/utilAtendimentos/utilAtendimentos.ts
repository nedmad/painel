"use client"
import { useState } from "react"
import { AtendimentoType } from "@/types/atend"

export function useAtendimentos() {

  const [atendimentos, setAtendimentos] = useState<AtendimentoType>()



  async function handleAtendimento() {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/atend`, {
        method: "GET",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json"
        }
      })

      const data = await res.json()
      
      setAtendimentos(data)
    } catch (err) {
      console.log("Falha na requisição json")
    }

  }


  return { atendimentos, handleAtendimento }
}
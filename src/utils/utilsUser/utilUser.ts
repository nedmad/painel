"use client"
import { useState } from "react"
import { UserType } from "@/types/user"

export function useUser() {

  const [users, setUsers] = useState<UserType[]>([])

  async function handleUser() {
   try{
     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user`, {
      cache: "no-store"
    })

    const data = await res.json()

    const userFilter = data.filter(
      (res: UserType) =>
        res.departments.length > 0 &&
        res.id !== "cb49249018" &&
        res.id !== "cb12530567" &&
        res.id !== "cb9383767"
    )

    setUsers(userFilter)
   }catch(err){
    console.log("Erro User")
   }
  }

  return { users, handleUser }
}
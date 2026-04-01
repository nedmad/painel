"use client"

import { useEffect } from "react"
import Card from "./card/card"
import { useUser } from "@/utils/utilsUser/utilUser"
import { useAtendimentos } from "@/utils/utilAtendimentos/utilAtendimentos"
import TotaisAtend from "./totais_atend/totaisAtend"
import { FiLoader } from "react-icons/fi"

export default function Painel() {

    const { handleUser, users } = useUser()
    const { atendimentos, handleAtendimento } = useAtendimentos()

    useEffect(() => {

        handleUser()
        handleAtendimento()

        const interval = setInterval(() => {
            handleUser()
            handleAtendimento()

        }, 6000)

        return () => clearInterval(interval)

    }, [])
    console.log(`lengh -- : ${atendimentos?.totalAtendimentos}`)
    if (!atendimentos || atendimentos?.atendimentos?.length === 0 || !atendimentos?.totalAtendimentos?.totalEspera?.value || !atendimentos?.totalAtendimentos?.totalAtendimentos?.value  || users?.length === 0) {
        return <div className="h-5/6 flex justify-center items-center">
            <div><FiLoader size={55} className="text-blue-600 animate-spin" /></div>
        </div>

    }
    return (
        <>
            <TotaisAtend user={users} atendimentos={atendimentos?.totalAtendimentos} />

            <div className="w-10/12 grid mx-auto sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-y-6 gap-x-5 px-2">

                {users?.map((user) => (
                    <Card
                        key={user.id}

                        user={user}
                        atendimentos={atendimentos?.atendimentos}

                    />
                ))}

            </div>
        </>

    )
}
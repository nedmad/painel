import { AtendimentoType, TotalAtendimentos } from "@/types/atend";
import { UserType } from "@/types/user";
interface AtendiProp {
    user: UserType[]
    atendimentos:TotalAtendimentos
}
console.log(new Date().getDay)
export default function TotaisAtend({atendimentos,user}:AtendiProp){
    const userOn = user.filter((a) => a.isMissing == false)
    const userOff = user.filter((a) => a.isMissing == true)


    return(<section className="w-full mt-13 mb-10">
        <div className="flex justify-center gap-5">
            <div className="border border-gray-300 rounded px-4 py-3 font-bold text-green-500 text-xl"> Online: {userOn.length}</div>
            <div className="border border-gray-300 rounded px-4 py-3 font-bold text-xl text-gray-500"> Offline: {userOff.length}</div>
            <div className="rounded px-2 py-3 bg-blue-500 font-bold text-white text-xl"> Atendimentos simultânios: { atendimentos.totalAtendimentos.value}</div>
            <div className={`rounded px-2 py-3 ${atendimentos.totalEspera.value > 0?"bg-amber-300":"bg-gray-300"} font-bold text-white text-xl`}> Atendimentos na espera: { atendimentos?.totalEspera?.value}</div>


        </div>

    </section>)
}

import { AtendimentosUser } from "@/types/atend";
import { UserType } from "@/types/user";
interface UserProp {
    user: UserType
    atendimentos: AtendimentosUser[]

}

export default function Card({ user, atendimentos, }: UserProp) {
    const atendimentosUser = atendimentos?.filter(atendimento => atendimento.nome == user.name) // filtra usuários pelo nome, para trazer seu respectivos atendimentos
     if (!atendimentosUser) {
        return
    }
    const { atendendo, esperandoAtend, finalizadosAtend } = atendimentosUser[0]
   

    return (<>
        {!user.isMissing && <div className="bg-blue-200 gap-3.5 h-52 rounded-xl pt-3 shadow-xl">

            <div className="full flex px-3  gap-2 relative">
                <div className=" bg-green-500 w-6 h-6 rounded-2xl"></div>
            </div>

            <p className="text-center font-bold mb-3">{user.name}</p>
            <p className="text-center mb-3 w-1/3 px-2 py-1 mx-auto  rounded-xl  font-bold text-white  bg-green-400">{user.isMissing ? "Off" : "Online"}</p>
            {esperandoAtend > 0 && <p className="font-bold text-white bg-amber-300 px-2 py-1 text-center">Pendente: {esperandoAtend}</p>}
            <p className="text-center font-bold mb-2">Atendimentos: {atendendo}</p>
            <p className="text-center font-bold">Finalizados: {finalizadosAtend}</p>


        </div>}


        {user.isMissing && <div className="bg-gray-200  gap-3.5 flex-col h-50 rounded-xl pt-3 shadow-xl">
            <div className="full flex px-3 items-center gap-2">
                <div className=" bg-red-500 w-6 h-6 rounded-2xl"></div>

            </div>
            <p className="text-center font-bold mb-3">{user.name}</p>
            <p className="text-center mb-3 w-1/3 px-2 py-1 mx-auto  rounded-xl  font-bold text-white bg-gray-400">{user.isMissing ? "Off" : "Online"}</p>
            {esperandoAtend > 0 && <p className="font-bold text-white bg-amber-300 px-2 py-1 text-center">Pendente: {esperandoAtend}</p>}
            <p className="text-center font-bold">Atendimentos: {atendendo}</p>
            <p className="text-center font-bold">Finalizados: {finalizadosAtend}</p>


        </div>}

    </>)
}
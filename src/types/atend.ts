

export interface AtendimentoType {
    totalAtendimentos: TotalAtendimentos
    atendimentos: AtendimentosUser[]


}

export interface TotalAtendimentos {
    totalAtendimentos: { value: number }
    totalEspera: { value: number }
}

export interface AtendimentosUser {
    nome: string
    atendendo: string
    esperandoAtend: number
    finalizadosAtend: number
}
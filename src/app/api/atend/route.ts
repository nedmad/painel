import {  AtendimentosUser, AtendimentoType } from "@/types/atend"
import { NextResponse } from "next/server"



export async function GET(request: Request) {
    // const api = "https://portal.chatbotmaker.io/api/v1/chatbots/cb9242051/conversations"

    /*const res = await fetch(api, {
        cache: "no-store",
        method: "POST",
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer 1e8ae7f5921b4013a5e01a94383adcfd:cb86489473'
        },
        body: JSON.stringify(
            { "filter": { "page": 0, "channelIds": [], "type": 2, "search": "", "departmentIds": [], "shopSteps": [], "attendantIds": [], "token": null, "tags": [], "onlyUnread": false, "onlyMyChats": false, "orderType": null, "documentId": "", "startDate": "", "endDate": "" }, "selectedUser": null }

        )
    })*/
    /* const resProx = await fetch(api, {
         cache: "no-store",
         method: "POST",
         headers: {
             'Content-type': 'application/json',
             'Authorization': 'Bearer 1e8ae7f5921b4013a5e01a94383adcfd:cb86489473'
         },
         body: JSON.stringify(
             //  { "filter": { "page": 0, "channelIds": [], "type": 2, "search": "", "departmentIds": [], "shopSteps": [], "attendantIds": [], "token": "[{\"token\":\"+RID:~ApR6AIKFnX3fHpMBAAAADQ==#RT:1#TRC:20#RTD:lazIhWTLT6CMG7lD+gj+Z/t/////////////4PrMzszI0c7L0c7Fqs3NxMvIxMzG0M3MxsnJyM2k/w==#ISV:2#IEO:65567#QCF:8#CID:2#FPC:AghyBAAAABgAAIcGAAAANAAAcgQAAAAYAAAYALuFAoABwEIYJ4AVgDKAeIArgK+DRYDogbUEAAAAGAAAAgD4uzUGAAAANAAAAgDYpT0GAAAANAAAAgDsvEwGAAAANAAAAgDfnmYGAAAANAAAAgCXo3oGAAAANAAAAgAfj4cGAAAANAAABABMmmKB\",\"range\":{\"min\":\"107653BA51CAD1AFE4E94BB285399E2B\",\"max\":\"1932FB98725D900EB4FDBBC64A8B6F4C\"}}]", "tags": [], "onlyUnread": false, "onlyMyChats": false, "orderType": null, "documentId": "", "startDate": "", "endDate": "" }, "selectedUser": null }
             // { "filter": { "page": 0, "channelIds": [], "type": type, "search": "", "departmentIds": [], "shopSteps": [], "attendantIds": [], "token": "[{\"token\":\"+RID:~ApR6AIKFnX0IjRwBAAAABg==#RT:1#TRC:20#RTD:lazIhWTLT6CMG7lD+gj+Z/t/////////////4PrMzszI0c7L0c7Fqs3MxMrOxMnH0MrLzcbKy8ik/w==#ISV:2#IEO:65567#QCF:8#CID:2#FPC:AghyBAAAABgAAIcGAAAANAAAcgQAAAAYAAAWAJqFG4ACgAHAQhgngBWAuICbg4WA6IG1BAAAABgAAAIA+LsMBQAAADQAAAIAio07BQAAADQAAAIASZw9BgAAADQAAAIA7LxMBgAAADQAAAIA355bBgAAADQAAAIA/LBjBgAAADQAAAIAnIlmBgAAADQAAAIAl6N6BgAAADQAAAIAH4+HBgAAADQAAAQATJpigQ==\",\"range\":{\"min\":\"107653BA51CAD1AFE4E94BB285399E2B\",\"max\":\"1932FB98725D900EB4FDBBC64A8B6F4C\"}}]", "tags": [], "onlyUnread": false, "onlyMyChats": false, "orderType": null, "documentId": "", "startDate": "", "endDate": "" }, "selectedUser": "wp568789252986828:5562994525130" }
             { "filter": { "page": 0, "channelIds": [], "type": 2, "search": "", "departmentIds": [], "shopSteps": [], "attendantIds": [], "token": "[{\"token\":\"+RID:~ApR6AIKFnX3bhRwBAAAABg==#RT:1#TRC:20#RTD:lazIhWTLT6CMG7lD+gj+Z/t/////////////4PrMzszI0c7L0c7Fqs3NxMrJxMzO0M7KxsrFzMqk/w==#ISV:2#IEO:65567#QCF:8#CID:2#FPC:AghyBAAAABgAAIcGAAAANAAAcgQAAAAYAAAWAJqFG4ASAEAIACAXgBWAuICbg4WA6IG1BAAAABgAAAIA+Ls7BQAAADQAAAIASZw9BgAAADQAAAIA7LxMBgAAADQAAAIA355aBgAAADQAAAIAipNbBgAAADQAAAIA/LBjBgAAADQAAAIAnIlmBgAAADQAAAIAl6N6BgAAADQAAAIAH4+HBgAAADQAAAIATJo=\",\"range\":{\"min\":\"107653BA51CAD1AFE4E94BB285399E2B\",\"max\":\"1932FB98725D900EB4FDBBC64A8B6F4C\"}}]", "tags": [], "onlyUnread": false, "onlyMyChats": false, "orderType": null, "documentId": "", "startDate": "", "endDate": "" }, "selectedUser": null }
         )
     })*/
    const dataHoje = new Date().toISOString().split("T")[0];
    const resTotaisAtend = await fetch(`https://portal.chatbotmaker.io/api/v1/chatbots/cb9242051/dashboard?start=${dataHoje}&end=${dataHoje}&channel=all&sections=1&renderContacts=true&_=1773072558812`, {
        cache: "no-store",
        headers: {
            'Content-type': 'application/json',
            'Authorization': `${process.env.TOKEN_SURI}`
        }
    })
    //const resJson = await res.json()
    //const resJsonProx = await resProx.json()
    const resJsonAtendi = await resTotaisAtend.json() as string[]
    //atendimentos = atendimentos[4].widgets[0].rows

    const atendimentos = {} as AtendimentoType
    const atendiUser = [] as AtendimentosUser[]
    if (atendimentos) {
        for (let i = 0; i < resJsonAtendi.length; i++) {
            //Array resJsonAtendi[0] é as informações totais de atendimentos
            if (i === 0) {
                //aqui ele traz o total de atendimentos e atendimentos na espera
                atendimentos.totalAtendimentos = {
                    totalAtendimentos: { value: Number(resJsonAtendi[0].widgets[1].value) },
                    totalEspera: { value: Number(resJsonAtendi[0].widgets[0].value) }

                }


            }
            //O array resJsonAtendi[4] é onde fica as inforamaçoes de atendimentos dos usuários
            if (i === 4) {
                //percorre todos os usuários, e traz os atendimentos atuais e em espera de cada deles
                for (let i = 0; i < resJsonAtendi[4].widgets[0].rows.length; i++) {

                    //armazena usuário com seus atendimentos em um array
                    atendiUser.push({
                        nome: resJsonAtendi[4].widgets[0].rows[i][0],
                        esperandoAtend: Number(resJsonAtendi[4].widgets[0].rows[i][2]),
                        atendendo: resJsonAtendi[4].widgets[0].rows[i][3],
                        finalizadosAtend: resJsonAtendi[4].widgets[0].rows[i][4],


                    })

                }
                //adicona os usuário com seus atendimentos
                atendimentos.atendimentos = atendiUser



            }



        }
    }

    return NextResponse.json(atendimentos)
}



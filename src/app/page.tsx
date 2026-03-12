import Card from "@/components/painel/card/card";
import Painel from "@/components/painel/painel";
import TotaisAtend from "@/components/painel/totais_atend/totaisAtend";
import { UserType } from "@/types/user";
import Image from "next/image";


export default async function Home() {



  return (
    <main className="w-full h-screen flex bg-white flex flex-col">
      <Painel/>
    </main>
  );
}

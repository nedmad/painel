import Image from "next/image";


export default function Header() {
    
    return (
        <header className="w-full flex justify-center pt-5">

            <Image src={"/logo promedico.png"} alt="pmedico" width={300} height={200} />

        </header>
    )
}
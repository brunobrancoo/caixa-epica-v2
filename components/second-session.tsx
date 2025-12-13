import Image from "next/image";
export default function SecondSession() {
  return (
    <div className="relative flex w-full h-[1024px] bg-cover bg-center bg-[url(/bg-2.jpg)]">
      <div className="absolute inset-0  bg-gradient-to-b from-transparent via-gray-950 to-black md:bg-gradient-to-r md:from-transparent md:via-black/60 md:to-black" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full p-4 md:flex-row md:items-start md:justify-between md:px-8 lg:px-20 ml-20">
        <div className="flex flex-col items-center text-center md:items-start md:text-left md:mt-20">
          <div className="absolute left-0 top-0 hidden md:block h-full w-0 shadow-[100px_0px_300px_100px_rgba(56,42,21,0.4)] z-10" />

          <div className="flex flex-col items-center md:items-start w-full max-w-md mt-14">
            <p className="text-base text-[#FEB546] font-bebas font-bold tracking-wide md:text-2xl">
              ÚNICO NO MUNDO
            </p>
            <p className="text-3xl text-white font-bebas font-thin md:text-5xl lg:text-7xl mt-2 md:mt-4">
              UM ITEM DE
            </p>
            <p className="text-3xl text-white font-bebas font-thin md:text-5xl lg:text-7xl mt-2 md:mt-4">
              COLEÇÃO ÚNICO
            </p>
            <div className="border-b-[#FFB548] border-b-4 w-16 md:w-full h-[6px] mx-auto my-2 md:mx-0" />
            <p className="text-md text-white">
              Cada mês você recebe uma{" "}
              <span className="font-bold">caixa temática</span>, especialmente
              projetada por{" "}
              <span className="font-bold">profissionais e amantes de RPG.</span>
            </p>
            <br />
            <p className="text-md text-white">
              Cada uma dessas obras primas em forma de caixa contém ilustrações
              que contam a história dos produtos que estarão dentro dela.
            </p>
          </div>
        </div>
      </div>

      <Image
        width={300}
        height={300}
        alt="caixas-empilhadas"
        src={"/caixas-empilhadas.png"}
        className="w-auto h-[800px] mt-10 z-50"
      />
    </div>
  );
}

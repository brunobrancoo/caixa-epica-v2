import Image from "next/image";
export default function ThirdSession() {
  return (
    <div className="relative flex w-full h-[1024px] bg-cover bg-center bg-[url(/bg-3.png)]">
      <div className="absolute inset-0  bg-gradient-to-b from-transparent via-gray-950 to-black md:bg-gradient-to-r md:from-transparent md:via-black/60 md:to-black" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full p-4 md:flex-row md:items-start md:justify-between md:px-8 lg:px-20 ml-20">
        <div className="flex gap-60 items-center text-center md:items-start md:text-left md:mt-20">
          <div className="absolute left-0 top-0 hidden md:block h-full w-0 shadow-[100px_0px_300px_100px_rgba(56,42,21,0.4)] z-10" />

          <Image
            width={300}
            height={300}
            alt="detalhes"
            src={"/details.png"}
            className="w-auto h-[500px] mt-10 z-50"
          />
          <div className="flex flex-col items-center md:items-start w-full max-w-md mt-14">
            <p className="text-base text-[#FEB546] font-bebas font-bold tracking-wide md:text-2xl">
              VOCÊ NUNCA VIU ESSA
            </p>
            <p className="text-3xl text-white font-bebas font-thin md:text-5xl lg:text-7xl mt-2 md:mt-4">
              QUALIDADE
            </p>
            <ul className="relative border-l-2 border-gray-600 ml-4">
              <li className="mb-8 ml-6">
                <span className="absolute -left-[10px] top-[4px] w-3 h-3 bg-white rounded-full"></span>
                <h3 className="text-white font-bold">
                  Precisão de mestre artesão
                </h3>
                <p className="text-gray-400">
                  Infraestrutura de fabricação de miniaturas mais moderna...
                </p>
              </li>

              <li className="mb-8 ml-6">
                <span className="absolute -left-[10px] top-[4px] w-3 h-3 bg-orange-500 rounded-full"></span>
                <h3 className="text-orange-500 font-bold">
                  Detalhes que contam histórias
                </h3>
                <p className="text-gray-400">
                  Cada miniatura é uma obra de arte, com detalhes tão ricos...
                </p>
              </li>

              <li className="ml-6">
                <span className="absolute -left-[10px] top-[4px] w-3 h-3 bg-white rounded-full"></span>
                <h3 className="text-white font-bold">
                  Preparados para batalha
                </h3>
                <p className="text-gray-400">
                  O material utilizado nas miniaturas é de uma formulação
                  especial...
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

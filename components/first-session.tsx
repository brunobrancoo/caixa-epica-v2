import Image from "next/image";
export default function FirstSession() {
  return (
    <div className="relative w-full h-[1024px] bg-cover bg-center bg-[url(/bg-1.jpg)]">
      <div className="absolute inset-0  bg-gradient-to-b from-transparent via-gray-950 to-black md:bg-gradient-to-r md:from-transparent md:via-black/60 md:to-black" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full p-4 md:flex-row md:items-start md:justify-between md:px-8 lg:px-20">
        <div className="flex flex-col items-center text-center md:items-start md:text-left md:mt-20">
          <div className="absolute left-0 top-0 hidden md:block h-full w-0 shadow-[100px_0px_300px_100px_rgba(56,42,21,0.4)] z-10" />

          <div className="flex gap-4">
            <Image
              src={"/logo.png"}
              width={305}
              height={227}
              alt="logo"
              className="w-40 h-auto md:w-[105px] mt-8 md:mt-0"
            />
            <Image
              src={"/text-image.png"}
              width={305}
              height={227}
              alt="logo text"
              className="w-40 h-auto md:w-[200px] mt-8 md:mt-0"
            />
          </div>
          <div className="flex flex-col items-center md:items-start w-full max-w-md mt-14">
            <p className="text-base text-[#FEB546] font-bebas font-bold tracking-wide md:text-2xl">
              CONHEÇA
            </p>
            <p className="text-3xl text-white font-bebas font-thin md:text-5xl lg:text-7xl mt-2 md:mt-4">
              UM NOVO
            </p>
            <p className="text-3xl text-white font-bebas font-thin md:text-5xl lg:text-7xl mt-2 md:mt-4">
              CONCEITO
            </p>
            <p className="text-3xl text-white font-bebas font-thin md:text-5xl lg:text-7xl mt-2 md:mt-4">
              EM RPG
            </p>
            <div className="border-b-[#FFB548] border-b-4 w-16 md:w-full h-[6px] mx-auto mt-2 md:mx-0" />
          </div>
        </div>
      </div>
    </div>
  );
}

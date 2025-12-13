"use server";
import SecondSession from "@/components/second-session";
import FireForge from "../components/fire-forge";
import FirstSession from "@/components/first-session";
import ThirdSession from "@/components/third-session";

export default async function Home() {
  return (
    <main className="flex flex-col min-h-screen text-[0]">
      <FirstSession />

      <SecondSession />

      <ThirdSession />
      {/*       <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center p-4"></footer> */}
      <FireForge />
    </main>
  );
}

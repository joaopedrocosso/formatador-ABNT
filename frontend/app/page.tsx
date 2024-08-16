import MagicButton from "@/components/MagicButton";
import { FileUpload } from "@/components/ui/FileUpload";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-zinc-900 flex gap-2 w-full min-h-screen flex-col items-center justify-center">
      <div className='flex flex-col gap-3'>
        <h1 className='font-semibold text-5xl text-zinc-300 text-center'>Formatador ABNT</h1>
        <p className='font-normal text-normal text-zinc-400 text-center'>Automatizamos a formatação para você focar no conteúdo.</p>
      </div>

      <FileUpload />

      <MagicButton />      
    </main>
  );
}

"use client"

import MagicButton from "@/components/MagicButton";
import { FileUpload } from "@/components/ui/FileUpload";
import { useState } from "react";

export default function Home() {

  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (files: File[]) => {
    if (files.length > 0 && files[0].type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
      setSelectedFile(files[0]);
      setIsFileUploaded(true);
    } else {
      alert("Apenas arquivos .docx são aceitos.");
      setIsFileUploaded(false);
    }
  };
  
  return (
    <main className="bg-zinc-900 flex gap-2 w-full min-h-screen flex-col items-center justify-center">
      <div className='flex flex-col gap-3'>
        <h1 className='font-semibold text-5xl text-zinc-300 text-center'>Formatador ABNT</h1>
        <p className='font-normal text-normal text-zinc-400 text-center'>Automatizamos a formatação para você focar no conteúdo.</p>
      </div>

      {/* Botão para upar o arquivo */}
      <FileUpload onChange={handleFileChange}/>

      {/* Botão Para formatar */}
      <MagicButton isActive={isFileUploaded} />      
    </main>
  );
}

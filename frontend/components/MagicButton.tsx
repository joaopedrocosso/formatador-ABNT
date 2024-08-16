import React from 'react'

const MagicButton = () => {
  return (
    <button className="relative inline-flex h-12 overflow-hidden rounded-md p-[1px]">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#353536_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-zinc-900 px-8 py-1 text-sm font-semibold text-white backdrop-blur-3xl">
            Formatar
        </span>
    </button>
  )
}

export default MagicButton
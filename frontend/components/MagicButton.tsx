"use client"

import React, { useState, useEffect } from 'react';

interface MagicButtonProps {
  isActive: boolean;
}

const MagicButton = ({ isActive }: MagicButtonProps) => {
  return (
    <button
      className={`relative inline-flex h-12 overflow-hidden rounded-md p-[1px] ${
        isActive ? 'cursor-pointer opacity-100' : 'cursor-not-allowed opacity-50'
      }`}
      disabled={!isActive}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#353536_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full items-center justify-center rounded-md bg-zinc-900 px-8 py-1 text-sm font-semibold text-white backdrop-blur-3xl">
        Formatar
      </span>
    </button>
  );
};

export default MagicButton;

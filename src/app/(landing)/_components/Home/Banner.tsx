"use client";

import { X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export const Banner = () => {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="py-3 flex text-center bg-[linear-gradient(to_right,rgb(252,_214,_255,_.7),rgb(41,_216,_255,_.7),rgb(255,_253,_128,_.7),rgb(248,_154,_191,_.7),rgb(252,_214,_255,_.7))]">
      <div className="container">
        <p className="text-black font-bold">
          <span className="hidden sm:inline">⭐ Leave a star on </span>
          <Link
            href="https://github.com/harshit-senpai/Formly"
            target="_blank"
            className="underline underline-offset-4"
          >
            GitHub
          </Link>
        </p>
      </div>
      <button className="sm:mr-12 mr-2" onClick={() => setIsOpen(false)}>
        <X className="h-6 w-6 font-bold text-black" />
      </button>
    </div>
  );
};

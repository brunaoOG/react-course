"use client";

import { useEffect } from "react";

export const Square = () => {
  useEffect(() => {
    console.log("Conectado");

    return () => {
      console.log("Desconectado");
    };
  }, []);

  return (
    <div className="h-40 w-40 bg-blue-200 mt-4 rounded-sm flex justify-center items-center text-black">
      square.
    </div>
  );
};

"use client";

import { createContext, useContext, useState } from "react";

type Remedio = {
  nome: string;
  quantidade: number;
};

type RemedioContextType = {
  remedios: Remedio[];
  adicionarRemedio: (remedio: Remedio) => void;
};

const RemedioContext = createContext<RemedioContextType | null>(null);

export function RemedioProvider({ children }: any) {

  const [remedios, setRemedios] = useState<Remedio[]>([]);

  function adicionarRemedio(remedio: Remedio) {
    setRemedios((prev) => [...prev, remedio]);
  }

  return (
    <RemedioContext.Provider value={{ remedios, adicionarRemedio }}>
      {children}
    </RemedioContext.Provider>
  );
}

export function useRemedios() {
  const context = useContext(RemedioContext);
  if (!context) throw new Error("useRemedios precisa estar dentro do provider");
  return context;
}
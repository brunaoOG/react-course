import { createContext, ReactNode, useState } from "react";

type providerValueObj = {
  count: number;
  setCount: (n: number) => void;
};
export const CountContext = createContext<providerValueObj | null>(null);

type Props = {
  children: ReactNode; //html do react
};

export const CountProvider = ({ children }: Props) => {
  const [count, setCount] = useState(15.213);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children }
    </CountContext.Provider>
  );
};

//O valor inicial é nulo, por isso o alternate na tipagem

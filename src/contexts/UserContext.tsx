import { ReactNode, createContext, useState } from "react";

type UserContextObject = {
  nick: string;
  setNick: (s: string) => void;
};

export const UserContext = createContext<UserContextObject | null>(null);

type Props = {
  children: ReactNode;
};

export const ContextArea = ({ children }: Props) => {
  const [nick, setNick] = useState("NOME DE USUÁRIO NÃO DEFINIDO (!)");

  return (
    <UserContext.Provider value={{ nick, setNick }}>
      {children}
    </UserContext.Provider>
  );
};

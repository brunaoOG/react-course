import { ReactNode } from "react";

type Props = {
  phrase: string;
  author?: string;
};

export const Card = ({ phrase, author }: Props) => {
  const code: ReactNode = (
    <p className="text-sm text-right mr-[-25px]">- {author}</p>
  );

  const elseCode: ReactNode = (
    <p className="text-sm text-right mr-[-25px]">- Autor Desconhecido</p>
  );

  return (
    <div>
      <div className="w-[400px] m-3 bg-black/50 italic font-bold py-2 px-3 rounded-md pr-10">
        <h3>"{phrase}"</h3>
        {author && code}
        {!author && elseCode}
      </div>
    </div>
  );
};



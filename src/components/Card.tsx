import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Card = ({ children }: Props) => {
  return (
    <div>
      <div className="w-fit m-3 bg-black/50 italic font-bold py-2 px-3 rounded-md pr-10">
        {children}
      </div>
      <div className="w-fit m-3 bg-gray-500/50 italic font-bold py-2 px-3 rounded-md pr-10">
        {children}
      </div>
      <div className="w-fit m-3 bg-slate-700/50 italic font-bold py-2 px-3 rounded-md pr-10">
        {children}
      </div>
    </div>
  );
};

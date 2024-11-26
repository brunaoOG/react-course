//padding

import { MouseEventHandler } from "react";

type Props = {
  label: string;
  func?: () => void;
};

export const DefaultButton = ({ label, func }: Props) => {
  if (func) {
    return (
      <button
        className="py-4 px-5 bg-blue-500 text-white 
        font-bold rounded-lg ring-2"
        onClick={func}
      >
        {label}
      </button>
    );
  }
};

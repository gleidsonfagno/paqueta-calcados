import { ReactNode } from "react";

type ButtonProps = {
    children: ReactNode
}

export default function Button({children}: ButtonProps) {
  return (
    <button className="w-[257px] h-[46px] gap-0 left-[1269px] top-[684px] bg-gradient-to-r from-orange-500 to-yellow-300  text-lg font-normal leading-[19.8px] text-center text-white hover:bg-orange-600 hover:bg-none">
      {children}
    </button>
  );
}


import { CirclePlus } from "lucide-react";
import { ButtonHTMLAttributes } from "react";

interface NewRecipeButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function NewRecipeButton(props: NewRecipeButtonProps) {
  return (
    <>
      <button {...props}>
        <CirclePlus />
      </button>
    </>
  );
}

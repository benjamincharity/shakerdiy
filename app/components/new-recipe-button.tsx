import { ButtonHTMLAttributes } from "react";

interface NewRecipeButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function NewRecipeButton(props: NewRecipeButtonProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const attrs = useLongPress(
    () => {
      setIsOpen(true);
    },
    {
      onStart: (event) => console.log("Press started"),
      onFinish: (event) => console.log("Press Finished"),
      onCancel: (event) => console.log("Press cancelled"),
      threshold: 500,
    }
  );

  return (
    <>
      <button {...attrs}>Press Me</button>
      {isOpen && (
        <dialog>
          <button onClick={() => setIsOpen(false)}>{closeIcon}</button>
          <h2>Modal</h2>
          <p>This is a modal triggered by a long press.</p>
        </dialog>
      )}
    </>
  );
}

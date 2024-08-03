import { motion } from "framer-motion";
import { RecipeShape } from "~/types";
import { clsx } from "clsx";

export function Recipe({
  title,
  directions,
  ingredients,
  background,
  onToggle,
  id,
  isSelected,
  index,
}: RecipeShape & {
  onToggle: (id: number) => void;
  isSelected?: boolean;
  index: number;
}) {
  const easing = [0.42, 0, 0.58, 1];
  return (
    <motion.div
      className="absolute w-full cursor-pointer recipe z-[1] bg-oat shadow-xl rounded-lg px-4 py-2 mb-4"
      style={{
        top: `${index * 40}px`,
        height: isSelected ? "100%" : "auto",
        zIndex: isSelected ? 2 : 1,
      }}
      layout
      initial={false}
      animate={isSelected ? { top: 0, height: "100%" } : { height: "auto" }}
      exit={{
        top: `${index * 40}px`,
        height: "auto",
      }}
      transition={{
        duration: 0.2,
        ease: easing,
      }}
      onClick={() => onToggle(id)}
    >
      <div
        className={"absolute inset-0 opacity-50 rounded-lg z-[1]"}
        style={{ backgroundColor: background }}
      />
      <div className={"relative z-[2]"}>
        <h2 className="text-xl text-center font-cardo font-bold mb-2">
          {title}
        </h2>
        <ul className={"grid grid-cols-1 gap-1"}>
          {ingredients.map((ingredient) => {
            return (
              <li key={ingredient.name}>
                {ingredient.quantity} {ingredient.measurement} {ingredient.name}
              </li>
            );
          })}
        </ul>
        <p>{directions}</p>
      </div>
    </motion.div>
  );
}

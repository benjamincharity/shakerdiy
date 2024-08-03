import { motion } from "framer-motion";
import { RecipeShape } from "~/types";

export function Recipe({
  title,
  directions,
  ingredients,
  background,
  onClick,
}: RecipeShape & { onClick?: () => void }) {
  return (
    <motion.div
      className={`recipe z-[1] bg-oat relative shadow-xl rounded-lg px-4 py-2 mb-4`}
      onClick={onClick}
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

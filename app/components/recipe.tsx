import { motion, PanInfo } from "framer-motion";
import { RecipeShape } from "~/types";
import { clsx } from "clsx";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { getReadableColor } from "@exhuma/readable-color";
import { Checkbox } from "~/components/ui/checkbox";

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
  const [startY, setStartY] = useState<number | null>(null);
  const readableColor = getReadableColor(background);

  const handleDragStart = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    setStartY(info.point.y);
  };

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (startY !== null && info.point.y - startY > 30) {
      onToggle(id);
    }
  };
  const cardBase = "absolute inset-0 rounded-t-2xl z-[1]";
  const topOffset = index * 54;

  return (
    <motion.div
      animate={isSelected ? { top: 0, height: "100%" } : { height: "auto" }}
      className={clsx(
        cardBase,
        "w-full min-h-[300px] flex flex-col cursor-pointer recipe bg-oat px-4 py-2 mb-4"
      )}
      drag={isSelected ? "y" : false}
      dragConstraints={{ top: 0, bottom: 0 }}
      exit={{
        top: `${topOffset}px`,
        height: "200px",
      }}
      initial={{ height: "200px", top: `${topOffset}px` }}
      layout
      onClick={() => !isSelected && onToggle(id)}
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
      style={{
        zIndex: isSelected ? 20 : 1,
        color: readableColor,
        bottom: 0,
        height: isSelected ? "100%" : "200px",
      }}
      transition={{
        duration: 0.2,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <div className={"relative flex-1 z-[2]"}>
        <h2 className="text-xl text-center font-cardo font-bold my-2">
          {title}
        </h2>
        {isSelected && (
          <ul className={"grid grid-cols-1 gap-1"}>
            {ingredients.map((ingredient) => {
              const ingredientId = `${ingredient.name}-${id}`;
              return (
                <li key={ingredientId}>
                  <label
                    className={"flex items-center gap-2"}
                    htmlFor={ingredientId}
                  >
                    <Checkbox id={ingredientId} />
                    <div className={"flex"}>
                      <div>{ingredient.quantity}</div>
                      <div>{ingredient.measurement}</div>
                    </div>
                    <div>{ingredient.name}</div>
                  </label>
                </li>
              );
            })}
          </ul>
        )}
        {isSelected && <p>{directions}</p>}
      </div>

      {isSelected && (
        <div className="flex items-center justify-between relative z-[2]">
          <button onClick={() => onToggle(id)}>
            <ChevronDown />
          </button>

          <button>Edit</button>
        </div>
      )}

      <div
        className={clsx(cardBase, "opacity-50 drop-shadow-recipe")}
        style={{ backgroundColor: background }}
      />
    </motion.div>
  );
}

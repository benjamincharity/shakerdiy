import { motion, PanInfo } from "framer-motion";
import { RecipeShape } from "~/types";
import { clsx } from "clsx";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { getReadableColor } from "@exhuma/readable-color";

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

  return (
    <motion.div
      animate={isSelected ? { top: 0, height: "100%" } : { height: "auto" }}
      className="absolute w-full flex flex-col cursor-pointer recipe z-[1] bg-oat drop-shadow-recipe rounded-lg px-4 py-2 mb-4"
      drag="y"
      dragConstraints={{ top: 0, bottom: 0 }}
      exit={{
        top: `${index * 40}px`,
        height: "auto",
      }}
      initial={{ height: "auto", top: `${index * 40}px` }}
      layout
      onClick={() => !isSelected && onToggle(id)}
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
      style={{
        zIndex: isSelected ? 2 : 1,
        color: readableColor,
        bottom: 0,
        height: "100%",
      }}
      transition={{
        duration: 0.2,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <div
        className={"absolute inset-0 opacity-50 rounded-lg z-[1]"}
        style={{ backgroundColor: background }}
      />
      <div className={"relative flex-1 z-[2]"}>
        <h2 className="text-xl text-center font-cardo font-bold mb-2">
          {title}
        </h2>
        <ul className={"grid grid-cols-1 gap-1"}>
          {ingredients.map((ingredient) => {
            return (
              <li key={ingredient.name + id}>
                {ingredient.quantity} {ingredient.measurement} {ingredient.name}
              </li>
            );
          })}
        </ul>
        {isSelected && <p>{directions}</p>}
      </div>

      {isSelected && (
        <div className="flex items-center justify-between relative z-[1]">
          <button onClick={() => onToggle(id)}>
            <ChevronDown />
          </button>

          <button>Edit</button>
        </div>
      )}
    </motion.div>
  );
}

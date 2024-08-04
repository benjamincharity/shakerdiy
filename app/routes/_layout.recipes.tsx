import { json, LoaderFunction } from "@remix-run/router";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import { RecipeShape } from "~/types";
import { Recipe } from "~/components/recipe";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { drinkRecipes } from "~/data/drinks";
import { Menu } from "lucide-react";
import { clsx } from "clsx";
import { HamburgerButton } from "~/components/hamburger";
import { NewRecipeButton } from "~/components/ui/new-recipe-button";

interface LoaderData {
  recipes: RecipeShape[];
}

export const loader: LoaderFunction = async () => {
  return json({ recipes: drinkRecipes });
};

const footerHeight = "42px";

export default function Recipes() {
  const { recipes } = useLoaderData<LoaderData>();
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedRecipeIdParam = searchParams.get("selectedRecipeId");
  const [selectedRecipeId, setSelectedRecipeId] = useState<number | null>(
    selectedRecipeIdParam ? parseInt(selectedRecipeIdParam, 10) : null
  );
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleRecipe = useCallback(
    (id: number) => {
      setSelectedRecipeId((prev) => {
        const newId = prev === id ? null : id;
        setTimeout(() => {
          if (newId) {
            setSearchParams({ selectedRecipeId: newId.toString() });
          } else {
            searchParams.delete("selectedRecipeId");
            setSearchParams(searchParams);
          }
        }, 0);
        return newId;
      });
    },
    [setSearchParams, searchParams]
  );

  useEffect(() => {
    if (selectedRecipeIdParam) {
      setSelectedRecipeId(parseInt(selectedRecipeIdParam, 10));
    }
  }, [selectedRecipeIdParam]);

  return (
    <AnimatePresence>
      <div className="recipes overflow-auto flex flex-1 flex-col items-center outline outline-2 outline-emerald-800 z-[1]">
        <div className="relative w-full flex-1 overflow-y-auto">
          {recipes.map((recipe, index) => (
            <Recipe
              key={recipe.id}
              index={index}
              isSelected={selectedRecipeId === recipe.id}
              {...recipe}
              onToggle={toggleRecipe}
            />
          ))}
        </div>

        <motion.div
          animate={
            menuOpen ? { top: 0, height: "100%" } : { height: footerHeight }
          }
          className={clsx(
            `absolute px-2 text-white left-0 right-0 bg-[#71907b] z-10 drop-shadow-recipe justify-between flex`,
            {
              "bottom-0": !selectedRecipeId,
              "bottom-[-100px]": !!selectedRecipeId,
            }
          )}
          style={{ height: footerHeight }}
          transition={{
            duration: 0.2,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <motion.div
            animate={
              menuOpen
                ? { opacity: 1, height: "auto" }
                : { opacity: 0, height: 0 }
            }
            className={"flex-1 text-center pt-4"}
            initial={{ opacity: 0, height: 0 }}
          >
            Content
          </motion.div>
          <div
            className={clsx(
              `absolute flex pr-2 text-black justify-between h-11 items-center bottom-0 left-0 right-0`
            )}
          >
            <HamburgerButton
              className={"ml-[-6px]"}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <Menu />
            </HamburgerButton>

            <NewRecipeButton />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

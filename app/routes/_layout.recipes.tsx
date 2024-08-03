import { RecipeShape } from "~/types";
import { json, LoaderFunction } from "@remix-run/router";
import { useLoaderData } from "@remix-run/react";
import { Recipe } from "~/components/recipe";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { drinkRecipes } from "~/data/drinks";

interface LoaderData {
  recipes: RecipeShape[];
}

export const loader: LoaderFunction = async ({ request }) => {
  return json({ recipes: drinkRecipes });
};

export default function Recipes(recipe: RecipeShape) {
  const { recipes } = useLoaderData<LoaderData>();
  const [selectedRecipeId, setSelectedRecipeId] = useState<number | null>(null);
  console.log("selectedRecipe", selectedRecipeId);

  const toggleRecipe = (id: number) => {
    console.log("in select", recipe);
    setSelectedRecipeId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="recipes flex flex-1 flex-col items-center outline outline-2 outline-emerald-800">
      {/*<h1 className="text-2xl font-bold mb-4">Recipes</h1>*/}
      <div className="relative w-full flex-1">
        <AnimatePresence>
          {recipes.map((recipe, index) => (
            <Recipe
              key={recipe.id}
              index={index}
              isSelected={selectedRecipeId === recipe.id}
              {...recipe}
              onToggle={toggleRecipe}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

import { RecipeShape } from "~/types";
import { faker } from "@faker-js/faker";
import { json, LoaderFunction } from "@remix-run/router";
import { useLoaderData } from "@remix-run/react";
import { Recipe } from "~/components/recipe";
import { COLORS } from "~/data/colors";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

// Function to generate a random recipe
function generateRecipe(id: number) {
  return {
    background: COLORS[Math.floor(Math.random() * COLORS.length)],
    directions:
      "Mix all ingredients in a shaker and shake well. Serve in a glass with ice.",
    id: id,
    ingredients: [
      {
        name: faker.commerce.product(),
        quantity: `${faker.number.int({ min: 1, max: 10 })}/${faker.number.int({
          min: 1,
          max: 10,
        })}`,
        measurement: faker.helpers.arrayElement(["oz", "ml", "tsp", "tbsp"]),
      },
      {
        name: faker.commerce.product(),
        quantity: `${faker.number.int({ min: 1, max: 10 })}/${faker.number.int({
          min: 1,
          max: 10,
        })}`,
        measurement: faker.helpers.arrayElement(["oz", "ml", "tsp", "tbsp"]),
      },
    ],
    presentation: {
      ice: faker.helpers.arrayElement(["block", "crushed", "cubed"]),
    },
    quantity: faker.number.int({ min: 1, max: 10 }),
    title: faker.lorem.words(),
  };
}

// Generate a list of recipes
const RECIPES = Array.from({ length: 10 }, (_, id) => generateRecipe(id + 1));

interface LoaderData {
  recipes: RecipeShape[];
}

export const loader: LoaderFunction = async ({ request }) => {
  return json({ recipes: RECIPES });
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
    <div className="recipes h-[100vh] flex flex-col items-center outline outline-2 outline-emerald-800">
      <h1 className="text-2xl font-bold mb-4">Recipes</h1>
      <div className="relative w-[300px] flex-1">
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

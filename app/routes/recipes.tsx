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
  const [selectedRecipe, setSelectedRecipe] = useState<RecipeShape | null>(
    null
  );
  console.log("selectedRecipe", selectedRecipe);

  const handleSelectRecipe = (recipe: RecipeShape) => {
    console.log("in select", recipe);
    setSelectedRecipe(recipe);
  };

  const handleDeselectRecipe = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className="recipes h-[100vh] flex flex-col items-center outline outline-2 outline-emerald-800">
      <h1 className="text-2xl font-bold mb-4">Recipes</h1>
      <div className="relative w-[300px] flex-1 border-2 border-amber-700">
        <AnimatePresence>
          {recipes.map((recipe) => (
            <motion.div
              key={recipe.id}
              className="absolute w-full cursor-pointer"
              style={{
                top: selectedRecipe ? 0 : `${recipes.indexOf(recipe) * 40}px`,
              }} // Adjust the spacing as needed
              layout
              initial={{ top: `${recipes.indexOf(recipe) * 40}px` }}
              animate={
                selectedRecipe && selectedRecipe.id === recipe.id
                  ? { top: 0, height: "100%" }
                  : { height: "auto" }
              }
              exit={{
                top: `${recipes.indexOf(recipe) * 40}px`,
                height: "auto",
              }}
              transition={{ duration: 0.5 }}
              onClick={() => handleSelectRecipe(recipe)}
            >
              <Recipe {...recipe} onClick={handleDeselectRecipe} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

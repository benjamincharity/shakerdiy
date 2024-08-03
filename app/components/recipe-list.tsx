import { RecipeShape } from "~/types";
import { Recipe } from "~/components/recipe";

interface RecipeListProps {
  recipes: RecipeShape[];
}

export function RecipeList({ recipes }: RecipeListProps) {
  const r: RecipeShape[] = recipes.map((r) => r as RecipeShape);
  console.log("recipes", recipes);
  return (
    <div className={"recipe-list"}>
      <h1>Recipe List</h1>

      {r.map((recipe) => {
        return <Recipe key={recipe.id} {...recipe} />;
      })}
    </div>
  );
}

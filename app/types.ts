export interface Ingredient {
  measurement: string;
  name: string;
  quantity: string;
}

export interface Presentation {
  ice: string;
}

export interface RecipeShape {
  background: string;
  credit?: string;
  directions?: string;
  id: number;
  ingredients: Ingredient[];
  presentation: Presentation;
  quantity: number;
  title: string;
}

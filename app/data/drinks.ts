import { RecipeShape } from "~/types";
import { COLORS } from "~/data/colors";

export const drinkRecipes: RecipeShape[] = [
  {
    background: COLORS[Math.floor(Math.random() * COLORS.length)],
    id: 1,
    ingredients: [
      { name: "Bourbon", quantity: "2", measurement: "oz" },
      { name: "Sugar Cube", quantity: "1", measurement: "unit" },
      { name: "Angostura Bitters", quantity: "3", measurement: "dashes" },
      { name: "Water", quantity: "1", measurement: "tsp" },
    ],
    presentation: {
      color: "amber",
      garnish: "Orange Twist",
      ice: "cubed",
      vessel: "Old Fashioned Glass",
    },
    quantity: 1,
    title: "Old Fashioned",
    directions:
      "Muddle the sugar cube and bitters with water in a glass. Add bourbon and ice, stir well.",
  },
  {
    background: COLORS[Math.floor(Math.random() * COLORS.length)],
    id: 2,
    ingredients: [
      { name: "Gin", quantity: "2", measurement: "oz" },
      { name: "Lime Juice", quantity: "0.75", measurement: "oz" },
      { name: "Simple Syrup", quantity: "0.75", measurement: "oz" },
    ],
    presentation: {
      color: "light green",
      garnish: "Lime Wheel",
      ice: "none",
      vessel: "Cocktail Glass",
    },
    quantity: 1,
    title: "Gimlet",
    directions:
      "Shake all ingredients with ice and strain into a chilled glass.",
  },
  {
    background: COLORS[Math.floor(Math.random() * COLORS.length)],
    id: 3,
    ingredients: [
      { name: "Prosecco", quantity: "3", measurement: "oz" },
      { name: "Aperol", quantity: "2", measurement: "oz" },
      { name: "Soda Water", quantity: "1", measurement: "oz" },
    ],
    presentation: {
      color: "orange",
      garnish: "Orange Slice",
      ice: "cubed",
      vessel: "Wine Glass",
    },
    quantity: 1,
    title: "Aperol Spritz",
    directions:
      "Combine all ingredients in a glass filled with ice. Stir gently.",
  },
  {
    background: COLORS[Math.floor(Math.random() * COLORS.length)],
    id: 4,
    ingredients: [
      { name: "Vodka", quantity: "2", measurement: "oz" },
      { name: "Kahlua", quantity: "1", measurement: "oz" },
      { name: "Heavy Cream", quantity: "1", measurement: "oz" },
    ],
    presentation: {
      color: "light brown",
      garnish: "None",
      ice: "cubed",
      vessel: "Old Fashioned Glass",
    },
    quantity: 1,
    title: "White Russian",
    directions:
      "Pour vodka and Kahlua over ice in a glass. Top with cream and stir slowly.",
  },
  {
    background: COLORS[Math.floor(Math.random() * COLORS.length)],
    id: 5,
    ingredients: [
      { name: "White Rum", quantity: "2", measurement: "oz" },
      { name: "Lime Juice", quantity: "1", measurement: "oz" },
      { name: "Simple Syrup", quantity: "0.5", measurement: "oz" },
    ],
    presentation: {
      color: "clear",
      garnish: "Lime Wedge",
      ice: "none",
      vessel: "Cocktail Glass",
    },
    quantity: 1,
    title: "Daiquiri",
    directions:
      "Shake all ingredients with ice and strain into a chilled glass.",
  },
  {
    background: COLORS[Math.floor(Math.random() * COLORS.length)],
    id: 6,
    ingredients: [
      { name: "Gin", quantity: "2", measurement: "oz" },
      { name: "Sweet Vermouth", quantity: "1", measurement: "oz" },
      { name: "Campari", quantity: "1", measurement: "oz" },
    ],
    presentation: {
      color: "red",
      garnish: "Orange Twist",
      ice: "cubed",
      vessel: "Old Fashioned Glass",
    },
    quantity: 1,
    title: "Negroni",
    directions:
      "Stir all ingredients with ice in a glass. Garnish with an orange twist.",
  },
  {
    background: COLORS[Math.floor(Math.random() * COLORS.length)],
    id: 7,
    ingredients: [
      { name: "Tequila", quantity: "2", measurement: "oz" },
      { name: "Lime Juice", quantity: "1", measurement: "oz" },
      { name: "Triple Sec", quantity: "0.5", measurement: "oz" },
    ],
    presentation: {
      color: "clear",
      garnish: "Lime Wheel",
      ice: "none",
      vessel: "Cocktail Glass",
    },
    quantity: 1,
    title: "Margarita",
    directions:
      "Shake all ingredients with ice and strain into a chilled glass.",
  },
  {
    background: COLORS[Math.floor(Math.random() * COLORS.length)],
    id: 8,
    ingredients: [
      { name: "Bourbon", quantity: "2", measurement: "oz" },
      { name: "Lemon Juice", quantity: "1", measurement: "oz" },
      { name: "Simple Syrup", quantity: "0.5", measurement: "oz" },
    ],
    presentation: {
      color: "yellow",
      garnish: "Cherry",
      ice: "cubed",
      vessel: "Old Fashioned Glass",
    },
    quantity: 1,
    title: "Whiskey Sour",
    directions:
      "Shake all ingredients with ice and strain into a glass filled with ice.",
  },
  {
    background: COLORS[Math.floor(Math.random() * COLORS.length)],
    id: 9,
    ingredients: [
      { name: "Gin", quantity: "1.5", measurement: "oz" },
      { name: "Lemon Juice", quantity: "1", measurement: "oz" },
      { name: "Simple Syrup", quantity: "0.5", measurement: "oz" },
      { name: "Soda Water", quantity: "top", measurement: "" },
    ],
    presentation: {
      color: "clear",
      garnish: "Lemon Slice",
      ice: "cubed",
      vessel: "Highball Glass",
    },
    quantity: 1,
    title: "Tom Collins",
    directions:
      "Shake gin, lemon juice, and syrup with ice. Strain into a glass with ice and top with soda water.",
  },
  {
    background: COLORS[Math.floor(Math.random() * COLORS.length)],
    id: 10,
    ingredients: [
      { name: "White Rum", quantity: "1.5", measurement: "oz" },
      { name: "Coconut Cream", quantity: "2", measurement: "oz" },
      { name: "Pineapple Juice", quantity: "3", measurement: "oz" },
    ],
    presentation: {
      color: "white",
      garnish: "Pineapple Slice and Cherry",
      ice: "crushed",
      vessel: "Hurricane Glass",
    },
    quantity: 1,
    title: "Piña Colada",
    directions:
      "Blend all ingredients with ice until smooth. Serve in a glass.",
  },
];

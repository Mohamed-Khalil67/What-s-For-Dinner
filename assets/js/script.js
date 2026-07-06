const recipes = [
  {
    id: 1,
    name: "Creamy Spaghetti Carbonara",
    description: "A classic Italian pasta dish with eggs, cheese, and pancetta",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/c987e47793-062e728ad4ccc343589c.png",
    category: "Italian",
    difficulty: "Easy",
    prepTime: "15 min",
    cookTime: "20 min",
    servings: 4,
    rating: {
      average: 4.8,
      quantity: 234,
    },
    ingredients: [
      { amount: "400g", item: "spaghetti" },
      { amount: "200g", item: "pancetta or guanciale, diced" },
      { amount: "4", item: "large eggs" },
      { amount: "100g", item: "Pecorino Romano, finely grated" },
      { amount: "50g", item: "Parmesan, finely grated" },
      { amount: "2 cloves", item: "garlic" },
      { amount: "to taste", item: "freshly ground black pepper" },
      { amount: "to taste", item: "salt" },
    ],
    instructions: [
      {
        step: 1,
        title: "Boil the pasta",
        description: "Bring a large pot of salted water to a boil. Cook spaghetti according to package instructions until al dente. Reserve 1 cup of pasta water before draining.",
      },
      {
        step: 2,
        title: "Cook the pancetta",
        description: "In a large skillet over medium heat, cook the pancetta until crispy, about 5–7 minutes. Add garlic and cook for 1 more minute, then remove from heat.",
      },
      {
        step: 3,
        title: "Make the egg mixture",
        description: "In a bowl, whisk together eggs, Pecorino Romano, and Parmesan. Season generously with black pepper.",
      },
      {
        step: 4,
        title: "Combine pasta and pancetta",
        description: "Add the drained hot pasta to the skillet with pancetta. Toss well off the heat to coat the pasta in the rendered fat.",
      },
      {
        step: 5,
        title: "Add the egg sauce",
        description: "Pour the egg mixture over the pasta, tossing constantly and adding reserved pasta water a little at a time until you get a creamy, glossy sauce. Work quickly so the eggs don't scramble.",
      },
      {
        step: 6,
        title: "Serve immediately",
        description: "Plate the carbonara and top with extra grated Pecorino and a crack of black pepper. Serve right away.",
      },
    ],
    nutrition: [
      { label: "Calories", value: "620", unit: "kcal" },
      { label: "Protein", value: "28", unit: "g" },
      { label: "Carbohydrates", value: "72", unit: "g" },
      { label: "Fat", value: "24", unit: "g" },
      { label: "Saturated Fat", value: "10", unit: "g" },
      { label: "Fiber", value: "3", unit: "g" },
      { label: "Sodium", value: "780", unit: "mg" },
      { label: "Sugar", value: "2", unit: "g" },
    ],
    tips: [
      {
        icon: "fa-solid fa-temperature-low",
        title: "Off the heat is key",
        description: "Always remove the pan from heat before adding the egg mixture. Residual heat cooks the eggs gently — direct heat will scramble them.",
      },
      {
        icon: "fa-solid fa-droplet",
        title: "Pasta water is your friend",
        description: "The starchy pasta water is what makes the sauce silky. Add it gradually until you reach the perfect creamy consistency.",
      },
      {
        icon: "fa-solid fa-cheese",
        title: "Use the right cheese",
        description: "Authentic carbonara uses Pecorino Romano. Parmesan alone is milder — a 2:1 Pecorino to Parmesan ratio gives the best flavor.",
      },
      {
        icon: "fa-solid fa-pepper-hot",
        title: "Black pepper matters",
        description: "Use freshly cracked black pepper, not pre-ground. It's not just garnish — it's a core flavor of the dish.",
      },
    ],
  },
];
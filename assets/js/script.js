function computeIsLongPrep(prepTimeMinutes, cookTimeMinutes) {
  return prepTimeMinutes + cookTimeMinutes > 45;
}

const recipes = [
  {
    id: 1,
    name: 'Creamy Spaghetti Carbonara',
    description: 'A classic Italian pasta dish with eggs, cheese, and pancetta',
    image:
      'https://storage.googleapis.com/uxpilot-auth.appspot.com/c987e47793-062e728ad4ccc343589c.png',
    category: 'Italian',
    difficulty: 'Easy',
    prepTimeMinutes: 15,
    cookTimeMinutes: 20,
    prepTime: '15 min',
    cookTime: '20 min',
    servings: 4,
    rating: {
      average: 4.8,
      quantity: 234,
    },
    ingredients: [
      { amount: '400g', item: 'spaghetti' },
      { amount: '200g', item: 'pancetta or guanciale, diced' },
      { amount: '4', item: 'large eggs' },
      { amount: '100g', item: 'Pecorino Romano, finely grated' },
      { amount: '50g', item: 'Parmesan, finely grated' },
      { amount: '2 cloves', item: 'garlic' },
      { amount: 'to taste', item: 'freshly ground black pepper' },
      { amount: 'to taste', item: 'salt' },
    ],
    instructions: [
      {
        step: 1,
        title: 'Boil the pasta',
        description:
          'Bring a large pot of salted water to a boil. Cook spaghetti according to package instructions until al dente. Reserve 1 cup of pasta water before draining.',
      },
      {
        step: 2,
        title: 'Cook the pancetta',
        description:
          'In a large skillet over medium heat, cook the pancetta until crispy, about 5–7 minutes. Add garlic and cook for 1 more minute, then remove from heat.',
      },
      {
        step: 3,
        title: 'Make the egg mixture',
        description:
          'In a bowl, whisk together eggs, Pecorino Romano, and Parmesan. Season generously with black pepper.',
      },
      {
        step: 4,
        title: 'Combine pasta and pancetta',
        description:
          'Add the drained hot pasta to the skillet with pancetta. Toss well off the heat to coat the pasta in the rendered fat.',
      },
      {
        step: 5,
        title: 'Add the egg sauce',
        description:
          "Pour the egg mixture over the pasta, tossing constantly and adding reserved pasta water a little at a time until you get a creamy, glossy sauce. Work quickly so the eggs don't scramble.",
      },
      {
        step: 6,
        title: 'Serve immediately',
        description:
          'Plate the carbonara and top with extra grated Pecorino and a crack of black pepper. Serve right away.',
      },
    ],
    nutrition: [
      { label: 'Calories', value: '620', unit: 'kcal' },
      { label: 'Protein', value: '28', unit: 'g' },
      { label: 'Carbohydrates', value: '72', unit: 'g' },
      { label: 'Fat', value: '24', unit: 'g' },
      { label: 'Saturated Fat', value: '10', unit: 'g' },
      { label: 'Fiber', value: '3', unit: 'g' },
      { label: 'Sodium', value: '780', unit: 'mg' },
      { label: 'Sugar', value: '2', unit: 'g' },
    ],
    tips: [
      {
        icon: 'fa-solid fa-temperature-low',
        title: 'Off the heat is key',
        description:
          'Always remove the pan from heat before adding the egg mixture. Residual heat cooks the eggs gently — direct heat will scramble them.',
      },
      {
        icon: 'fa-solid fa-droplet',
        title: 'Pasta water is your friend',
        description:
          'The starchy pasta water is what makes the sauce silky. Add it gradually until you reach the perfect creamy consistency.',
      },
      {
        icon: 'fa-solid fa-cheese',
        title: 'Use the right cheese',
        description:
          'Authentic carbonara uses Pecorino Romano. Parmesan alone is milder — a 2:1 Pecorino to Parmesan ratio gives the best flavor.',
      },
      {
        icon: 'fa-solid fa-pepper-hot',
        title: 'Black pepper matters',
        description:
          "Use freshly cracked black pepper, not pre-ground. It's not just garnish — it's a core flavor of the dish.",
      },
    ],
  },
  {
    id: 2,
    name: 'Thai Green Curry',
    description:
      'A fragrant and spicy Thai curry with coconut milk, vegetables, and fresh herbs',
    image: './assets/img/recipes/recipe-2-thai-curry.jpg',
    category: 'Thai',
    difficulty: 'Medium',
    prepTimeMinutes: 20,
    cookTimeMinutes: 30,
    prepTime: '20 min',
    cookTime: '30 min',
    servings: 4,
    rating: {
      average: 4.6,
      quantity: 178,
    },
    ingredients: [
      { amount: '3 tbsp', item: 'green curry paste' },
      { amount: '400ml', item: 'coconut milk' },
      { amount: '300g', item: 'chicken breast, sliced' },
      { amount: '1', item: 'eggplant, cubed' },
      { amount: '1', item: 'red bell pepper, sliced' },
      { amount: '2 tbsp', item: 'fish sauce' },
      { amount: '1 tbsp', item: 'palm sugar' },
      { amount: 'handful', item: 'Thai basil leaves' },
      { amount: '2', item: 'kaffir lime leaves' },
    ],
    instructions: [
      {
        step: 1,
        title: 'Fry the curry paste',
        description:
          'Heat a splash of coconut cream in a wok over medium heat. Add the green curry paste and fry until fragrant, about 2 minutes.',
      },
      {
        step: 2,
        title: 'Add the chicken',
        description:
          'Add the sliced chicken and cook until it starts to turn opaque, stirring to coat in the paste.',
      },
      {
        step: 3,
        title: 'Pour in coconut milk',
        description:
          'Add the remaining coconut milk, fish sauce, and palm sugar. Bring to a gentle simmer.',
      },
      {
        step: 4,
        title: 'Add vegetables',
        description:
          'Add the eggplant and bell pepper. Simmer for 15–20 minutes until the vegetables are tender and the chicken is cooked through.',
      },
      {
        step: 5,
        title: 'Finish and serve',
        description:
          'Stir in the Thai basil and kaffir lime leaves. Serve hot over steamed jasmine rice.',
      },
    ],
    nutrition: [
      { label: 'Calories', value: '540', unit: 'kcal' },
      { label: 'Protein', value: '32', unit: 'g' },
      { label: 'Carbohydrates', value: '18', unit: 'g' },
      { label: 'Fat', value: '38', unit: 'g' },
      { label: 'Saturated Fat', value: '28', unit: 'g' },
      { label: 'Fiber', value: '4', unit: 'g' },
      { label: 'Sodium', value: '890', unit: 'mg' },
      { label: 'Sugar', value: '8', unit: 'g' },
    ],
    tips: [
      {
        icon: 'fa-solid fa-pepper-hot',
        title: 'Adjust the heat',
        description:
          'Curry paste brands vary in spiciness — start with less and add more to taste.',
      },
      {
        icon: 'fa-solid fa-leaf',
        title: 'Fresh herbs matter',
        description:
          "Thai basil and kaffir lime leaves give the curry its signature aroma — don't substitute with regular basil if you can help it.",
      },
      {
        icon: 'fa-solid fa-bowl-rice',
        title: 'Serve with jasmine rice',
        description:
          'The fragrant, slightly sticky texture of jasmine rice is the traditional pairing for soaking up the sauce.',
      },
    ],
  },
  {
    id: 3,
    name: 'Classic Beef Tacos',
    description:
      'Seasoned ground beef tacos with fresh toppings in warm corn tortillas',
    image: './assets/img/recipes/recipe-3-tacos.jpg',
    category: 'Mexican',
    difficulty: 'Easy',
    prepTimeMinutes: 15,
    cookTimeMinutes: 15,
    prepTime: '15 min',
    cookTime: '15 min',
    servings: 4,
    rating: {
      average: 4.7,
      quantity: 312,
    },
    ingredients: [
      { amount: '500g', item: 'ground beef' },
      { amount: '1', item: 'onion, diced' },
      { amount: '2 cloves', item: 'garlic, minced' },
      { amount: '2 tbsp', item: 'taco seasoning' },
      { amount: '8', item: 'small corn tortillas' },
      { amount: '1 cup', item: 'shredded lettuce' },
      { amount: '1', item: 'tomato, diced' },
      { amount: '1 cup', item: 'shredded cheddar cheese' },
      { amount: 'to taste', item: 'sour cream and salsa' },
    ],
    instructions: [
      {
        step: 1,
        title: 'Cook the beef',
        description:
          'In a skillet over medium-high heat, cook the ground beef with onion and garlic until browned, breaking it up as it cooks.',
      },
      {
        step: 2,
        title: 'Season',
        description:
          'Stir in the taco seasoning and a splash of water. Simmer for 5 minutes until thickened.',
      },
      {
        step: 3,
        title: 'Warm the tortillas',
        description:
          'Warm the tortillas in a dry pan or over a gas flame until lightly charred and pliable.',
      },
      {
        step: 4,
        title: 'Assemble',
        description:
          'Fill each tortilla with beef, lettuce, tomato, and cheese. Top with sour cream and salsa to taste.',
      },
    ],
    nutrition: [
      { label: 'Calories', value: '410', unit: 'kcal' },
      { label: 'Protein', value: '26', unit: 'g' },
      { label: 'Carbohydrates', value: '28', unit: 'g' },
      { label: 'Fat', value: '22', unit: 'g' },
      { label: 'Saturated Fat', value: '9', unit: 'g' },
      { label: 'Fiber', value: '4', unit: 'g' },
      { label: 'Sodium', value: '640', unit: 'mg' },
      { label: 'Sugar', value: '3', unit: 'g' },
    ],
    tips: [
      {
        icon: 'fa-solid fa-fire',
        title: 'Char the tortillas',
        description:
          'A quick char over an open flame adds smoky flavor and prevents sogginess.',
      },
      {
        icon: 'fa-solid fa-layer-group',
        title: "Don't overfill",
        description:
          'Overfilled tacos fall apart — less filling per tortilla actually eats better.',
      },
      {
        icon: 'fa-solid fa-lemon',
        title: 'Add acidity',
        description:
          'A squeeze of lime juice at the end brightens up the richness of the beef.',
      },
    ],
  },
  {
    id: 4,
    name: 'Chicken Tikka Masala',
    description:
      'Tender marinated chicken in a rich, spiced tomato-cream sauce',
    image: './assets/img/recipes/recipe-4-tikka-masala.jpg',
    category: 'Indian',
    difficulty: 'Medium',
    prepTimeMinutes: 25,
    cookTimeMinutes: 35,
    prepTime: '25 min',
    cookTime: '35 min',
    servings: 4,
    rating: {
      average: 4.9,
      quantity: 421,
    },
    ingredients: [
      { amount: '600g', item: 'chicken thighs, cubed' },
      { amount: '1 cup', item: 'plain yogurt' },
      { amount: '2 tbsp', item: 'tikka masala spice blend' },
      { amount: '1', item: 'onion, finely chopped' },
      { amount: '3 cloves', item: 'garlic, minced' },
      { amount: '1 tbsp', item: 'ginger, grated' },
      { amount: '400g', item: 'canned crushed tomatoes' },
      { amount: '200ml', item: 'heavy cream' },
      { amount: 'handful', item: 'fresh cilantro, chopped' },
    ],
    instructions: [
      {
        step: 1,
        title: 'Marinate the chicken',
        description:
          'Combine chicken with yogurt and half the spice blend. Marinate for at least 20 minutes (longer if possible).',
      },
      {
        step: 2,
        title: 'Sear the chicken',
        description:
          'Sear the marinated chicken in a hot pan until lightly charred on the outside. Set aside.',
      },
      {
        step: 3,
        title: 'Build the sauce',
        description:
          'In the same pan, sauté onion, garlic, and ginger until soft. Add the remaining spices and cook until fragrant.',
      },
      {
        step: 4,
        title: 'Simmer',
        description:
          'Add the crushed tomatoes and simmer for 15 minutes. Stir in the cream and return the chicken to the pan.',
      },
      {
        step: 5,
        title: 'Finish and serve',
        description:
          'Simmer until the chicken is cooked through and the sauce has thickened. Garnish with cilantro and serve with rice or naan.',
      },
    ],
    nutrition: [
      { label: 'Calories', value: '580', unit: 'kcal' },
      { label: 'Protein', value: '38', unit: 'g' },
      { label: 'Carbohydrates', value: '16', unit: 'g' },
      { label: 'Fat', value: '40', unit: 'g' },
      { label: 'Saturated Fat', value: '20', unit: 'g' },
      { label: 'Fiber', value: '3', unit: 'g' },
      { label: 'Sodium', value: '710', unit: 'mg' },
      { label: 'Sugar', value: '7', unit: 'g' },
    ],
    tips: [
      {
        icon: 'fa-solid fa-clock',
        title: 'Marinate longer if you can',
        description:
          'An overnight marinade deepens the flavor and tenderizes the chicken significantly.',
      },
      {
        icon: 'fa-solid fa-fire-burner',
        title: "Char, don't fully cook, when searing",
        description:
          'The chicken finishes cooking in the sauce — searing is just for color and flavor.',
      },
      {
        icon: 'fa-solid fa-mortar-pestle',
        title: 'Toast whole spices first',
        description:
          'If using whole spices instead of a pre-made blend, toast them briefly to release their oils before grinding.',
      },
    ],
  },
  {
    id: 5,
    name: 'Margherita Pizza',
    description:
      'A simple, classic pizza with fresh mozzarella, basil, and tomato sauce',
    image: './assets/img/recipes/recipe-5-pizza.jpg',
    category: 'Italian',
    difficulty: 'Easy',
    prepTimeMinutes: 20,
    cookTimeMinutes: 15,
    prepTime: '20 min',
    cookTime: '15 min',
    servings: 4,
    rating: {
      average: 4.5,
      quantity: 267,
    },
    ingredients: [
      { amount: '1', item: 'pizza dough ball (store-bought or homemade)' },
      { amount: '1/2 cup', item: 'tomato sauce' },
      { amount: '200g', item: 'fresh mozzarella, torn' },
      { amount: 'handful', item: 'fresh basil leaves' },
      { amount: '2 tbsp', item: 'olive oil' },
      { amount: 'to taste', item: 'salt' },
    ],
    instructions: [
      {
        step: 1,
        title: 'Preheat the oven',
        description:
          'Preheat your oven (and pizza stone, if using) to its highest setting, at least 250°C (480°F).',
      },
      {
        step: 2,
        title: 'Shape the dough',
        description:
          'Stretch or roll the dough into a round base on a floured surface or pizza peel.',
      },
      {
        step: 3,
        title: 'Add toppings',
        description:
          'Spread the tomato sauce evenly, leaving a border for the crust. Top with torn mozzarella.',
      },
      {
        step: 4,
        title: 'Bake',
        description:
          'Bake for 10–15 minutes until the crust is golden and the cheese is bubbling and lightly browned.',
      },
      {
        step: 5,
        title: 'Finish and serve',
        description:
          'Remove from the oven, drizzle with olive oil, and scatter fresh basil leaves on top before slicing.',
      },
    ],
    nutrition: [
      { label: 'Calories', value: '480', unit: 'kcal' },
      { label: 'Protein', value: '20', unit: 'g' },
      { label: 'Carbohydrates', value: '54', unit: 'g' },
      { label: 'Fat', value: '20', unit: 'g' },
      { label: 'Saturated Fat', value: '9', unit: 'g' },
      { label: 'Fiber', value: '3', unit: 'g' },
      { label: 'Sodium', value: '620', unit: 'mg' },
      { label: 'Sugar', value: '5', unit: 'g' },
    ],
    tips: [
      {
        icon: 'fa-solid fa-temperature-high',
        title: 'Go as hot as your oven allows',
        description:
          'A very hot oven mimics a pizza oven and gives you a crisp crust without drying out the toppings.',
      },
      {
        icon: 'fa-solid fa-droplet',
        title: 'Drain the mozzarella',
        description:
          'Pat fresh mozzarella dry before adding it — excess moisture leads to a soggy pizza.',
      },
      {
        icon: 'fa-solid fa-seedling',
        title: 'Add basil after baking',
        description:
          'Fresh basil added post-bake stays vibrant instead of wilting and browning in the oven.',
      },
    ],
  },
];

let currentRecipeIndex = 0;

// icon + Bootstrap colour per nutrient (drives both the icon and its tinted box)
const nutritionIcons = {
  Calories: { icon: 'fa-fire', color: 'danger' },
  Protein: { icon: 'fa-dumbbell', color: 'primary' },
  Carbohydrates: { icon: 'fa-wheat-awn', color: 'warning' },
  Fat: { icon: 'fa-droplet', color: 'info' },
  'Saturated Fat': { icon: 'fa-bacon', color: 'secondary' },
  Fiber: { icon: 'fa-seedling', color: 'success' },
  Sodium: { icon: 'fa-cube', color: 'dark' },
  Sugar: { icon: 'fa-candy-cane', color: 'danger' },
};

function buildIngredientsHtml(ingredients) {
  return (
    '<ul class="list-unstyled bg-orange-100 rounded-3 p-3 mb-0">' +
    ingredients
      .map(
        (ingredient, index) => `
          <li class="d-flex align-items-center mb-3">
            <div class="rounded-circle bg-orange-500 text-white fw-bold d-flex align-items-center justify-content-center flex-shrink-0 me-3 recipe-step-badge">${index + 1}</div>
            <span>${ingredient.amount} ${ingredient.item}</span>
          </li>
        `,
      )
      .join('') +
    '</ul>'
  );
}

function buildInstructionsHtml(instructions) {
  return instructions
    .map(
      (instruction) => `
        <div class="d-flex align-items-start mb-4">
          <div class="rounded-4 bg-orange-500 text-white fw-bold d-flex align-items-center justify-content-center flex-shrink-0 me-3 recipe-step-badge recipe-step-badge-lg">${instruction.step}</div>
          <div class="pt-1">
            <p class="mb-0">${instruction.description}</p>
          </div>
        </div>
      `,
    )
    .join('');
}

function buildNutritionHtml(nutrition) {
  return (
    '<div class="row g-3 mx-0">' +
    nutrition
      .map((item) => {
        const { icon, color } = nutritionIcons[item.label];
        return `
          <div class="col-md-6">
            <div class="d-flex align-items-center justify-content-between bg-light rounded-3 p-3">
              <div class="d-flex align-items-center">
                <div class="rounded-3 bg-${color} bg-opacity-10 d-flex align-items-center justify-content-center me-3 recipe-nutrition-icon">
                  <i class="fa-solid ${icon} text-${color}"></i>
                </div>
                <span class="fw-medium">${item.label}</span>
              </div>
              <span class="fw-bold text-gray-900">${item.value} ${item.unit}</span>
            </div>
          </div>
        `;
      })
      .join('') +
    '</div>'
  );
}

function buildTipsHtml(tips) {
  return tips
    .map(
      (tip) => `
        <div class="d-flex gap-3 mb-4">
          <i class="${tip.icon} text-orange fs-5"></i>
          <div>
            <h6 class="fw-bold text-gray-900 mb-1">${tip.title}</h6>
            <p class="mb-0">${tip.description}</p>
          </div>
        </div>
      `,
    )
    .join('');
}

function renderRecipe(recipe) {
  document.getElementById('recipe-image').src = recipe.image;
  document.getElementById('recipe-image').alt = recipe.name;
  document.getElementById('rating-average').textContent = recipe.rating.average;
  document.getElementById('rating-quantity').textContent =
    `(${recipe.rating.quantity} reviews)`;
  document.getElementById('prep-time-display').textContent = recipe.prepTime;
  document.getElementById('cook-time-display').textContent = recipe.cookTime;
  document.getElementById('servings-display').textContent =
    `${recipe.servings} people`;
  document.getElementById('difficulty-badge').textContent = recipe.difficulty;
  document.getElementById('category-badge').textContent = recipe.category;
  document.getElementById('recipe-name').textContent = recipe.name;
  document.getElementById('recipe-description').textContent =
    recipe.description;

  document.getElementById('ingredients-pane').innerHTML = buildIngredientsHtml(
    recipe.ingredients,
  );
  document.getElementById('instructions-pane').innerHTML =
    buildInstructionsHtml(recipe.instructions);
  document.getElementById('nutrition-pane').innerHTML = buildNutritionHtml(
    recipe.nutrition,
  );
  document.getElementById('tips-pane').innerHTML = buildTipsHtml(recipe.tips);

  const isLongPrep = computeIsLongPrep(
    recipe.prepTimeMinutes,
    recipe.cookTimeMinutes,
  );
  document
    .getElementById('time-warning')
    .classList.toggle('d-none', !isLongPrep);
  // I have a function that give me the flag if the recipe has a flag
  // if yes then toggle it with the flag
}

function chooseRecipe() {
  currentRecipeIndex = (currentRecipeIndex + 1) % recipes.length;
  // current Recipe Index , has an index appending usign modulo to scroll through the list untill
  // the last index which make the index to 0 again , like an infinite loop without stoping
  renderRecipe(recipes[currentRecipeIndex]);
}

renderRecipe(recipes[currentRecipeIndex]);

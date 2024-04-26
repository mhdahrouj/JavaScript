/**
 * Ever wondered how to make a certain meal? Let's create a recipe list with JavaScript!
 *
 *   Declare a variable that holds an empty object literal (your meal recipe).
 *   Give the object 3 properties: a title (string), a servings (number) and an ingredients (array of strings) property.
 *   Log each property out separately, using a loop (for, while or do/while)
 *
 * Expected result:
 *
 *   Meal name: Omelette
 *   Serves: 2
 *   Ingredients: 4 eggs, 2 strips of bacon, 1 tsp salt/pepper
 */

let myMeal = {
  title: "Omelette",
  Serves: 2,
  Ingredients: ["4 eggs, 2 strips of bacon, 1 tsp salt/pepper"],
};

for (let [keys, values] of Object.entries(myMeal)) {
  console.log(`${keys} : ${values}`);
}

// another Solution
for (let key in myMeal) {
  if (key == "title") {
    console.log(`title : ${myMeal[key]}`);
  } else if (key == "Serves") {
    console.log(`Serves : ${myMeal[key]}`);
  } else {
    console.log(`Ingredients : ${myMeal[key]}`);
  }
}

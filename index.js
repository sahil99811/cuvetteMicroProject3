const data = require('./data/food.json');

function filterByCategory(category) {
    return data.filter((food) => food.category.toLowerCase() === category.toLowerCase());
}

function filterByCalorie(operator, value) {
    return data.filter((food) => {
        if (operator === 'above') {
            return food.calorie > value;
        } else if (operator === 'below') {
            return food.calorie < value;
        }
        return false;
    });
}

function sortByProtein() {
    return data.slice().sort((a, b) => b.proteins - a.proteins);
}

function sortByCab() {
    return data.slice().sort((a, b) => a.carb - b.carb);
}

// Example usage
console.log("List all the food items:");
console.log(data);

console.log("\nList all the food items with category 'Vegetables':");
console.log(filterByCategory('Vegetable'));

console.log("\nList all the food items with category 'Fruit':");
console.log(filterByCategory('Fruit'));

console.log("\nList all the food items with category 'Protein':");
console.log(filterByCategory('Protein'));

console.log("\nList all the food items with category 'Nuts':");
console.log(filterByCategory('Nuts'));

console.log("\nList all the food items with category 'Grains':");
console.log(filterByCategory('Grains'));

console.log("\nList all the food items with category 'Dairy':");
console.log(filterByCategory('Dairy'));

console.log("\nList all the food items with calorie above 100:");
console.log(filterByCalorie('above', 100));

console.log("\nList all the food items with calorie below 100:");
console.log(filterByCalorie('below', 100));

console.log("\nList all the food items with highest protein content to lowest:");
console.log(sortByProtein());

console.log("\nList all the food items with lowest carb content to highest:");
console.log(sortByCab());

console.log(data)

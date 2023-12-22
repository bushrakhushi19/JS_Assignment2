// -----practice question 3.1


let shoppingList = ["Milk", "Bread", "Apples"];

console.log("Initial length of the shopping list:", shoppingList.length);

shoppingList[1] = "Bananas";

console.log("Updated shopping list:", shoppingList);

//--------PRACTICE QUESTION 3.2

let shopping_List = [];

shopping_List.push("Milk", "Bread", "Apples");

shopping_List.splice(shopping_List.indexOf("Bread"), 1, "Bananas", "Eggs");

let lastItem = shopping_List.pop();
console.log("Removed item:", lastItem);

shopping_List.sort();

let milkIndex = shopping_List.indexOf("Milk");
console.log("Index of Milk:", milkIndex);

let bananasIndex = shopping_List.indexOf("Bananas");
shopping_List.splice(bananasIndex + 1, 0, "Carrots", "Lettuce");

let new_List = ["Juice", "Pop"];

shopping_List.push(...new_List, ...new_List);

let lastIndexPop = shopping_List.lastIndexOf("Pop");
console.log("Last index of Pop:", lastIndexPop);

console.log("Final list:", shopping_List);

// -----PRACTICE QUESTION 3.3

let original_Array = [1, 2, 3];

let nestedArrays = [original_Array, original_Array, original_Array];

console.log("Value 2 from one of the arrays:", nestedArrays[1][1]);



// -----PRACTICE QUESTION 3.4

let myCar = {
  make: "Toyota",
  model: "Corolla",
  year: 2022,
  color: "blue",
  mileage: 15000,
  forSale: true
};

let property_Name = "color";

myCar[property_Name] = "red";

property_Name = "forSale";
myCar[property_Name] = false;

console.log("Make:", myCar.make);
console.log("Model:", myCar.model);

console.log("For Sale:", myCar.forSale);

// -----PRACTICE QUESTION 3.5

let allPeople = {
  friends: []
};

let friend_1 = {
  firstName: "John",
  lastName: "Doe",
  ID: 123
};

let friend_2 = {
  firstName: "Jane",
  lastName: "Smith",
  ID: 456
};

let friend_3 = {
  firstName: "Alice",
  lastName: "Johnson",
  ID: 789
};

allPeople.friends.push(friend_1, friend_2, friend_3);

console.log( allPeople.friends);



// practice question 4.1

let myVariable = true;

console.log("The value of myVariable is:", myVariable);

if (myVariable) {
    console.log("The variable is true!");
}

if (!myVariable) {
    console.log("The variable is not true!");
} else {
    console.log("The variable is true!");
}

myVariable = !myVariable;

console.log("The value of myVariable is now:", myVariable);

if (myVariable) {
    console.log("The variable is true!");
} else {
    console.log("The variable is not true!");
}

if (!myVariable) {
    console.log("The variable is not true!");
} else {
    console.log("The variable is true!");
}

// Practice Question 4.2

let userInput = prompt("Please enter your age:");

let userAge = parseInt(userInput);

let message;

if (userAge >= 21) {
    message = "You're confirmed for entry to the showroom and can purchase a car.";
} 

else if (userAge >= 19) {
    message = "You're confirmed for entry to the showroom but cannot purchase a car.";
} 

else {
    message = "Sorry, you're denied entry to the showroom.";
}

console.log(message);

// practice question 4.3

let isIDValid = true;

let msg = isIDValid ? "You are allowed into the venue." : "You are not allowed into the venue.";

console.log(msg);

// practice question 4.4

let randomNumber = Math.floor(Math.random() * 6);


let userQuestion = prompt("Ask the Magic 8-Ball a question:");


let response;
switch (randomNumber) {
    case 0:
        response = "It is certain.";
        break;
    case 1:
        response = "Without a doubt.";
        break;
    case 2:
        response = "Reply hazy, try again.";
        break;
    case 3:
        response = "Cannot predict now.";
        break;
    case 4:
        response = "Don't count on it.";
        break;
    case 5:
        response = "My sources say no.";
        break;
    default:
        response = "Sorry, the 8-Ball is malfunctioning.";
}

let finalResponse = `You asked: "${userQuestion}"\nThe Magic 8-Ball says: "${response}"`;

console.log(finalResponse);

// practice question 4.5

let prize = prompt("Set your prize value (between 0 and 10):");


let prizeValue = parseInt(prize);


let outputMessage = "My Selection: ";


let prizeAwarded;
switch (prizeValue) {
    case 0:
        prizeAwarded = "A small teddy bear";
        break;
    case 1:
        prizeAwarded = "A box of chocolates";
        break;
    case 2:
        prizeAwarded = "A movie ticket";
        break;
    case 3:
        prizeAwarded = "A gift card";
        break;
    case 4:
        prizeAwarded = "A book";
        break;
    case 5:
        prizeAwarded = "A board game";
        break;
    case 6:
    case 7:
        prizeAwarded = "A weekend getaway";
        break;
    case 8:
    case 9:
        prizeAwarded = "A luxury watch";
        break;
    case 10:
        prizeAwarded = "A brand new car!";
        break;
    default:
        prizeAwarded = "No prize this time!";
}

console.log(outputMessage + prizeAwarded);



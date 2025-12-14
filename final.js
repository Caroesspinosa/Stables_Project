// CAROLINA'S STABLE MDIA-1620 #A01461685//

/*
   ________________________________________________________________________________
  |                                                                                |
  |                              CAROLINA´S STABLE                                 |
  |________________________________________________________________________________|
  | Stall 1 | 🐴 Sulley       | Stall 2 | 🐴 Mike        | Stall 3 | 🐴 Boo         |
  |--------------------------------------------------------------------------------|
  | Stall 4 | 🐴 Randall      | Stall 5 | Available     | Stall 6 | Available      |
  |________________________________________________________________________________|
*/
//------------------------- Seting up shop -------------------------//

let horseName = "Sulley";
let horseAge = 27;
let horseInside = true;
let boardingFee = 40;
let lateFee = boardingFee * 1.2;

// Use of the ternary operator

let visitorMessage =
    "Welcome to our stable, the horse " +
    horseName +
    " is " +
    horseAge +
    " years old and is currently " +
    (horseInside ? "inside" : "outside") +
    " the stable.";

let latePaymentMessage =
    "The boarding fee of " +
    horseName +
    " is late. The final amount is " +
    lateFee +
    ".";

console.log(visitorMessage);
console.log(latePaymentMessage);

//------------------------- First day -------------------------//

// LAB 2
// Horses stored in new variable using object.

let horses = [
    {
        name: "Sulley", // string
        age: 27, // number
        nickname: "Azul",
        color: "Blue",
        breed: "Frison",
        favoriteTreat: "Papas",
        monthlyRent: 20,
        location: true, // boolean
    },
    {
        name: "Mike",
        age: 21,
        nickname: "Verde",
        color: "Green",
        breed: "Percheron",
        favoriteTreat: "Sushi",
        monthlyRent: 22,
        location: true,
    },
    {
        name: "Boo",
        age: 12,
        nickname: "Rosa",
        color: "Pink",
        breed: "Percheron",
        favoriteTreat: "Pizza",
        monthlyRent: 40,
        location: true,
    },
];
function introducingHorse(horse) {
    console.log(
        horse.name +
            " is " +
            horse.age +
            " , it respond to " +
            horse.nickname +
            " and loves to eat " +
            horse.favoriteTreat
    );
}
introducingHorse(horses[0]);

function likesToRun(horse) {
    if (horse.age < 15) {
        console.log(horse.name + " likes to run");
    }
}
likesToRun(horses[2]);
// Use of push to add items to the rest

let newHorse = {
    name: "Randall",
    age: 5,
    nickname: "Morado",
    color: "Purple",
    breed: "Percheron",
    favoriteTreat: "Burger",
    monthlyRent: 50,
    location: false,
};

horses.push(newHorse);

// Boolean using dot notation, horse = object, [0] is the position in the array, .isHungry equals the new property, true is boolean.

horses[0].isHungry = true;
horses[1].isHungry = false;
horses[2].isHungry = true;
horses[3].isHungry = false;

//console.log(horses);

//------------------------- Stable roster -------------------------//
/*
        name: "",
        age: ,
        nickname: "",
        color: "",
        breed: "",
        favoriteTreat: "",
        monthlyRent: ,
        location: ,
*/
//LAB 3
//---------------------- Growing business ----------------------//

function availableStalls(stalls, numHorses) {
    return stalls - numHorses;
}
let totalStalls = 6;

// Call to action for the function
if (availableStalls(totalStalls, horses.length) < 2) {
    console.log("We need to build more stalls");
} else {
    console.log(
        "We have " +
            availableStalls(totalStalls, horses.length) +
            " stalls available!"
    );
}

function calculateLateRent(horses) {
    let lateAmount = horses.monthlyRent * 1.2;
    console.log(
        horses.name +
            " has a late rent. The total amount due is $" +
            lateAmount +
            "."
    );
}
calculateLateRent(horses[2]);

// NEW PART LAB 3 ----------

// Add loop that checks to find out if a certain horse likes a treat. If the horse does not like
// the treat, log out their disatisfaction and check the next horse. Exit the loop when you find
// the horse that likes the treat.
function likeTreat(treat) {
    for (let i = 0; i < horses.length; i++) {
        if (horses[i].favoriteTreat === treat) {
            return console.log(horses[i].name + " likes " + treat);
        }
    }
    return console.log("There is no horse who likes " + treat);
}
likeTreat("Sushi");

// Create and invoke a function that returns (not logs) the nickname of a chosen horse. Log out
// the return value outside of the function.

function horsesNickname(horses) {
    return horses.nickname;
}
let selectedHorse = horsesNickname(horses[2]);
console.log("The nickname is " + selectedHorse);

// LAB 4

//------------------------- Day to day operations -------------------------//

// Create and invoke a function references one of your unique horse properties. It should
// contain a conditional or a loop.

function whatBreed(breed) {
    for (let i = 0; i < horses.length; i++) {
        if (horses[i].breed === breed) {
            console.log(horses[i].name + " has this breed  " + breed);
        }
    }
}
whatBreed("Frison");

// Morning! Create and invoke a function that moves all your horses outside. It should
// log out statement indicating the horses have been moved to spend time in the sun.
function everyonOutside(horses) {
    for (let i = 0; i < horses.length; i++) {
        horses[i].location = false;
        console.log(horses[i].name + " is outside spending time in the sun");
    }
}
everyonOutside(horses);
// Initialize a method on your horses that moves them inside if they are outside, and
// vice versa.

function changeLocation(horses) {
    for (let i = 0; i < horses.length; i++) {
        if (horses[i].location === false) {
            horses[i].location = true;
            console.log(horses[i].name + " is inside? " + horses[i].location);
        } else {
            horses[i].location = false;
            console.log(horses[i].name + " is inside? " + horses[i].location);
        }
    }
}
changeLocation(horses);

// Food! Create and invoke a function that feeds your horses. If the horse is outside, it
// should call them in, and then all horses should be fed a treat. Log the activity of
// the horses.

function horsesFeed(horses) {
    for (let i = 0; i < horses.length; i++) {
        if (horses[i].location === false) {
            horses[i].location = true;
            console.log(horses[i].name + " is inside");
        }
        console.log(
            horses[i].name + " has been fed with " + horses[i].favoriteTreat
        );
    }
}

horsesFeed(horses);

// Bedtime! Update the function that lets your horses outside so that it also calls them
// in if it is getting dark. Only the horses that moved should log out a message. Invoke the function.
function everyoneInside(horses, daylight) {
    if (daylight === false) {
        for (let i = 0; i < horses.length; i++) {
            if ((horses[i].location = false)) {
                horses[i].location = true;
                console.log(
                    horses[i].name + " is now inside because it is dark"
                );
            } else {
                console.log(horses[i].name + " was already inside");
            }
        }
    } else {
        console.log(
            "Horses can still enjoy being outside, there still is sunlight"
        );
    }
}
let daylight = false;
everyoneInside(horses, daylight);

//------------------------- Bonus -------------------------//

// Replace the ascii art at the top of the file with art representing your stable.

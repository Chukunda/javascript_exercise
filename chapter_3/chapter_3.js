// declartion of variables

let randomBodyParts = ['Belly', 'Nose', 'face'];
let randomAdjectives = ['Stupid', "fatter", "tiny"];
let randomAnimalParts = ["feet", "shit", 'ass'];
let randomAnimals = ["Monkey", "Goat", 'Horse', 'cat'];

// create a random generator for each array
let randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)]
let randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)]
let randomAnimal = randomAnimals[Math.floor(Math.random() * randomAnimals.length)]
let randomAnimalPart = randomAnimalParts[Math.floor(Math.random() * randomAnimalParts.length)]

// finally the using the (+) to concatenate
let randomInsults = "Your " + randomBodyPart + " is more " 
+ randomAdjective + " than a " + randomAnimal + "'s " + randomAnimalPart + "!!!"
alert(randomInsults);
// using the .join() to concatenate
let randomCurse = ['Your',randomBodyPart, 'is more ', randomAdjective, 'than a ', randomAnimal + '"s ', randomAnimalPart + '!!!'].join(" ")
alert(randomCurse);

// the .join() method is very easy because it reduces the too many + signs in concatenation and makes the code appear more clever than the (+) method.

// to return an num (3 is bigger than 2 is bigger than 1)
let num = [3, 2,1]
alert(num.join(" > "))
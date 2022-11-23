// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

function countSheep(arrayOfSheep) {
  var sheepCount = 0;
  arrayOfSheep.forEach(function (sheep) {
    if (sheep === true) {
      sheepCount += 1;
    }
  });
  return sheepCount;
}

//________________________________________________________________________

// Clock shows h hours, m minutes and s seconds after midnight.
// Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s) {
  var secondCount = s * 1000;
  var minuteCount = m * 60000;
  var hourCount = h * 3600000;
  return secondCount + minuteCount + hourCount;
}

//________________________________________________________________________

// Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

function bmi(weight, height) {
  var bmi = weight / height ** 2;
  if (bmi <= 18.5) {
    return "Underweight";
  } else if (bmi > 18.5 || bmi <= 25) {
    return "Normal";
  } else if (bmi > 25 || bmi <= 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

//________________________________________________________________________

// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

function feast(beast, dish) {
  let beastLetter1 = beast[0];
  let beastLetterLast = beast[beast.length - 1];
  let dishLetter1 = dish[0];
  var dishLetterLast = dish[dish.length - 1];
  if (beastLetter1 === dishLetter1 && beastLetterLast === dishLetterLast) {
    return true;
  } else {
    return false;
  }
}

// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2) {
  if (flower1 % 2 === 0 && flower2 % 2 !== 0) {
    return true;
  } else if (flower2 % 2 === 0 && flower1 % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}




// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){
  let nameSplit = name.split(' ');
  let firstLetter = (nameSplit[0][0]).toUpperCase();
  let secondLetter = (nameSplit[1][0]).toUpperCase();
  let abbreviation = [firstLetter, secondLetter];
  return abbreviation.join('.');

};




//Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x){
  return x.split(' ').join('');
};




//You are given two interior angles (in degrees) of a triangle.
// Write a function to return the 3rd.
// Note: only positive integers will be tested.

function otherAngle(a, b) {
  return 180-(a+b);
};




//Our football team has finished the championship.
// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.
// For example: ["3:1", "2:2", "0:1", ...]
// Points are awarded for each match as follows:
// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

function points(games) {
  ourTotal = 0
  games.forEach(function(set) {
    let ourScore = set[0];
    let theirScore = set[2];
    if(ourScore > theirScore) {
      ourTotal += 3
    } else if(ourScore === theirScore) {
      ourTotal += 1
    };
  })
  return ourTotal;
};



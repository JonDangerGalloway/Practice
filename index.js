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




//Roman Numeral to Int
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

function romanToInt(romanNumeral) {

  let numberConverter = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};

  let total = 0;

  for(let i=0; i<romanNumeral.length; i++) {

    let currentPosition = numberConverter[romanNumeral.charAt(i)];
    let nextPosition = numberConverter[romanNumeral.charAt(i + 1)]
    if(nextPosition) {
      if(currentPosition >= nextPosition) {
        total += currentPosition;
        } else {
          total += (nextPosition - currentPosition)
          i++
        }
    } else {
      total += currentPosition;
    }

  }
  return total;
}




//Given an integer num, return the number of steps to reduce it to zero.
// In one step, if the current number is even, you have to divide it by 2, 
// otherwise, you have to subtract 1 from it.
// External.
// Input: num = 14
// Output: 6

function numSteps(num) {
  steps = 0;
  while(num !=0) {
    if(num % 2 === 0) {
      num = num/2;
      steps += 1;
    } else if (num % 2 != 0) {
      num = num - 1;
      steps += 1;
    }

    }
    return steps;
};




//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

function twoSums(nums, target) {
 
  for(var i = 0; i < nums.length; i++) {
    for(var j = i + 1; j < nums.length; j++) {
      if(nums[i] + nums[j] === target) {
        return ([i, j]);
      } 
    }
}
};


twoSums([2, 15,11,7], 9);


function convert(celsius) {
  return [celsius + 273.15 ,(celsius * (9/5)) + 32];
};




//Check to see if a string has the same amount of 'x's and 'o's. 
// The method must return a boolean and be case insensitive. 
// The string can contain any char.


function XO(str) {
  let x = [];
  let o = [];
  for(let i=0; i<str.length; i++) {
    if(str[i] === "x" || str[i] === "X") {
      x.push(str[i]);
    } else if(str[i] === "o" || str[i] === "O") {
      o.push(str[i]);
    }
  }
  if(x.length === o.length) {
    return true;
  } else{
    return false;
  }
}


// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

function countSheep(arrayOfSheep) {
    var sheepCount = 0;
    arrayOfSheep.forEach(function(sheep){
      if(sheep === true) {
        sheepCount += 1;
      };
    });
    return sheepCount
  };




//________________________________________________________________________

// Clock shows h hours, m minutes and s seconds after midnight.
// Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s){
    var secondCount = s * 1000;
    var minuteCount = m * 60000;
    var hourCount = h * 3600000;
    return (secondCount + minuteCount + hourCount);
}




//________________________________________________________________________

// Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

function bmi(weight, height) {
  var bmi = weight / (height ** 2);
  if(bmi <= 18.5) {
    return "Underweight"
  } else if(bmi > 18.5 || bmi <= 25) {
    return "Normal"
  } else if(bmi > 25 || bmi <= 30) {
    return "Overweight"
  } else {
    return "Obese"
  }
};






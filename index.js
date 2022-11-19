

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




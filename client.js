function homeWork(array, number) { //defined function taking in specified parameters
  if (number > array.length) { // display error and exit function if number exceeds array.length
    console.warn(number + ' is greater than array length');
    return;
  }
  // also could've been written like -->
  // array = array.slice(number); //slice uses our number parameter as a new start index. eliminates indexes prior, but does not modify so had to redefine array.
  // return array.join(''); //join takes our array elements and turns them nicely into a string! wow!
}


function homeWork(array, number) {
  var newString = '';
  for (var i = number; i < array.length; i++) {
      newString = newString + array[i];
    
  }
  return newString;
}


console.log(homeWork(["ASDF", "BLAH", "Oh! ", "Hi ", "There!"], 3)); // Hi There!
console.log(homeWork(["ASDF", "BLAH", "Oh! ", "Hi ", "There!"], 2)); // Oh! Hi There!
console.log(homeWork(["ASDF", "BLAH", "Oh! ", "Hi ", "There!"], 24)); // trigger console.warn()

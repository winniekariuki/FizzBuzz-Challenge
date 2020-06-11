const fizzBuzz = () => {
//declaration of an empty array
  numbersArray = []
  //loop untill 100 as we increment our counter
  for (var num = 1; numbersArray.length < 100; num++) {
    //check if number is divisible by both 3 and 5 checking if remainder is equal to 0
    if (num % 3 === 0 && num % 5 === 0) {
      numbersArray.push("FizzBuzz")
   //check if number is divisible by 3 by checking if remainder is equal to 0
    } else if (num % 3 === 0) {
      numbersArray.push("Fizz")
    //check if number is divisible by 5 by checking if remainder is equal to 0
    } else if (num % 5 === 0) {
      numbersArray.push("buzz")
    //return the number if it fails all the above conditions
    } else {
      numbersArray.push(num)
    }
  }
  return numbersArray
}

console.log(fizzBuzz())

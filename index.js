function distanceFromHqInBlocks (someValue) {
    //returns the number of blocks given a value
    if (someValue < 42){
      return 42 - someValue;
    }
    else {
  
    return someValue - 42 ;
    }
  }


function distanceFromHqInFeet (someValue) {
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
    return distanceFromHqInBlocks(someValue) * 264
}


function distanceTravelledInFeet (start, destination) {
    //returns the number of feet traveled
    let distance = destination - start
    if (distance >= 0) {
        return distance * 264
    }
    else {
        return distance * -264
    }
}


function calculatesFarePrice (start, destination) {
    //returns the fare for the customer
    //the first four hundred feet are free
    //For a distance between 400 and 2000 feet, the price is 2 cents per foot (not including 400, which are free!)
    //Then Scuber charges a flat fare for a distance over 2000 feet and under 2500 feet
    //Finally, Scuber does not allow any rides over 2500 feet — the function returns 'cannot travel that far' if a ride over 2500 feet is requested
    let distance = distanceTravelledInFeet(start, destination)
    if (distance <= 400) {
        return 0
    }
    else if (distance > 400 && distance <= 2000 ) {
        return (distance - 400) * 0.02
    }
    else if (distance > 2000 && distance < 2500) {
        return 25
    }
    else if (distance >= 2500){
        return "cannot travel that far";
      }
}
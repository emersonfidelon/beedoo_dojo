class FizzBuzz {
    verificaNumeroDivisivel(number: number) {
        if (number % 3 === 0 && number % 5 === 0) {
            return 'FizzBuzz'
        }
        if (number % 3 === 0) {
            return 'Fizz'
        }
        if (number % 5 === 0) {
            return 'Buzz'
        }
        if(`${number}`.includes('3') && `${number}`.includes('5')) {
          const positionThree = `${number}`.indexOf('3');
          const positionFive = `${number}`.indexOf('5');
          if(positionThree < positionFive) {
            return 'FizzBuzz'
          } else {
            return 'BuzzFizz'
          }
        }
        if (`${number}`.includes('3') && !`${number}`.includes('5')) {
            return 'Fizz'
        }
        if (`${number}`.includes('5') && !`${number}`.includes('3')) {
            return 'Buzz'
        }
        return number;
    }
}

export { FizzBuzz }

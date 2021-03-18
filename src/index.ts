import { FizzBuzz } from "./usecases/FizzBuzz";

const fizzBuzz = new FizzBuzz()

for(let number=1; number<=100; number++) {
    console.log(fizzBuzz.verificaNumeroDivisivel(number))
}
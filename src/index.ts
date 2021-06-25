import { BreakLine } from "./usecases/BreakLine";

const breakLine = new BreakLine('Um pequeno jabuti xereta viu dez cegonhas felizes.', 10);
console.log(breakLine.handle());
import BreakLine from "./usecases/BreakLine";

const breakLine = new BreakLine({
  frase: 'Um pequeno jabuti xereta viu dez cegonhas felizes.',
  colunas: 20
});

console.log(breakLine.handleWord());
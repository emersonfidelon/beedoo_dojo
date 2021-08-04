import { Rules } from "./Rules";
describe("Rules", () => {
    test("verify draw between two players", () => {
        const play1 = 'Rock'
        const play2 = 'Rock'
        const result = Rules(play1, play2);
        expect(result).toEqual("Draw");
    });

    test("verify invalid play", () => {
        const play1 = "Other";
        const play2 = "Rock";
        const result = Rules(play1, play2);
        expect(result).toEqual("Invalid play");
    });

    test("Rock win", () => {
        const play1 = "Rock";
        const play2 = "Scissors";
        const result = Rules(play1, play2);
        expect(result).toEqual("Rock win");

        const play3 = "Scissors";
        const play4 = "Rock";
        const result2 = Rules(play3, play4);
        expect(result2).toEqual("Rock win");
    });

    test("Paper win", () => {
        const play1 = "Paper";
        const play2 = "Rock";
        const result = Rules(play1, play2);
        expect(result).toEqual("Paper win");

        const play3 = "Rock";
        const play4 = "Paper";
        const result2 = Rules(play3, play4);
        expect(result2).toEqual("Paper win");
    });

    test("Scissors win", () => {
        const play1 = "Scissors";
        const play2 = "Paper";
        const result = Rules(play1, play2);
        expect(result).toEqual("Scissors win");

        const play3 = "Paper";
        const play4 = "Scissors";
        const result2 = Rules(play3, play4);
        expect(result2).toEqual("Scissors win");
    });
});
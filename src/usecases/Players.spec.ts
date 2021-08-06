import { Player } from './Players'

describe('Player', () => {
    test("Verify Rock play", () => {
        const player1 = new Player();
        expect(player1.validPlays.includes('Rock')).toEqual(true);
    });

    test("Verify Paper play", () => {
        const player1 = new Player();
        expect(player1.validPlays.includes("Paper")).toEqual(true);
    });

    test("Verify Scissors play", () => {
        const player1 = new Player();
        expect(player1.validPlays.includes("Scissors")).toEqual(true);
    });

    test("Verify invalid play", () => {
        const player1 = new Player();
        expect(player1.validPlays.includes("Other")).toEqual(false);
    });
})
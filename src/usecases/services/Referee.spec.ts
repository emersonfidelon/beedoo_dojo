import { RefereeService } from "./RefereeService";

describe("Referee", () => {
    test("Return play Rock won", () => {
        const referee = new RefereeService();
        expect(referee.seem("Rock", "Scissors")).toEqual(
            "Rock win"
        );
    });

    test("Return play Paper won", () => {
        const referee = new RefereeService();
        expect(referee.seem("Paper", "Rock")).toEqual(
            "Paper win"
        );
    });

    test("Return play Scissors won", () => {
        const referee = new RefereeService();
        expect(referee.seem("Scissors", "Paper")).toEqual(
            "Scissors win"
        );
    });

    test("Return invalid play", () => {
        const referee = new RefereeService();
        expect(referee.seem("nothing", "Paper")).toEqual(
            "Invalid play"
        );
    });

    test("Return Draw", () => {
        const referee = new RefereeService();
        expect(referee.seem("Paper", "Paper")).toEqual("Draw");
    });
});
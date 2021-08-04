import { Player } from "./Players";

export function Rules(play1: string, play2: string): String {
    const player1 = new Player();
    const player2 = new Player();
    const winningPlays = {
        'RockScissors': 'Rock win',
        'ScissorsRock': 'Rock win',
        'ScissorsPaper': 'Scissors win',
        'PaperScissors': 'Scissors win',
        'PaperRock': 'Paper win',
        'RockPaper': 'Paper win',
    }

    if (!player1.validPlays.includes(play1) || !player2.validPlays.includes(play2)) {
        return "Invalid play";
    }

    if (play1 == play2) {
        return 'Draw';
    }

    return winningPlays[`${play1}${play2}`]
}
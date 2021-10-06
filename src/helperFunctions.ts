import winnerSound from './audioclips/winnerSound.mp3'
import xSound from './audioclips/xSound.mp3'
import oSound from './audioclips/oSound.mp3'


export type SquareValue = 'X' | 'O' | null;

export function checkIfWinner(board: Array<SquareValue>, moveCounter: number, soundOn: boolean) {

    const winSound = () => {
        if (soundOn) {
            new Audio(winnerSound).play();
        }
    }

    const playerSound = () => {
        if (soundOn) {
            moveCounter % 2 === 0 ? new Audio(xSound).play() : new Audio(oSound).play();
        }
    }

    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            winSound();
            return board[a];
        }
    }
    playerSound();
    return null;
}
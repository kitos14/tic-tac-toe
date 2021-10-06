import React, { ReactNode, useState, useContext } from 'react'
import Board from '../components/Board'
import { checkIfWinner, SquareValue } from '../helperFunctions'
import '../styles/game.css'
import { BiRevision } from "react-icons/bi"
import { IoMdArrowRoundBack } from "react-icons/io"
import { Link } from 'react-router-dom'
import audio from '../audioclips/buttonClick.mp3'
import { SoundContext } from '../App'

const Game: React.FC = () => {
    const soundOn = useContext(SoundContext);

    const playAudio = () => {
        if (soundOn) {
            new Audio(audio).play();
        }
    }

    // useStates
    const [moveCounter, setMoveCounter] = useState<number>(0);
    const [board, setBoard] = useState<Array<SquareValue>>(Array<SquareValue>(9).fill(null));
    const [winner, setWinner] = useState<SquareValue>(null);
    const [draw, setDraw] = useState<boolean>(false);

    // Function run on each Square click
    // Checks if there is already a winner, if yes no more inputs are accepted.
    // If there is no winner, board updates and checks winner.
    const playMove = (i: number) => {
        if (!winner) {
            let tempBoard = board;
            if (moveCounter % 2 === 0) {
                tempBoard[i] = 'X';
            } else {
                tempBoard[i] = 'O';
            }
            setBoard(tempBoard);
            setWinner(checkIfWinner(board, moveCounter, soundOn));
            console.log(board);
        }

        setMoveCounter(moveCounter + 1);
        if (moveCounter === 8) {
            setDraw(true);
        }
    }

    // Restart button resets all variables.
    const restartGame = () => {
        playAudio();
        setBoard(Array<SquareValue>(9).fill(null))
        setWinner(null);
        setDraw(false)
        setMoveCounter(0);
    }

    const renderRestart = (): ReactNode => {
        if (winner || draw) {
            return (
                <button className="button2" onClick={() => restartGame()}>
                    <BiRevision size='50' strokeWidth='1' />
                </button>
            );
        } else {
            return null;
        }
    };

    // Renders board
    return (
        <div>
            <Link to="/"><button className="backToMenu" onClick={playAudio}>
                <IoMdArrowRoundBack size='50' strokeWidth='1' />
            </button>
            </Link>
            <div className="game">
                <h2 style={{
                    textAlign: 'center',
                    color: winner ? 'white' : draw ? 'white' : moveCounter % 2 === 0 ? 'rgb(108, 197, 133)' : 'rgb(221, 98, 98)'
                }}>{winner ? "Player " + winner + " won" : draw ? 'Draw' : moveCounter % 2 === 0 ? 'X\'s turn' : 'O\'s turn'}</h2>
                <Board
                    boardTable={board}
                    onClick={i => playMove(i)}
                />
                {renderRestart()}
            </div>
        </div>
    );
}

export default Game

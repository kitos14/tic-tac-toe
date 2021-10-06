import React, { ReactNode } from 'react'
import { SquareValue } from '../helperFunctions';
import '../styles/board.css';
import Square from './Square';

interface BoardProps {
    onClick(i: number): void;
    boardTable: SquareValue[];
}

const Board: React.FC<BoardProps> = props => {

    // Renders each Square with it's i value.
    const renderSquare = (i: number): ReactNode => {
        return (
            <Square
                value={props.boardTable[i]}
                onClick={() => props.onClick(i)}
                isDisabled={props.boardTable[i] ? true : false}
            />
        );
    };

    return (
        <div className="board">
            <div className="row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
}

export default Board

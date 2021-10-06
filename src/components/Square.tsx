import React from 'react'
import { SquareValue } from '../helperFunctions';
import '../styles/square.css';

interface SquareProps {
    value: SquareValue;
    onClick(): void;
    isDisabled: boolean;
}

const Square: React.FC<SquareProps> = props => {

    return (
        <button disabled={props.isDisabled} onClick={() => props.onClick()} className="square">
            <h1 style={{ color: props.value === 'X' ? 'rgb(108, 197, 133)' : "rgb(221, 98, 98)" }}>{props.value}</h1>
        </button >
    )
}

export default Square

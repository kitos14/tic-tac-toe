import React, { useContext } from 'react'
import '../styles/menu.css';
import { Link } from 'react-router-dom';
import startGameSound from '../audioclips/startGameSound.mp3';
import { SoundContext } from '../App';

const Menu: React.FC = () => {
    const soundOn = useContext(SoundContext);
    const playStartGameSound = () => {
        new Audio(startGameSound).play();
    }

    const divs = ['O', 'O', 'X', 'O', 'X', 'O', 'X', 'X', 'O', 'X', 'X', 'O'];

    return (
        <div className="wrapper">
            <div className="menu">
                <div className='logo'>
                    <h1>TicTacToe</h1>
                </div>
                <Link to="/game"><button className="button2" onClick={soundOn ? playStartGameSound : () => { }}>START GAME</button></Link>
            </div>
            <div className="box">
                {
                    divs.map(item => <div className={item}>{item}</div>)
                }
            </div>
        </div>
    )
}

export default Menu

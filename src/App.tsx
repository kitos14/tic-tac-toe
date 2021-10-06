import React, { useState } from 'react';
import './styles/app.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Game from './pages/Game';
import Menu from './pages/Menu';
import ReactHowler from 'react-howler';
import bgSong from './audioclips/bgsong.mp3';
import { BiVolumeFull, BiVolumeMute } from 'react-icons/bi'
import { MdMusicNote, MdMusicOff } from 'react-icons/md'

export const SoundContext = React.createContext<boolean>(true);

const App: React.FC = () => {
  const [music, setMusic] = useState<boolean>(true);
  const [sound, setSound] = useState<boolean>(true);

  return (
    <>
      <button className="musicButton" onClick={() => setMusic(!music)}>{music ? <MdMusicNote size='30' color='rgb(108, 197, 133)' /> : <MdMusicOff size='30' color='rgb(221, 98, 98)' />}</button>
      <button className="soundButton" onClick={() => setSound(!sound)}>{sound ? <BiVolumeFull size='30' color='rgb(108, 197, 133)' /> : <BiVolumeMute size='30' color='rgb(221, 98, 98)' />}</button>
      <ReactHowler
        src={bgSong}
        playing={music}
        loop={true}
      />
      <SoundContext.Provider value={sound}>
        <Router>
          <div className="main">
            <Switch>
              <Route exact path="/">
                <Menu />
              </Route>
              <Route exact path="/game">
                <Game />
              </Route>
            </Switch>
          </div>
        </Router>
      </SoundContext.Provider>
    </>
  );
}

export default App;

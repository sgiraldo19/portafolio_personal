import React from 'react';

import music from '../../assets/music/hyrule_field.mp3';
import { useAudioPlayer } from '../../hooks/useAudioPlayer';

import './soundBar.css';

// REFACTOR: Usar hook personalizado para gestionar audio (S.O.L.I.D - SRP)
const SoundBar = () => {
  const { audioRef, isPlaying, togglePlayPause } = useAudioPlayer(music);

  return (
    <div className="soundBar">
      <div onClick={() => togglePlayPause()} role="button" tabIndex={0} aria-label="Toggle music">
        <div className="play">
          <div className="jukebox"></div>
        </div>
      </div>
      <audio src={music} ref={audioRef} loop />
    </div>
  );
};

export default SoundBar;
// REFACTOR: Hook para gestionar estado de audio - Separación de responsabilidades
import { useState, useRef } from 'react';

/**
 * Hook personalizado para gestionar reproducción de audio
 * Aplica S.O.L.I.D: Single Responsibility
 * @param {string} src - Ruta del archivo de audio
 * @returns {object} Estado y funciones para controlar el audio
 */
export const useAudioPlayer = (src) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const play = () => {
    if (audioRef.current && !isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const pause = () => {
    if (audioRef.current && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return {
    audioRef,
    isPlaying,
    togglePlayPause,
    play,
    pause,
  };
};

// REFACTOR: Hook para cargar componentes con animaciones - Separación de responsabilidades
import { useState, useEffect } from 'react';

/**
 * Hook personalizado para manejar carga de componentes
 * Aplica S.O.L.I.D: Single Responsibility
 * @param {number} delay - Milisegundos de espera
 * @returns {object} Estado de carga
 */
export const useComponentLoader = (delay = 0) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return { isLoading };
};

// REFACTOR: Hook para gestionar modales/popups - Separación de responsabilidades
import { useState, useCallback } from 'react';

/**
 * Hook personalizado para manejar state de un componente modal/popup
 * Aplica S.O.L.I.D: Single Responsibility
 * @param {boolean} initialState - Estado inicial
 * @returns {object} Estado y funciones para controlar modal
 */
export const useModal = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  return {
    isOpen,
    open,
    close,
    toggle,
  };
};

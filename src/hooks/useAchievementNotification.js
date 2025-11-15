// REFACTOR: Hook para gestionar estado de componente - Separación de responsabilidades
import { useState, useEffect } from 'react';

/**
 * Hook personalizado para manejar logros y notificaciones
 * Aplica S.O.L.I.D: Single Responsibility
 * @param {string} page - Identificador de la página
 * @param {function} onAchievementUnlock - Callback cuando se desbloquea un logro
 */
export const useAchievementNotification = (page, onAchievementUnlock) => {
  const [hasNotified, setHasNotified] = useState(false);

  useEffect(() => {
    // Ejecutar callback solo una vez cuando cambia la página
    if (page && !hasNotified) {
      onAchievementUnlock?.(page);
      setHasNotified(true);
    }
  }, [page, hasNotified, onAchievementUnlock]);

  return { hasNotified };
};

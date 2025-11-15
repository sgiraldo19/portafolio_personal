// REFACTOR: Servicio de Logros - S.O.L.I.D Single Responsibility
// Gestiona toda la lógica relacionada con logros desbloqueados

import StorageService from './StorageService';
import { ACHIEVEMENT_KEYS } from '../constants/achievements';

class AchievementService {
  /**
   * Obtiene el estado de un logro
   * @param {string} achievementId - ID del logro
   * @returns {boolean}
   */
  isUnlocked(achievementId) {
    return StorageService.hasItem(achievementId);
  }

  /**
   * Desbloquea un logro
   * @param {string} achievementId - ID del logro
   */
  unlock(achievementId) {
    if (!StorageService.hasItem(achievementId)) {
      StorageService.setItem(achievementId, { unlockedAt: new Date().toISOString() });
      return true; // Retorna true si fue desbloqueado ahora
    }
    return false; // Ya estaba desbloqueado
  }

  /**
   * Obtiene todos los logros desbloqueados
   * @returns {array} Array de IDs de logros desbloqueados
   */
  getUnlockedAchievements() {
    return ACHIEVEMENT_KEYS.filter((key) => this.isUnlocked(key));
  }

  /**
   * Obtiene el progreso general de logros
   * @returns {object} Objeto con total y desbloqueados
   */
  getProgress() {
    const unlockedCount = this.getUnlockedAchievements().length;
    return {
      unlocked: unlockedCount,
      total: ACHIEVEMENT_KEYS.length,
      percentage: (unlockedCount / ACHIEVEMENT_KEYS.length) * 100,
    };
  }

  /**
   * Reinicia todos los logros
   */
  resetAll() {
    ACHIEVEMENT_KEYS.forEach((key) => StorageService.removeItem(key));
  }
}

export default new AchievementService();

// REFACTOR: Servicio de localStorage - S.O.L.I.D Single Responsibility
// Abstrae la lógica de acceso a localStorage para mayor testabilidad

class StorageService {
  /**
   * Obtiene un valor del almacenamiento local
   * @param {string} key - Clave del valor a obtener
   * @returns {any} Valor guardado o null
   */
  getItem(key) {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.error(`Error al obtener ${key} del localStorage:`, error);
      return null;
    }
  }

  /**
   * Guarda un valor en el almacenamiento local
   * @param {string} key - Clave donde guardar
   * @param {any} value - Valor a guardar
   */
  setItem(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error al guardar ${key} en localStorage:`, error);
    }
  }

  /**
   * Elimina un valor del almacenamiento local
   * @param {string} key - Clave a eliminar
   */
  removeItem(key) {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error al eliminar ${key} del localStorage:`, error);
    }
  }

  /**
   * Verifica si una clave existe en localStorage
   * @param {string} key - Clave a verificar
   * @returns {boolean}
   */
  hasItem(key) {
    return localStorage.getItem(key) !== null;
  }

  /**
   * Limpia todos los items del almacenamiento local
   */
  clear() {
    try {
      localStorage.clear();
    } catch (error) {
      console.error('Error al limpiar localStorage:', error);
    }
  }
}

export default new StorageService();

import React from 'react';
import { useEffect } from 'react';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AchievementService from '../../../services/AchievementService';
import { TOAST_CONFIG } from '../../../constants/achievements';

// REFACTOR: Simplificar lógica usando servicio (S.O.L.I.D - SRP)
// Extraer operaciones de localStorage a servicio dedicado
const Achievement = (props) => {
  const showAchievementToast = () => {
    toast('🏆 Logro desbloqueado!', TOAST_CONFIG);
  };

  const page = props.page;

  useEffect(() => {
    if (page && AchievementService.unlock(page)) {
      // Solo mostrar notificación si fue desbloqueado ahora
      showAchievementToast();
    }
  }, [page]);

  return <></>;
};

export default Achievement;
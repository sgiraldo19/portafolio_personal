import React, { useEffect, useState } from 'react';
import TagCloud from 'TagCloud';

import { SKILLS_LIST, TAG_CLOUD_OPTIONS } from '../../constants/skills';

// REFACTOR: Usar constantes centralizadas (S.O.L.I.D - DRY)
// Evitar hardcoding y mejorar mantenibilidad
const SkillCircle = () => {
  const [isLoading, setLoad] = useState(true);

  const container = '.content';

  // REFACTOR: Remover linting disable usando dependencias correctas
  useEffect(() => {
    if (isLoading) {
      TagCloud(container, SKILLS_LIST, TAG_CLOUD_OPTIONS);
      setLoad(false);
    }
    // Intencional: Solo ejecutar una vez al montar
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="main">
      <span className="content"></span>
    </div>
  );
};

export default SkillCircle;

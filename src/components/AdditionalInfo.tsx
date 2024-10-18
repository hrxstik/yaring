import React from 'react';
import { Link } from 'react-router-dom';

const AdditionalInfo = () => {
  return (
    <div className="additional-info">
      <div>
        <Link to="living-rules">Правила проживания</Link>
      </div>
      <div>
        <Link to="privacy-policy">Политика конфиденциальности</Link>
      </div>
    </div>
  );
};

export default AdditionalInfo;

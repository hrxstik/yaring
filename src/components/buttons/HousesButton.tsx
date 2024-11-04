import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  className?: string;
}

const HousesButton: React.FC<Props> = ({ className }) => {
  return (
    <Link to="pricing" className={className}>
      <span>Подробнее о домиках</span>
    </Link>
  );
};

export default HousesButton;

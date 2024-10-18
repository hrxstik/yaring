import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

const Navigation = () => {
  return (
    <div className="navigation">
      <Logo />
      <Link to="">О нас</Link>
      <Link to="pricing">Цены</Link>
      <Link to="faq">Частые вопросы</Link>
      <Link to="contact">Контакты</Link>
    </div>
  );
};

export default Navigation;

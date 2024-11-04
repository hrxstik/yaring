import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import { useScroll } from './ScrollContext';

const Navigation = () => {
  const { scrollToElement } = useScroll();

  return (
    <div className="navigation">
      <Logo />
      <span onClick={() => scrollToElement('about')}>О нас</span>
      <span onClick={() => scrollToElement('houseInfo')}>Домики</span>
      <Link to="pricing">Цены</Link>
      <Link to="faq">Частые вопросы</Link>
      <Link to="contact">Контакты</Link>
    </div>
  );
};

export default Navigation;

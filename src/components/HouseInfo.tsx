import React from 'react';
import { useScroll } from './Navigation/ScrollContext';

const HouseInfo = () => {
  const { refs } = useScroll();
  return (
    <div ref={refs.houseInfo} className="grid grid-cols-2  bg-yaring-blue text-white">
      <section className="py-8 px-4">
        <h2 className="text-3xl font-bold mb-4 text-white">Домики</h2>
        <p className="mb-6 text-white">
          Ваш идеальный уголок уединения и комфорта на природе. Погрузитесь в атмосферу уюта и стиля
          в нашем уникальном доме. С его характерной архитектурой и современными удобствами, этот
          дом станет идеальным местом для отдыха от повседневной суеты.
        </p>

        <h3 className="text-2xl font-semibold mb-4">Описание дома</h3>
        <ul className="list-disc list-inside mb-6">
          <li>
            <strong>Просторные помещения:</strong> Высокие потолки и открытая планировка создают
            ощущение простора и свободы. Большие окна наполняют комнаты естественным светом и
            открывают захватывающие виды на озера и лес.
          </li>
          <li>
            <strong>Комфорт и уют:</strong> Внутреннее оформление сочетает современный стиль с
            элементами природы. Уютная гостиная, полностью оборудованная кухня и комфортные спальни
            обеспечат вам все необходимое для расслабляющего отдыха.
          </li>
          <li>
            <strong>Терраса для отдыха:</strong> Наслаждайтесь утренним кофе или вечерними
            посиделками на открытой террасе, где вы сможете любоваться закатом и слушать звуки
            природы.
          </li>
        </ul>

        <h3 className="text-2xl font-semibold mb-4">Удобства</h3>
        <ul className="list-disc list-inside mb-6">
          <li>
            <strong>Современные технологии:</strong> Проекторы в домах, выводящие картинку на стену,
            и система кондиционирования обеспечат вам комфорт во время отдыха.
          </li>
          <li>
            <strong>Зона для барбекю:</strong> Для любителей готовить на свежем воздухе мы
            предоставляем гриль и уютную зону для пикника.
          </li>
        </ul>

        <h3 className="text-2xl font-semibold mb-4">Расположение</h3>
        <p className="mb-6 text-white">
          Наш афрейм дом расположен в живописном месте, окруженном лесом и озером.
        </p>
      </section>
    </div>
  );
};

export default HouseInfo;

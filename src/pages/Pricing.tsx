import React from 'react';
import HomeButton from '../components/buttons/HomeButton';
import ImageSlider from '../components/ImageSlider';
import PricingInfo from '../components/PricingInfo';
import { HouseInfo } from '../components/HouseInfo';

const Pricing = () => {
  return (
    <div className="pricing page">
      <div className="grid grid-cols-2 grid-rows-1">
        <ImageSlider />
        <PricingInfo
          header="Треугольный домик 45 кв.м"
          info="
          На нашей территории находится четыре Треугольных домика
          A-Frame 45 кв.м. Домики совершенно одинаковые и отличаются только названиями: «Дубок», «Березка», «Рябинка», «Елочка». Наши лесные шале подходят для поездки одному, вдвоем, семьей или небольшой компанией до 4-х человек."
          price="7000"
          time="сутки"
          checkIn="14.00"
          checkOut="11.00"
          button={true}
        />
      </div>
      <HouseInfo
        kitchenProps={[
          'Чайник',
          'Тостер',
          'Варочная панель',
          'Посуда и столовые приборы',
          'Сахар, соль, перец, кофе, чай',
          'Холодильник',
          'Посудомоечная машина',
          'Рожковая кофемашина',
        ]}
        livingroomProps={[
          'Проектор',
          'Раскладной диван',
          'Комод',
          'Настенная вешалка',
          'Обеденная зона',
        ]}
        bathRoomProps={['Душ', 'Фег', 'Жидкое мыло', 'Полотенца', 'Унитаз']}
        terraceProps={[
          'Гриль-очаг',
          'Дрова (вязанка дров предоставляется бесплатно, дополнительные дрова можно приобрести у нас или привезти с собой)',
          'Комфортные кресла',
        ]}
        bedroomProps={['Двухспальное место с комфортным матрасом']}
        additionalProps={['Бесплатный Wi-Fi', 'Теплый пол', 'Кондиционер']}
      />
      <div className="grid grid-cols-2 grid-rows-1">
        <ImageSlider />
        <PricingInfo
          header="Баня"
          info="
          Банный комплекс можно арендовать без проживания на территории. Вместимость парной до 6 человек, вместимость комнаты отдыха до 12 человек.
          Минимальное время аренды — 2 часа. Топим баню к Вашему приезду — звоните заранее!"
          price="3500"
          time="час"
          checkIn=""
          checkOut=""
          button={true}
        />
      </div>
      <HomeButton />
    </div>
  );
};

export default Pricing;

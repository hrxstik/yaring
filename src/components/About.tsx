import React from 'react';
import { useScroll } from './Navigation/ScrollContext';
import BookingButton from './buttons/BookingButton';
import ImageSlider from './ImageSlider';

interface Props {
  className?: string;
}

export const About: React.FC<Props> = () => {
  const { refs } = useScroll();
  return (
    <div ref={refs.about} className="grid grid-cols-2">
      <ImageSlider />
      <section className="py-8 px-4">
        <h2 className="text-3xl font-bold mb-4">О нас</h2>
        <p className="mb-4">
          База отдыха, расположенная в живописном месте рядом с лесом и озером, предлагает идеальные
          условия для уединения и комфорта на природе. Здесь вы найдете комфортабельные домики и
          номера, оборудованные всем необходимым для комфортного проживания: кухонной зоной, ванной
          комнатой и террасой с видом на природу. У каждого домика есть зона для барбекю, а также
          места для отдыха с беседками, где можно насладиться чашкой кофе. Гостям доступны
          разнообразные активности: пешие прогулки, рыбалка, катание на лодках и лошадиные прогулки.
          Окружающий лес полон жизни, а озеро идеально подходит для купания и зимних видов спорта.
          Эта база станет отличным местом для семейного отдыха, романтического уикенда или дружеской
          встречи.
        </p>
        <BookingButton className="primary-button" />
      </section>
    </div>
  );
};

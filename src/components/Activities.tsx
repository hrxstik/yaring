import ActivityCard from './ActivityCard';
import { useScroll } from './Navigation/ScrollContext';

const Activities = () => {
  const { refs } = useScroll();

  return (
    <div>
      <div ref={refs.activities} className="py-6" id="activities">
        <h2 className="blue-block max-w-fit">Активности</h2>
      </div>
      <div className="grid grid-cols-2 grid-rows-3">
        <ActivityCard heading="Прогуляться по лесу" description="" image="" />
        <ActivityCard heading="Порыбачить на озере" description="" image="" />
        <ActivityCard heading="Прокатиться на лошади" description="" image="" />
        <ActivityCard heading="Поплавать на лодке или каноэ" description="" image="" />
        <ActivityCard heading="Приготовить что-нибудь на природе" description="" image="" />
        <ActivityCard heading="Искупаться в озере" description="" image="" />
      </div>
    </div>
  );
};

export default Activities;

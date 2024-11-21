import React from 'react';
import ActivityCard from './ActivityCard';
import { useScroll } from './Navigation/ScrollContext';
import { useSelector } from 'react-redux';
import { fetchActivitiesImages } from '../redux/slices/activivitySlice';
import { RootState, useAppDispatch } from '../redux/store';

const Activities = () => {
  const { refs } = useScroll();
  const dispatch = useAppDispatch();

  const { headings, images, descriptions, loading, error } = useSelector(
    (state: RootState) => state.activitiesReducer,
  );

  React.useEffect(() => {
    dispatch(fetchActivitiesImages());
  }, [dispatch]);

  return (
    <div>
      <div ref={refs.activities} className="py-6" id="activities">
        <h2 className="blue-block max-w-fit">Активности</h2>
      </div>
      {loading && <p>Загрузка изображений...</p>}
      {error && <p>{error}</p>}
      <div className="grid grid-cols-2 grid-rows-3">
        {headings.map((heading, index) => (
          <ActivityCard
            key={index}
            heading={heading || ''}
            description={descriptions[index] || ''}
            image={images[index] || ''}
          />
        ))}
      </div>
    </div>
  );
};

export default Activities;

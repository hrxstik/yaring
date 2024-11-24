import React from 'react';

interface Props {
  heading: string;
  description: string;
  image: string;
}

const ActivityCard: React.FC<Props> = ({ heading, description, image }) => {
  return (
    <div className="">
      <h2>{heading}</h2>
      <img src={image} alt="Не удалось загрузить картинку" />
      {description}
    </div>
  );
};

export default ActivityCard;

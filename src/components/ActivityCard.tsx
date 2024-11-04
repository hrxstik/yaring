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
    </div>
  );
};

export default ActivityCard;

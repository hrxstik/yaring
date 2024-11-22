import React from 'react';

interface Props {
  className?: string;
  kitchenProps: string[];
  livingroomProps: string[];
  bathRoomProps: string[];
  terraceProps: string[];
  bedroomProps: string[];
  additionalProps: string[];
}

export const HouseInfo: React.FC<Props> = ({
  className,
  kitchenProps,
  livingroomProps,
  bathRoomProps,
  terraceProps,
  bedroomProps,
  additionalProps,
}) => {
  return (
    <div className={className}>
      <p className="blue-block max-w-fit mb-4">Внутри каждого домика:</p>
      <div className="grid grid-cols-4 grid-rows-2 gap-2">
        <div className="card col-span-1 row-span-2">
          <p className="font-medium">Кухня</p>
          <ul>
            {kitchenProps.map((prop) => (
              <li>- {prop}</li>
            ))}
          </ul>
        </div>
        <div className="card col-span-1 ">
          <p className="font-medium">Гостиная</p>
          <ul>
            {livingroomProps.map((prop) => (
              <li>- {prop}</li>
            ))}
          </ul>
        </div>
        <div className="card col-span-1">
          <p className="font-medium">Ванная комната</p>
          <ul>
            {bathRoomProps.map((prop) => (
              <li>- {prop}</li>
            ))}
          </ul>
        </div>
        <div className="card col-span-1 row-span-2">
          <p className="font-medium">Терасса и зона отдыха</p>
          <ul>
            {terraceProps.map((prop) => (
              <li>- {prop}</li>
            ))}
          </ul>
        </div>
        <div className="card col-span-1">
          <p className="font-medium">Спальня</p>
          <ul>
            {bedroomProps.map((prop) => (
              <li>- {prop}</li>
            ))}
          </ul>
        </div>
        <div className="card col-span-1">
          <p className="font-medium">А также</p>
          <ul>
            {additionalProps.map((prop) => (
              <li>- {prop}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

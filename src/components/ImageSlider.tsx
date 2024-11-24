import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../redux/store';
import { fetchCommonImages } from '../redux/slices/imageSlice';

const ImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const dispatch = useAppDispatch();
  const images = useSelector((state: RootState) => state.imageReducer.images);

  useEffect(() => {
    dispatch(fetchCommonImages());
  }, [dispatch]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative py-8 px-4">
      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        className="w-[512px] h-[512px] object-cover rounded-lg"
      />
      {images.length && (
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow">
          &#60;
        </button>
      )}

      {images.length && (
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow">
          &#62;
        </button>
      )}
    </div>
  );
};

export default ImageSlider;

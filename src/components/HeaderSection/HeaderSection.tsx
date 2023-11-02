import { ReactNode, useEffect, useState } from 'react';
import HeaderNavBar from '../HeaderNavBar/HeaderNavBar';
import PaginationBullet from '../PaginationBullet/PaginationBullet';

import scroll from '../../assets/scroll.png';

type Props = {
  images: any[];
  children: ReactNode[];
};
const HeaderSection = ({ images, children }: Props) => {
  const [currentSliderImage, setCurrentSliderImage] = useState(0);

  const nextSlide = () => {
    setCurrentSliderImage(prevIndex => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentSliderImage]);

  return (
    <div className="header-section-container">
      <div className="inner-container">
        <div className="main-content">
          <HeaderNavBar />
          <div className="children">{children[currentSliderImage]}</div>
        </div>
        <div className="gradient">
          <div className="bullets">
            {images.map((image, index) => (
              <PaginationBullet key={index} active={currentSliderImage === index} />
            ))}
          </div>
          <img src={scroll} alt="Scroll images" className="scroll" />
        </div>
      </div>
      <img src={images[currentSliderImage]} alt={`Hero images-with${currentSliderImage}`} />
    </div>
  );
};

export default HeaderSection;

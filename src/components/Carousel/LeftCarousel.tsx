import { ReactNode, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type Props = {
  children: ReactNode;
};
const LeftSideCarousel = ({ children }: Props) => {
  const sliderRef: any = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    swipeToSlide: true,
    adaptiveHeight: true,
    rtl: true,
  };

  const handleMouseWheel = (e: any) => {
    if (e.deltaY > 0) {
      sliderRef.current.slickPrev();
    } else {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div onWheel={handleMouseWheel} className="carousel-container">
      <Slider ref={sliderRef} {...settings}>
        {children}
      </Slider>
    </div>
  );
};

export default LeftSideCarousel;

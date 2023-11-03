import { IGallery } from '../../models/Gallery';
import Button from '../Button/Button';
import background from '../../assets/welcome.svg';
import GalleryCard from './GalleryCard/GalleryCard';
import LeftSideCarousel from '../Carousel/LeftCarousel';
import { galleries } from '../../constants/constants';
const Gallery = () => {
  return (
    <div className="gallery-container">
      <div className="header">
        <span className="title">Get a feeling for our Gallery</span>
        <div className="button-container">
          <Button text="explore to full gallery" />
          <Button text="Contact us" variant="transparent" active />
        </div>
      </div>

      <div className="gallery-list">
        <LeftSideCarousel>
          {galleries.map((gallery: IGallery, index) => (
            <GalleryCard
              key={index}
              image={gallery.image}
              title={gallery.title}
              artist={gallery.artist}
              year_of_creation={gallery.year_of_creation}
              price={gallery.price}
            />
          ))}
        </LeftSideCarousel>
      </div>
    </div>
  );
};

export default Gallery;

import HeaderSection from '../../components/HeaderSection/HeaderSection';
import welcome from '../../assets/welcome.svg';
import gallery from '../../assets/gallery.svg';
import about from '../../assets/about.svg';

import { Welcome } from '../../components/Welcome/Welcome';
import Studio from '../../components/Studio/Studio';
import Gallery from '../../components/Gallery/Gallery';

export const HomePage = () => {
  const images = [welcome, gallery, about];
  const children = [
    <Welcome
      key={'1'}
      welcome="Welcome to"
      description="a collective space for Art, Artists & those who love fine Art"
      btnText="Work with us"
    />,
    <Welcome key={'2'} description="EXPLORE OUR DIGITAL GALLERY" btnText="To the digital gallery" />,
    <Welcome key={'3'} description="FIND OUT ABOUT US" btnText="Get to know Alsamar" />,
  ];
  return (
    <div className="home-page-container">
      <HeaderSection images={images} children={children} />
      <Studio />
      <Gallery />
    </div>
  );
};

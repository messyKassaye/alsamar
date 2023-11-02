import HeaderSection from '../../components/HeaderSection/HeaderSection';
import background from '../../assets/background.png';
import gallery from '../../assets/gallery.png';
import about from '../../assets/about.png';

import { Welcome } from '../../components/Welcome/Welcome';

export const HomePage = () => {
  const images = [background, gallery, about];
  const children = [
    <Welcome
      key={'1'}
      welcome="Welcome to"
      description="a collective space for Art, Artists & those who love fine Art"
      btnText="Work with us"
    />,
    <Welcome key={'2'} description="EXPLORE OUR DIGITAL GALLERY" btnText="to the digital gallery" />,
    <Welcome key={'3'} description="FIND OUT ABOUT US" btnText="get to know Alsamar" />,
  ];
  return (
    <div>
      <HeaderSection images={images} children={children} />
    </div>
  );
};

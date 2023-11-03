import Typography from './Typography';

type Props = {
  image: string;
  title: string;
  artist: string;
  year_of_creation: string;
  price: number;
};
const GalleryCard = ({ image, title, artist, year_of_creation, price }: Props) => {
  return (
    <div className="card-container">
      <div className="images">
        <img src={image} alt={`${title} images`} />
        <Typography first_title={'Title'} second_title={title} />
        <Typography first_title={'Artist name'} second_title={artist} />
        <Typography first_title={'Year of creation'} second_title={year_of_creation} />
        <Typography first_title={'Price'} second_title={`${price.toLocaleString()} $`} />
      </div>
    </div>
  );
};

export default GalleryCard;

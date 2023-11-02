type Props = {
  active?: boolean;
};
const PaginationBullet = ({ active }: Props) => {
  return <div className={`swiper-pagination-bullet ${active && 'swiper-pagination-bullet-active'}`} />;
};

export default PaginationBullet;

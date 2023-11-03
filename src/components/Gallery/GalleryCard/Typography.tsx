type Props = {
  first_title: string;
  second_title: string;
};
const Typography = ({ first_title, second_title }: Props) => {
  return (
    <div className="typography">
      <span>{first_title}</span>
      <span>{second_title}</span>
    </div>
  );
};

export default Typography;

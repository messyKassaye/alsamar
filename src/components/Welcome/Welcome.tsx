import Button from '../Button/Button';

type Props = {
  welcome?: string;
  description: string;
  btnText: string;
};
export const Welcome = ({ welcome, description, btnText }: Props) => {
  return (
    <div className="welcome-container">
      {welcome && <span className="title">Welcome to</span>}
      <span className="description">{description}</span>
      <Button text={btnText} />
    </div>
  );
};

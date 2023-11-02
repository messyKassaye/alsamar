import Button from '../Button/Button';

const Studio = () => {
  return (
    <div className="studio-container">
      <div className="three-d">
        <span>Alsamar art studio</span>
      </div>
      <div className="studio-footer">
        <span className="title">Get a feeling for our Gallery</span>
        <div className="button-container">
          <Button text="explore to full gallery" />
          <Button text="Contact us" variant="transparent" active />
        </div>
      </div>
    </div>
  );
};

export default Studio;

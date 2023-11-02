import Button from '../Button/Button';
import logo from '../../assets/logo.svg';
const HeaderNavBar = () => {
  return (
    <div className="navbar-container">
      <img src={logo} alt="logo" className="logo" />
      <div className="menu-container">
        <Button text="Digital Gallery" variant="transparent" />
        <Button text="About us" variant="transparent" />
        <Button text="Contact Us" variant="transparent" active />
      </div>
    </div>
  );
};

export default HeaderNavBar;

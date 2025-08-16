import { isOpenProps } from "../../types/PropsTypes";

const NavBar: React.FC<isOpenProps> = ({ isOpen }) => {
  return (
    <ul className={`navlist ${isOpen ? "open" : ""}`}>
      <li>
        <a href='#home' className=''>
          Home
        </a>
      </li>
      <li>
        <a href='#about'>About</a>
      </li>
      <li>
        <a href='#services'>Services</a>
      </li>
      <li>
        <a href='#portfolio'>Portfolio</a>
      </li>
      <li>
        <a href='#blog'>Blog</a>
      </li>
      <li>
        <a href='#contact'>Contact</a>
      </li>
    </ul>
  );
};

export default NavBar;

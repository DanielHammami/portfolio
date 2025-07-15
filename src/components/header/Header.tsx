import { useState } from "react";

import "../../styles/header.scss";
import NavBar from "./NavBar";
import Button from "../common/Button";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='header'>
      <a href='#home' className='logo'>
        <span>P</span>
        ortfolio.
      </a>
      <NavBar isOpen={isOpen} />
      <Button toggle={toggle} />
    </header>
  );
}

export default Header;

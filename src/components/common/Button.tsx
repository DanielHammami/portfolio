import { useState } from "react";

type ButtonProps = {
  toggle: () => void;
};

const Button: React.FC<ButtonProps> = ({ toggle }) => {
  const [isActive, setIsActive] = useState(false);

  const handleAction = (): void => {
    toggle();
    setIsActive(!isActive);
  };

  return (
    <div className='right-header'>
      <a href='#contact' className='btn'>
        Let's chat
      </a>
      <div
        className={`menu-icon ${isActive ? "active" : ""}`}
        onClick={() => handleAction()}>
        <div className='bar'></div>
      </div>
    </div>
  );
};

export default Button;

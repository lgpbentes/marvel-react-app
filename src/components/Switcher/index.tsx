import React, { useState } from 'react';

import './styles.css';

interface SwitcherProps {
  handleClick: Function
}

const Switcher: React.FC<SwitcherProps> = ({ handleClick }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <label className="switch">
      <input type="checkbox" readOnly onClick={() => {
        const newValue = !isChecked;
        setIsChecked(newValue);
        handleClick(newValue);
      }} checked={isChecked} />
      <span className="slider"></span>
    </label>
  );
}

export default Switcher;

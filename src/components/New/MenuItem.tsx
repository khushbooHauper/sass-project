import React, { useState } from 'react';
import MegaMenu from './MegaMenu';


const MenuItem = ({ title }:any) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="menu-item"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a href="#">{title}</a>
      {isHovered && title ==='CATEGORIES' && (<MegaMenu />) }
      
    </div>
  );
};

export default MenuItem;

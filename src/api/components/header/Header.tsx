import React from "react";
import "./header.scss";

import Avatar from "../avatar/Avatar";

interface HeaderProps {
  name: string;
}

const Header: React.FC<HeaderProps> = ({ name }) => {
  return (
    <div className="chat__header header">
      <Avatar color="white" />
      <div className="header__content">
        <div className="header__name">{name}</div>
        <div className="header__text">
          <span>AI</span>
          bot
        </div>
      </div>
    </div>
  );
};

export default Header;

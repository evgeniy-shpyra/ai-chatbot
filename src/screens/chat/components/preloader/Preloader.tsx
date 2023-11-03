import React from "react";
import "./preloader.scss";
import Avatar from "../avatar/Avatar";

const Preloader = () => {
  const [ellipsis, setEllipsis] = React.useState("...");

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setEllipsis((prev) => {
        const countEll = prev
          .split("")
          .filter((char: string) => char == ".").length;
        if (countEll === 3) return "";
        return ".".repeat(countEll + 1);
      });
    }, 250);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="preloader">
      <div className="preloader__avatar">
        <Avatar color="black" />
      </div>
      <div className="preloader__text">Thinking{ellipsis}</div>
    </div>
  );
};

export default Preloader;

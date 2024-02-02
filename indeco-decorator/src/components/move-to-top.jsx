// ScrollComponent.js

import React, { useEffect, useState } from "react";

import { RiArrowDropUpLine } from "react-icons/ri";
const ScrollComponent = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={isScrolled ? "scroll visible" : "scroll"}
      onClick={scrollToTop}
    >
      <RiArrowDropUpLine className="ml-[5px] mt-1 text-[50px]" />
    </div>
  );
};

export default ScrollComponent;

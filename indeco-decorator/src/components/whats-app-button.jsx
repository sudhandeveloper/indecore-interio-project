import React from "react";
import { ImWhatsapp } from "react-icons/im";
const WatsApp = () => {
  return (
    <>
      <a
        href="https://api.whatsapp.com/send?phone=++919633461561&text=Message from your website."
        class="float"
        target="blank"
      >
        <ImWhatsapp className="my-float" />
      </a>
    </>
  );
};

export default WatsApp;

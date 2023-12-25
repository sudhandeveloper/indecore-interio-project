import React from "react";
import LogoMain from "../../assets/images/home/LogoMain/LOGOMAIN.png";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import Footerbg from "../../assets/images/home/footerbg.webp";
import { Link } from "react-router-dom";
import ScrollComponent from "../../components/move-to-top";

import Whatsapp from "../../components/whats-app-button";
// import { RiArrowDropUpLine } from "react-icons/ri";
// bg-[#00677f]
const Footer = () => {
  return (
    <>
      <section>
        <div className="relative w-full h-full ">
          <div>
            <section className="pt-10 pb-16 bg-gray-200">
              <div className="px-10 pb-10 max-sm:pb-3">
                <div className="flex flex-wrap gap-20 mt-5 max-sm:gap-5">
                  <div className="w-[20%] h-auto max-md:w-full">
                    <img
                      className="object-contain "
                      src={LogoMain}
                      alt="loading"
                    />
                    <p className="mt-5 text-justify text-black font-Barlow">
                      At Inddecore Interior, we are dedicated to redefining
                      interior spaces, making them more functional, beautiful,
                      and reflective of your unique style.
                    </p>
                  </div>

                  <div className="">
                    <div className="">
                      <h2 className="text-[23px]   text-black">
                        Important Links
                      </h2>

                      <ul className="mt-2 font-medium text-black font-Barlow">
                        <li className="flex ">
                          <AiOutlineDoubleRight className="mt-1 mr-4 text-red-600" />
                          <span className="">
                            {" "}
                            <Link to={"about-us"}>About us</Link>{" "}
                          </span>
                        </li>
                        <li className="flex ">
                          <AiOutlineDoubleRight className="mt-1 mr-4 text-red-600" />
                          <span>
                            <Link to={"Home-interiories"}>Services</Link>{" "}
                          </span>
                        </li>
                        <li className="flex ">
                          <AiOutlineDoubleRight className="mt-1 mr-4 text-red-600" />
                          <span>
                            <Link to={"Gallary"}>GALLERY</Link>{" "}
                          </span>
                        </li>
                        <li className="flex ">
                          <AiOutlineDoubleRight className="mt-1 mr-4 text-red-600" />
                          <span>
                            <Link to={"Contact-us"}>Contact Us</Link>{" "}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="">
                    <div>
                      <h2 className="text-[23px]   text-black">Our Services</h2>

                      <ul className="mt-2 font-medium text-black font-Barlow">
                        <li className="flex ">
                          <AiOutlineDoubleRight className="mt-1 mr-4 text-red-600" />
                          <span className=""> Renovations and Remodels</span>
                        </li>
                        <li className="flex ">
                          <AiOutlineDoubleRight className="mt-1 mr-4 text-red-600" />
                          <span>
                            <Link to={"Commercial-interior"}>Commercial</Link>{" "}
                          </span>
                        </li>
                        <li className="flex ">
                          <AiOutlineDoubleRight className="mt-1 mr-4 text-red-600" />
                          <span>
                            <Link to={"Corporate-interior"}>
                              Corporate Interiors
                            </Link>{" "}
                          </span>
                        </li>
                        <li className="flex ">
                          <AiOutlineDoubleRight className="mt-1 mr-4 text-red-600" />
                          <span>
                            <Link to={"Home-interiories"}>
                              Full Home Furnishing
                            </Link>{" "}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="w-[25%] max-md:w-full">
                    <div>
                      <h2 className="text-[23px]   text-black">
                        <Link to={"Contact-us"}> Contact Us</Link>
                      </h2>

                      <ul className="mt-2 font-medium text-black font-Barlow">
                        <li className="flex ">
                          <BsFillTelephoneForwardFill className="mt-1 mr-4 text-red-600" />
                          <span className=""> +91 96334 61561</span>
                        </li>
                        <li className="flex ">
                          <BiLogoGmail className="mt-1 mr-4 text-red-600" />
                          <span>info.idinterio@gmail.com </span>
                        </li>
                        <li className="flex ">
                          <FaLocationDot className="mt-1 text-[25px] mr-4 text-red-600" />
                          <span className="text-justify">
                            Inddecore Interio Opposite – Apollo Tyres Perambra –
                            Chalakudi – Thrissur 680689
                          </span>
                        </li>
                        <li className="flex ">
                          <FaLocationDot className="mt-1 text-[25px] mr-4 text-red-600" />
                          <span className="text-justify">
                            Inddecore Interio (Branch) Near Roman Catholic Church
                            Viyyur-Thrissur 680010
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="absolute bottom-0 ">
            <img src={Footerbg} alt="loading" />
          </div>
        </div>

        <div className="flex justify-between px-10 py-2 text-white bg-gray-700 font-Barlow">
          <p>Design and Developed by Honey Iconics.</p>
          <p className="text-end">
            Copyright © Inddo Interiors All rights reserved
          </p>
        </div>
        <ScrollComponent />
        <Whatsapp />
      </section>

      {/* ========================== */}
    </>
  );
};

export default Footer;

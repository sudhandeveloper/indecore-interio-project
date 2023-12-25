import React, { useState } from "react";
import HomeInteriorBannerImage from "../../assets/images/Services-images/Home-interior-images/Home-Interior-image.jpg";

import One from "../../assets/images/Services-images/Home-interior-images/One.jpg";
// import Newone from "../../components/service-components/home-interior";
import BedRoom from "../../assets/images/Services-images/Home-interior-images/BedRoom.jpg";
import Wardboard from "../../assets/images/Services-images/Home-interior-images/wardboard.jpg";
import LivingRoom from "../../assets/images/Services-images/Home-interior-images/Livingroom.jpg";
import Bathroom from "../../assets/images/Services-images/Home-interior-images/BathRoom.jpg";
import PoojaRoom from "../../assets/images/Services-images/Home-interior-images/pooja-room.jpg";
import KidsRoom from "../../assets/images/Services-images/Home-interior-images/kids-room.webp";
import Cocakary from "../../assets/images/Services-images/Home-interior-images/Cocary.jpg";
import Utility from "../../assets/images/Services-images/Home-interior-images/utility.jpg";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Import your asset images

const images = [
  { src: One, name: "One" ,id:1},
  { src: BedRoom, name: "Bedroom" ,id:2},
  { src: Wardboard, name: "Wardboard" },
  { src: LivingRoom, name: "Living Room" },
  { src: Bathroom, name: "Bathroom" },
  { src: PoojaRoom, name: "Pooja Room" },
  { src: KidsRoom, name: "Kids Room" },
  { src: Cocakary, name: "Cocakary" },
  { src: Utility, name: "Utility" },
];

const HomeInterior = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Elevate Your Space with Inddecore Interior's Keralan Home Interior
          Expertise."
        </title>
        <meta
          name="description"
          content="Inddecore Interior is your partner in creating bespoke home interiors in the heart of Kerala. Explore our expert design services to transform your living spaces."
        />
        <link
          rel="canonical"
          href="https://inddecoreinteriors.com/home-interior"
        />
      </Helmet>

      <section>
        <div className="relative h-96 max-md:h-[500px]">
          <img
            className="object-cover w-full h-full"
            src={HomeInteriorBannerImage}
            alt="loading"
          />

          <div className="absolute top-0 w-full h-full px-16 py-10 Contact-banner"></div>

          <div className="absolute top-0 z-10 w-full h-auto px-16 pt-20 max-sm:px-3">
            <h2 className="  text-white text-thirtyfivepixls font-popins ">
              HOME INTERIOR DESIGNERS IN KERALA
            </h2>
            <h2 className=" text-white text-thirtyfivepixls font-popins ">
              INDDECORE INTERIO
            </h2>
            <div className="w-20 h-[1px] bg-red-600"></div>
            <Link to={"/Contact-us"}>
              {" "}
              <button className="w-auto px-5 py-1 mt-5 font-bold text-white uppercase bg-red-600 font-cormantThiner tracking-wider]">
                Hire us
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================== Best Residential Interior Designers in Chennai ============= */}
      <section>
        <div className="mt-10">
          <h2 className="text-thirtyfivepixls max-md:px-5 max-md:text-[25px] sm:text-center text-red-600 font-medium   font-popins ">
            DESIGNERS FOR HOME INTERIOR
          </h2>

          <h2 className="md:text-thirtyfivepixls text-[20px] font-popins uppercase max-lg:px-20  max-sm:px-6  px-56  sm:text-center text-gray-600   ">
            WE UNDERSTANDS THAT YOUR HOME YOUR PERSONALITY AND TASTE.
          </h2>

          <center>
            <div className="w-36 h-[2px] mt-5 bg-red-600"></div>
          </center>

          <p className="px-16 mt-5 font-bold text-justify sm:text-center text-[22px] text-gray-600 max-md:px-10 max-sm:px-6 font-cormantThiner">
            Our "Home Interior" services go beyond mere design, we breathe life
            into your ideas, enhancing your living spaces with meticulous
            planning, artful craftsmanship, and an unwavering commitment to
            quality. Whether it's your living room, bedroom, kitchen, or any
            other area of your home, we specialize in turning your vision into
            reality.
          </p>
        </div>

        {/* <Cards img={One} heading="Modular Kitchen" />

<Cards img={BedRoom} heading="Bed Room" />

<Cards img={Wardboard} heading="wardrobes and loft" />

<Cards img={LivingRoom} heading="Living Room" />

<Cards img={Bathroom} heading="Bath Room" />

<Cards img={PoojaRoom} heading="Pooja Room " />

<Cards img={KidsRoom} heading="Kids Room" />

<Cards img={Cocakary} heading="Crockery Unit" />

<Cards img={Utility} heading="Utility Area Space" /> */}

        {/* ====================================================================== */}

        <section>
          <div className="px-16 mt-16 max-md:px-6">
            <section className="py-6">

              <div className="container flex flex-col justify-center p-4 mx-auto">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">
                  {images.map((image, index) => (

                    <div key={index} className="relative">
                      <div className="absolute top-0 z-10 w-full h-full bg-gray-800 opacity-40"></div>
                      <img
                        className="object-cover w-full h-[350px]"
                        src={image.src}
                        alt={image.name}
                      />

                      <div
                        className="absolute top-0 z-20 w-full h-full pt-56 px-11"
                        key={index}
                        onClick={() => {
                          
                          setOpen(true);
                          Lightbox.current && Lightbox.current.goToSlide(index);
                        }}
                      >

                        <div className="h-[50%]">
                          <h2 className="text-white font-cormantThiner font-extrabold text-[35px]">
                            {image.name}
                          </h2>
                          <div className="w-20 h-1 mb-2 bg-red-600"></div>
                        </div>

                      </div>
                    </div>
                  ))}
                  <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    slides={images.map((image ) => ({ src: image.src }))}
                  />
                </div>
                
              </div>
            </section>
          </div>
        </section>
      </section>
    </>
  );
};

export default HomeInterior;

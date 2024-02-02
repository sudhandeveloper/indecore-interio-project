import React from "react";
import CommercialImage from "../../assets/images/Services-images/Commercial-image-interior/Commercial-image-three.jpg";
// import CommercialInteriorComponent from "../../components/service-components/commercal-interior";
import Showroom from "../../assets/images/Services-images/Commercial-image-interior/Showroom.jpg";
import BeaytyParlour from "../../assets/images/Services-images/Commercial-image-interior/Beauty-parlour.jpeg";
import Saloon from "../../assets/images/Services-images/Commercial-image-interior/Saloon.jpg";
import ReadymadeShops from "../../assets/images/Services-images/Commercial-image-interior/readymadeshop.jpg";
import Cardshowroom from "../../assets/images/Services-images/Commercial-image-interior/Carshowroom.jpg";
import Bakery from "../../assets/images/Services-images/Commercial-image-interior/Bakery.jpg";
import Reasturent from "../../assets/images/Services-images/Commercial-image-interior/Reasturent.jpg";
import RetailShowroom from "../../assets/images/Services-images/Commercial-image-interior/Retailshowroom.jpg";
import CorporateOffice from "../../assets/images/Services-images/Commercial-image-interior/Corporate-office.jpg";
import School from "../../assets/images/Services-images/Commercial-image-interior/School.jpg";
import Colleges from "../../assets/images/Services-images/Commercial-image-interior/College.jpg";
import SuperMarket from "../../assets/images/Services-images/Commercial-image-interior/Supermarket.jpg";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useState } from "react";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
const Commercial = () => {
  const images = [

    { src: Showroom, name: "Showrooms" },
    { src: BeaytyParlour, name: "BeaytyParlour" },
    { src: Saloon, name: "Saloon" },
    { src: ReadymadeShops, name: "ReadymadeShops" },
    { src: Cardshowroom, name: " Car Showroom" },
    { src: Bakery, name: "Bakery" },
    { src: Reasturent, name: "Reasturent" },
    { src: RetailShowroom, name: "RetailShowroom" },
    { src: CorporateOffice, name: "CorporateOffice" },
    { src: School, name: "School" },
    { src: Colleges, name: "Colleges" },
    { src: SuperMarket, name: "SuperMarket" },
  ];
  const [open, setOpen] = useState(false);
  return (
    <>
      {" "}
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Commercial Interior Expertise by Inddecore Interior in Kerala
        </title>
        <meta
          name="description"
          content="Inddecore Interior specializes in crafting exceptional commercial interiors in Kerala. Discover how we can transform your business space with expert design and functionality"
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
            src={CommercialImage}
            alt="loading"
          />

          <div className="absolute top-0 w-full h-full px-16 py-10 Contact-banner"></div>

          <div className="absolute top-0 z-10 w-full h-auto px-16 pt-20 max-sm:px-3">
            <h2 className=" text-white text-thirtyfivepixls  font-popins ">
              COMMERCIAL INTERIOR DESIGNERS IN KERALA
            </h2>
            <h2 className=" text-white text-thirtyfivepixls  font-popins ">
              INDDECORE INTERIO
            </h2>
            <div className="w-20 h-[1px] bg-red-600"></div>\
            <Link to={"/Contact-us"}>
              <button className="w-auto px-5 py-1 mt-5 font-bold text-white uppercase bg-red-600 font-cormantThiner tracking-wider]">
                Hire us
              </button>{" "}
            </Link>
          </div>
        </div>
      </section>
      {/* ========================== Best Residential Interior Designers in Chennai ============= */}
      <section>
        <div className="mt-10">
          <h2 className="text-thirtyfivepixls max-md:px-5 max-md:text-[25px] text-center text-red-600 font-medium   font-popins ">
            DESIGNERS FOR COMMERCIAL INTERIOR
          </h2>

          <h2 className="sm:text-thirtyfivepixls font-popins uppercase max-lg:px-20  max-sm:px-6  px-32  text-center text-gray-600   ">
            WE ARE DEDICATED TO CREATING COMMERCIAL SPACES FOR YOUR BUSINESS'S
            GROWTH
          </h2>

          <center>
            <div className="w-36 h-[2px] mt-5 bg-red-600"></div>
          </center>

          <p className="px-16 mt-5 font-bold text-justify sm:text-center text-[25px] text-gray-600 max-md:px-10 max-sm:px-6 font-cormantThiner">
            Inddecore Interior welcomes you to an exciting realm of commercial
            interior design, where innovation, functionality, and aesthetics
            converge to create inspiring workspaces in the enchanting backdrop
            of Kerala. From corporate offices to retail spaces, we take pride in
            turning commercial environments into productive, comfortable.
          </p>
        </div>

        {/* ====================================================================== */}
        {/* <section>
          <div className="px-16 mt-16 max-md:px-6">
            <section className="py-6">
              <div className="container flex flex-col justify-center p-4 mx-auto">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">
                  <CommercialInteriorComponent
                    img={Showroom}
                    heading="
                    Showrooms"
                  />

                  <CommercialInteriorComponent
                    img={BeaytyParlour}
                    heading="
                    Beauty Parlour"
                  />

                  <CommercialInteriorComponent
                    img={Saloon}
                    heading="
                    Saloon"
                  />

                  <CommercialInteriorComponent
                    img={ReadymadeShops}
                    heading="
                    Readymade Shops"
                  />

                  <CommercialInteriorComponent
                    img={Cardshowroom}
                    heading="
                    Car Showroom"
                  />

                  <CommercialInteriorComponent img={Bakery} heading="Bakery" />

                  <CommercialInteriorComponent
                    img={Reasturent}
                    heading="
                    Restaurant"
                  />

                  <CommercialInteriorComponent
                    img={RetailShowroom}
                    heading="
                    Retail Showroom"
                  />

                  <CommercialInteriorComponent
                    img={CorporateOffice}
                    heading="
                    Corporate Office"
                  />

                  <CommercialInteriorComponent
                    img={School}
                    heading="
                    Schools"
                  />

                  <CommercialInteriorComponent
                    img={Colleges}
                    heading="
                 Colleges"
                  />

                  <CommercialInteriorComponent
                    img={SuperMarket}
                    heading=" Supermarket"
                  />
                </div>
              </div>
            </section>
          </div>
        </section> */}

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

export default Commercial;

import React from "react";
import AboutImage from "../assets/images/aboutus/About-us.jpg";
import AboutImageTwo from "../assets/images/aboutus/Aboutus-image-Two.jpg";
import AboutImageThree from "../assets/images/aboutus/Image-three-aboutus.jpg";

import Whychooseus from "../components/About-us-components/why-choose-us";
import { IoBagHandle } from "react-icons/io5";
import { FaPeopleCarry } from "react-icons/fa";
import { FaDoorOpen } from "react-icons/fa";
import { GiSevenPointedStar } from "react-icons/gi";
import { FaRegHandshake } from "react-icons/fa";
import { BsEmojiSmile } from "react-icons/bs";

import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";

import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import { FaPhoneAlt } from "react-icons/fa";
const Aboutus = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Inddecore Interior is your Leading Interior Designers in Kerala
        </title>
        <meta
          name="description"
          content="Inddecore Interior is a premier interior design firm based in Kerala, specializing in creating stunning and functional spaces. With a team of talented designers, we transform your vision into reality, delivering exceptional results."
        />
        <link rel="canonical" href="https://inddecoreinteriors.com/about-us" />
      </Helmet>

      <section className="">
        <div className="relative w-full h-auto ">
          <img
            className="object-cover w-full h-full max-lg:h-[500px] "
            src={AboutImage}
            alt="loading"
          />
          <div className="absolute bottom-0 justify-end w-full h-full pt-48 font-popins">
            <div className="h-1 mb-3 ml-5 bg-white rounded-full max-sm:ml-3 max-sm:w-56 w-96"></div>
            <h2 className="pl-5 text-white uppercase text-thirtyfivepixls max-sm:pl-3 ">
              Inddecore Interio <br /> Designer.
            </h2>
          </div>
        </div>
        {/* =============== =================== */}

        <section>
          <div className="flex gap-5 px-16 mb-5 max-md:flex-col max-md:px-6 ">
            <div className="w-[40%] max-md:w-full pt-16">
              <h2 className="uppercase font-cormantThiner">About company</h2>
              <h2 className="mt-10  sm:text-thirtyfivepixls font-popins">
                RECOGNIZED <br /> INTERIOR & EXTERIOR <br />
                <span className="font-medium text-[30px] text-red-600 uppercase">
                  Inddecore Interio
                </span>
              </h2>

              <div className="h-[1px] bg-black border-dotted w-[100%] mt-10"></div>

              <p className="mt-10 sm:text-[22px] font-extrabold text-justify text-black font-cormantThiner">
                Experience the finest interior design in Kerala with Inddecore
                Interior. We are the ultimate choice for creating the best
                interiors in Kerala, transforming your spaces into masterpieces.
                Explore our services and portfolio now. Inddecore Interior is
                your trusted partner in the world of interior design, dedicated
                to redefining living spaces throughout the picturesque
                landscapes of Kerala. With a passion for excellence and a team
                of talented designers, we've established ourselves as the go-to
                choice for the best interiors in Kerala.
              </p>
            </div>
            <div className="w-[60%] Baner-black-white max-md:w-full h-[100%] pt-16 p-5 bg-gray-200 pb-28">
              <center>
                <img src={AboutImageTwo} alt="loading" />
              </center>
            </div>
          </div>
        </section>
      </section>

      {/* =============== Innovative ideas, stylish designs =================== */}
      <section>
        <div className="w-full h-full px-16 mt-16 mb-20 b-20 max-md:px-6">
          <div className="flex max-md:flex-col">
            <div className="w-[41%] max-md:w-full ">
              <img
                className="object-cover h-full Baner-black-white"
                src={AboutImageThree}
                alt="loading"
              />
            </div>
            <div className="w-[59%] max-md:w-full p-5 bg-gray-100">
              <h2 className="mb-3 italic font-cormantThiner">
                We can help you to
              </h2>
              <h2 className="sm:text-thirtyfivepixls max-sm:text-[17px] font-extralight font-popins">
                CONSTRUCTING YOUR IDEAL HOME
              </h2>
              <p className="mt-2 font-extrabold sm:text-[18px] text-justify text-black font-cormantThiner">
                At Inddecore Interior, we're more than just builders, we're
                dream weavers. Our team is committed to crafting homes that
                embody your unique style and needs. Learn about our mission,
                values, and the passionate professionals who make it all happen.
                Learn about the transformational potential of our interior
                design offerings. From choosing the perfect color palette to
                furniture selection, we take care of every detail to create the
                ambiance you desire.
              </p>
              <Link to={"/Contact-us"}>
                <button className="w-auto h-auto py-2 mt-5 bg-red-600 px-7">
                  <span className="text-white text-[18px] uppercase">
                    Hire Us
                  </span>
                </button>{" "}
              </Link>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="sm:text-center text-[30px]  max-sm:text-[20px] italic text-red-600">
              EXPLORE OUR COMPREHENSIVE HOME CONSTRUCTION SERVICES.
            </h2>
            <h2 className="sm:text-center md:text-[35px] max-sm:mt-3 uppercase font-popins  text-gray-600  mb-8">
              STAY UPDATED WITH THE LATEST TRENDS IN INTERIOR DESIGN AND HOME
              CONSTRUCTION
            </h2>
            <div className="flex gap-10 font-extrabold text-justify text-black max-md:flex-col font-cormantThiner">
              <p className="w-[50%] text-[18px] max-md:w-full">
                We transform dreams into architectural marvels against the
                breathtaking backdrop of Kerala's natural beauty. Our mission is
                to bridge the gap between your dream home and its realization,
                one meticulously designed space at a time. At Inddecore
                Interior, we are dream weavers, design aficionados, and
                construction experts. We take pride in crafting homes that are
                not only built to perfection but also infused with your unique
                style and specific needs. Our professional team is dedicated to
                making your vision come to life. Learn about the
                transformational potential of our interior design offerings.
                From selecting the perfect color palette to curating the finest
                furnishings, our experts focus on every detail to create the
                ambiance you desire.
              </p>
              <p className="w-[50%] text-[18px] max-md:w-full ">
                We're determined to stay at the top of our industry. Witness the
                evolution of your vision into a tangible reality. We think it's
                important to lead the industry. Our blog is your source for the
                latest trends in interior design and home construction in
                Kerala. From innovative design ideas to sustainable building
                practices, we share insights, tips, and inspiration to keep you
                informed and prepared to create a space that's truly yours
                amidst Kerala's lush beauty.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* =============== Why To Choose Us? =================== */}
      <section>
        <div className="px-16 py-10 mb-10 bg-gray-200 max-md:px-6 ">
          <h2 className="italic text-[30px] text-center text-red-600">
            Designing the future
          </h2>
          <h2 className="mt-3 text-center text-gray-600 uppercase  sm:text-thirtyfivepixls font-popins">
            Why To Choose Us?
          </h2>
          <center>
            <div className="h-1 mt-5 bg-red-600 rounded-full w-36"></div>
          </center>

          <section className="py-6 mt-5">
            <div className="container flex flex-col justify-center p-4 mx-auto">
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 sm:grid-cols-2">
                <Whychooseus
                  h2={<IoBagHandle />}
                  heading="21+ Years Experience"
                  para="We are in the industry for more than 21 years so we can deliver more experienced designs with users comfortable model."
                />

                <Whychooseus
                  h2={<FaPeopleCarry />}
                  heading="45 Days Delivery Guarantee"
                  para="Bizzoppo Interiors materials all are comes with 10 years of warranty. we have huge hope on our materials and service quality."
                />

                <Whychooseus
                  h2={<FaDoorOpen />}
                  heading="Own Factory Materials"
                  para="We are using own factory materials for all our interior designs because of that we are able to provide with low cost of services."
                />

                <Whychooseus
                  h2={<GiSevenPointedStar />}
                  heading="10+ Years Of Warranty"
                  para="Bizzoppo Interiors materials all are comes with 10 years of warranty. we have huge hope on our materials and service quality."
                />

                <Whychooseus
                  h2={<FaRegHandshake />}
                  heading="Lifetime Service Support"
                  para="We will support all our clients with lifetime service support to ensure that we have separate service team to work all over."
                />

                <Whychooseus
                  h2={<BsEmojiSmile />}
                  heading="Happy Customers"
                  para="We have finished  luxury villas and comercial projects. so our workers are very well organised team to deliver good models to you."
                />
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* =============== Contact-us =================== */}
      <section>
        <div className="flex max-lg:flex-col  px-16 max-md:px-6 bg-[#28282B] py-10">
          <div className="w-[50%] max-md:text-center items-center max-lg:w-full max-md:mb-10">
            <h2 className="uppercase  text-[24px] text-red-500 italic">
              Contact Now
            </h2>
            <h2 className="mt-5 text-thirtyfivepixls uppercase max-md:text-[30px] text-white font-popins">
              For Any Inquiries Please Call
            </h2>
            <h2 className="mt-4 text-[25px] text-red-500">+91 96334 61561</h2>

            <div className="w-48 h-[2px] mt-5 max-lg:w-full bg-white rounded-full"></div>

            <div className="w-full mt-10 max-sm:px-10">
              <ul className="flex w-full gap-5 max-sm:justify-between">
                <li className="w-10 h-10 pt-[8px]  bg-red-500 rounded-full">
                  <a href="https://www.facebook.com/Inddecoreinteriors1 ">
                    <center>
                      <BiLogoFacebook className="text-[25px] text-white" />
                    </center>
                  </a>
                </li>
                <li className="w-10 h-10 pt-[8px]  bg-red-500 text-white rounded-full">
                  <a href="t:+919633461561">
                    {" "}
                    <center>
                      <FaPhoneAlt className="text-[25px]" />
                    </center>
                  </a>
                </li>
                <li className="w-10 h-10 pt-[8px] bg-red-500 text-white rounded-full">
                  <a href="https://www.instagram.com/inddecore_interiors/">
                    {" "}
                    <center>
                      <AiOutlineInstagram className="text-[25px]" />
                    </center>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="mapouter"
            style={{
              position: "relative",
              height: "400px",
              width: "100%",
              background: "#fff",
            }}
          >
            <div
              className="gmap_canvas"
              style={{ overflow: "hidden", height: "auto", width: "auto" }}
            >
              <iframe
                title="Google Map"
                src="https://maps.google.com/maps?q=Inddecore%20Interio%20Opposite%20%E2%80%93%20Apollo%20Tyres%20Perambra%20%E2%80%93%20Chalakudi%20%E2%80%93%20Thrissur%20680689&amp;t=k&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                frameBorder="0"
                scrolling="no"
                style={{
                  width: "100%",
                  height: "400px",
                  position: "relative",
                  zIndex: 2,
                }}
              ></iframe>
              <a
                href="https://blooketjoin.org"
                style={{
                  color: "#fff",
                  position: "absolute",
                  top: "50px",
                  left: "20px",
                  zIndex: 9999,
                }}
              >
                blooket join
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutus;

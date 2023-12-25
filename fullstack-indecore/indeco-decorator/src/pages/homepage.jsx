import { BsArrowRight } from "react-icons/bs";
import { Helmet } from "react-helmet";

import BannerimageOne from "../assets/images/home/Bannerimages/Imageone.jpg";
import BannerimageTwo from "../assets/images/home/Bannerimages/ImageTwo.jpg";
import BannerimageThree from "../assets/images/home/Bannerimages/Image-three.jpg";
import BannerimageFour from "../assets/images/home/Bannerimages/Image-four.jpg";
import BannerimageFive from "../assets/images/home/Bannerimages/Image-five.jpg";
import BannerimageSix from "../assets/images/home/Bannerimages/image-seven.jpg";

import ImageThree from "../assets/images/gallary/18-min.jpg";

import ProjectimgOne from "../assets/images/home/project-images/Bedazzeled.jpg";
import ProjectimgTwo from "../assets/images/home/project-images/Man-Cave_006-optimized.jpg";
import ProjectimgThree from "../assets/images/home/project-images/TLenz_RaeDuncan.jpg";
import ProjectimgFour from "../assets/images/home/project-images/one.jpg";
import ProjectimgFive from "../assets/images/home/project-images/project-image-one.jpg";
import ProjectimgSix from "../assets/images/home/project-images/two.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";

// import Map from "../components/Map/map";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import BeforFooterImage from "../assets/images/home/lastBeforeImage.jpg";

import ProcessImageone from "../assets/images/home/ServicesImages/commercials-interior-designers-in-chennai-peril.png";
import ProcessImageTwo from "../assets/images/gallary/17-min.jpg";
import ProcessImageThree from "../assets/images/home/ServicesImages/office-interiors-in-chennai-peril.png";

import DreamImage from "../assets/images/gallary/15-min.jpg";

import Why from "../assets/images/gallary/6-min.jpg";
import { FaPaintBrush } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";
import { FaTruck } from "react-icons/fa";
import { Link } from "react-router-dom";

import VedioOne from "../assets/vedios/WhatsApp Video 2023-12-18 at 08.15.11_3b9bdb7c.mp4";
import { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
const Homepage = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying); // Update state on click
    if (isPlaying) {
      videoRef.current.pause(); // Pause video if playing
    } else {
      videoRef.current.play(); // Play video if paused
    }
  };

  const videoRef = useRef(null);

  // =================
  const setingOne = {
    dots: true,
    horizontal: false,
    vertical: true,
    autoplay: true,
    infinite: true,

    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrowOne />,
    nextArrow: <NextArrowOne />,
  };

  function PrevArrowOne(props) {
    return <div className="hidden"></div>;
  }

  function NextArrowOne(props) {
    return <div className="hidden"></div>;
  }
  const settings = {
    // dots: true,

    autoplay: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div className="absolute z-40  flex h-auto pt-1 top-[13rem] max-md:top-5 left-7 max-sm:left-0">
        <button onClick={onClick}>
          <h2 className="">
            <MdArrowBackIosNew className="text-black text-[30px]" />
          </h2>
        </button>
      </div>
    );
  }

  function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
      <div
        className="absolute  max-md:top-5 flex h-auto pt-1 top-[14rem]   max-md:left-10 right-7"
        style={{ ...style }}
      >
        <button onClick={onClick}>
          <h2 className="">
            <MdArrowForwardIos className="text-black text-[30px]" />
          </h2>
        </button>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Using Inddecore Interio to Create Kerala's Greatest Interiors
        </title>
        <meta
          name="description"
          content="Discover the art of interior design with Inddecore Interio, your one-stop destination for the best interiors in kerala. We transform your space into a haven of elegance and functionality. Explore our portfolio today!"
        />
        <link rel="canonical" href="https://inddecoreinteriors.com/home" />
      </Helmet>

      <section>
        <section>
          <div className="mb-20 bg-white">
            <div className="relative ">
              <Slider {...setingOne} className="Baner-black-white">
                <div className="image-container ">
                  <img
                    className="zoom-in-zoom-out max-sm:h-[300px] max-sm:object-cover "
                    src={BannerimageThree}
                    alt="loading"
                  />
                </div>

                <div className="image-container">
                  <img
                    className="zoom-in-zoom-out max-sm:h-[300px] max-sm:object-cover"
                    src={BannerimageOne}
                    alt="loading"
                  />
                </div>

                <div className="image-container">
                  <img
                    className="zoom-in-zoom-out max-sm:h-[300px] max-sm:object-cover"
                    src={BannerimageTwo}
                    alt="loading"
                  />
                </div>

                <div className="image-container">
                  <img
                    className="zoom-in-zoom-out max-sm:h-[300px] max-sm:object-cover"
                    src={BannerimageFour}
                    alt="loading"
                  />
                </div>

                <div className="image-container">
                  <img
                    className="zoom-in-zoom-out max-sm:h-[300px] max-sm:object-cover"
                    src={BannerimageFive}
                    alt="loading"
                  />
                </div>

                <div className="image-container">
                  <img
                    className="zoom-in-zoom-out max-sm:h-[300px] max-sm:object-cover"
                    src={BannerimageSix}
                    alt="loading"
                  />
                </div>
              </Slider>
            </div>
          </div>
        </section>

        {/* ============================= World-Class Luxury Interior Designer ========== */}
        <section>
          <div className="px-16 mb-10 max-sm:px-4">
            <p className="font-popins font-extralight uppercase max-sm:text-[32px] text-gray-700 text-thirtyfivepixls    text-center ">
              <h2> Crafting the Best Interiors in kerala </h2>
            </p>
            <p className="mt-5 text-center text-[26px] px-36 font-cormantThiner max-lg:px-14 max-md:px-10 max-sm:px-1">
              <h3>
                At Inddecore Interio, we are dedicated to redefining interior
                spaces, making them more functional, beautiful, and reflective
                of your unique style. With a commitment to excellence and a team
                of passionate designers, we have earned a reputation as the best
                in kerala.
              </h3>
            </p>
            <center>
              <Link to={"Contact-us"}>
                <div className="lg:w-[20%] md:w-[40%] max-md:w-[40%]  bg-red-600  mt-10 flex justify-evenly text-[20px] pt-2 pb-2">
                  <button className="text-white uppercase font-cormantThiner ">
                    Talk to Us
                  </button>
                  <BsArrowRight className="font-bold text-[35px] text-white " />
                </div>
              </Link>
            </center>
          </div>
        </section>

        {/* ================== MEET KERALA'S BEST INTERIOR DESIGNERS ================ */}

        <section>
          <div className="pt-10 pb-1 bg-gray-200">
            <div className="">
              <h1 className="text-center  font-normal  text-gray-500 tracking-wider  uppercase text-thirtyfivepixls font-popins ">
                About{" "}
                <span className="font-normal tracking-wider text-red-600 ">
                  {" "}
                  Inddecore Interio{" "}
                </span>
              </h1>
              <center>
                <div className="h-1 bg-red-600 rounded-full w-72 max-md:hidden"></div>
              </center>
            </div>
            <div className="flex w-full h-auto px-20 mt-20 mb-20 max-md:px-6 max-lg:flex-col ">
              <div className="w-[50%] max-lg:w-full h-[500px] Baner-black-white">
                <img
                  className="object-cover w-full h-full"
                  src={ImageThree}
                  alt="loading"
                />
              </div>

              <div className="w-[50%] max-lg:w-full  h-auto ">
                <div className="h-[25%] text-center pt-5">
                  <h1 className="font-normal tracking-wider text-center  text-gray-500 uppercase font-popins text-thirtyfivepixls">
                    <span className="text-red-600 font-popins">
                      {" "}
                      Inddecore{" "}
                    </span>
                    Interio
                  </h1>
                </div>

                <div className="w-full h-[75%] px-16 py-16 max-sm:px-6 bg-white ">
                  <h2 className="uppercase tracking-widest text-[22px] text-gray-500">
                    MEET INDDECORE INTERIO
                  </h2>
                  <p className="text-[26px]  tracking-wider font-medium text-red-600">
                    TALENTED DESIGNERS WITH US
                  </p>
                  <p className="text-justify font-extrabold text-[18px] text-gray-800  font-cormantThiner">
                    Experience the finest interior design in Kerala with
                    Inddecore Interio. We are the ultimate choice for creating
                    the best interiors in Kerala, transforming your spaces into
                    masterpieces. Explore our services and portfolio now.
                    Inddecore Interio is your trusted partner in the world of
                    interior design, dedicated to redefining living spaces
                    throughout the picturesque landscapes of Kerala. With a
                    passion for excellence and a team of talented designers,
                    we've established ourselves as the go-to choice for the best
                    interiors in Kerala.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================= Services section ===================*/}

        <section>
          <div className="flex gap-5 mt-20 justify-evenly px-11 max-md:px-6 max-lg:flex-col">
            <Link to={"Home-interiories"}>
              <div className="relative z-0 Baner-black-white">
                <img
                  className="object-cover z-[1] h-[500px] rounded-xl"
                  src={ProcessImageTwo}
                  alt="loading"
                />
                <div className="absolute top-0 w-full h-full bg-black rounded-xl opacity-40"></div>
                <div className="absolute bottom-0 px-10 pb-10">
                  <h2 className="font-cormantThiner text-[40px] font-semibold text-white">
                    Residential Interiors
                  </h2>
                  <p className="text-white font-cormantThiner">
                    Get the Best Residential Interior Designers in kerala. Check
                    Our Latest Works Here.
                  </p>
                </div>
              </div>
            </Link>

            <Link to={"Corporate-interior"}>
              <div className="relative Baner-black-white">
                <img
                  className="rounded-xl h-[500px] object-cover w-full"
                  src={ProcessImageThree}
                  alt="loading"
                />

                <div className="absolute top-0 w-full h-full bg-black opacity-40 rounded-xl"></div>
                <div className="absolute bottom-0 px-10 pb-10">
                  <h2 className="font-cormantThiner text-[40px] font-semibold text-white">
                    Corporate Interiors
                  </h2>
                  <p className="text-white font-cormantThiner">
                    Get the Best Residential Interior Designers in kerala. Check
                    Our Latest Works Here.
                  </p>
                </div>
              </div>
            </Link>

            <Link to={"Commercial-interior"}>
              <div className="relative Baner-black-white">
                <img
                  className="rounded-xl  h-[500px] object-cover w-full"
                  src={ProcessImageone}
                  alt="loading"
                />
                <div className="absolute top-0 w-full h-full bg-black rounded-xl opacity-40"></div>
                <div className="absolute bottom-0 px-10 pb-10">
                  <h2 className="font-cormantThiner text-[40px] font-semibold text-white">
                    Commercial Interiors
                  </h2>
                  <p className="text-white font-cormantThiner">
                    Get the Best Residential Interior Designers in kerala. Check
                    Our Latest Works Here.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* ================================================== Dream  ================================== */}
        <section>
          <div className="flex gap-5 px-16 mt-20 max-md:px-6 max-lg:flex-col">
            <div className="w-[40%] max-lg:w-full">
              <ul className="flex">
                <li className="pt-3 pr-3">
                  <div className="h-[2px] w-[70px] bg-red-600"></div>
                </li>
                <li>
                  <h2 className=" font-cormantThiner">
                    ENHANCE YOU LIVING EXPERIENCE
                  </h2>
                </li>
              </ul>

              <h2 className=" uppercase text-[27px] font-popins ">
                PROVIDE COMFORT TO THE AREA RATHER THAN JUST FURNISHING IT
              </h2>
              <p className="mt-5 text-justify text-[18px] text-black font-extrabold font-cormantThiner">
                With a wealth of experience in the field, our experts bring
                unparalleled expertise to each project. We acknowledge that
                every client has particular requirements and preferences. We
                acknowledge that every client has particular requirements and
                preferences. Our bespoke interior design solutions are tailored
                to ensure your space reflects your personality and lifestyle. We
                use only the finest materials and collaborate with skilled
                artisans to deliver the highest quality workmanship in every
                project.
              </p>
              <div className="lg:w-[38%] md:w-[40%] max-md:w-[40%] max-sm:w-[50%] py-2 bg-red-600  mt-10 flex justify-evenly">
                <Link to={"Contact-us"}>
                  <button className="text-white uppercase font-cormantThiner mt-1">
                    Contact Us
                  </button>
                </Link>

                <BsArrowRight className="font-bold text-[35px] text-white " />
              </div>
            </div>
            <div className="w-[60%] max-lg:w-full  rounded-xl  Baner-black-white">
              <img
                className="object-cover h-full shadow-inner rounded-xl shadow-black"
                src={DreamImage}
                alt=""
              />
            </div>
          </div>
        </section>

        {/* ================================================== Process  ================================== */}
        <section>
          <div className="px-16 py-20 mt-16 max-sm:px-5 bg-gray-50">
            <center className="flex mb-16 justify-evenly">
              <div className="w-80  h-[2px]  mt-6 bg-red-600"> </div>
              <h2 className="text-[35px] max-sm:text-18px font-cormantThiner font-bold">
                Our <span className="text-red-600">Designing </span> Process
              </h2>
              <div className="w-80 mr-5 h-[2px]  mt-6 bg-red-600"> </div>
            </center>
            <ul className="flex h-auto gap-10 font-extrabold text-black max-lg:flex-col">
              <li>
                <div className="hover:border-[1px] shadow-lg hover:-translate-y-7 hover:border-red-600 py-10 hover:shadow-xl rounded-lg transition-all duration-[1s] ease-in-out hover:shadow-gray-500">
                  <center>
                    <div class="w-20 h-20 border-red-500 border-[3px] rounded-full">
                      <FaPaintBrush className="text-red-600 text-[25px] mt-6" />
                    </div>
                  </center>
                  <div className="text-center">
                    <h2 className="text-[25px] font-cormorant font-bold">
                      Discover
                    </h2>
                    <p className="font-cormantThiner text-[18px]">
                      Meet Our Designer and Explore Designs
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <div className="hover:border-[1px] shadow-lg hover:-translate-y-7 hover:border-red-600 py-10 hover:shadow-xl rounded-lg transition-all duration-[1s] ease-in-out hover:shadow-gray-500">
                  <center>
                    <div class="w-20 h-20 border-red-500 border-[3px] rounded-full">
                      <FaGears className="text-red-600 text-[25px] mt-6" />
                    </div>
                  </center>
                  <div className="text-center">
                    <h2 className="text-[25px] font-cormorant font-bold">
                      Customize
                    </h2>
                    <p className="font-cormantThiner text-[18px] px-3">
                      Co-create customized design and get a quote
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <div className="hover:border-[1px] hover:-translate-y-7 hover:border-red-600 py-10 hover:shadow-xl rounded-lg transition-all shadow-lg duration-[1s] ease-in-out hover:shadow-gray-500">
                  <center>
                    <div class="w-20 h-20 border-red-500 border-[3px] rounded-full">
                      <AiFillHome className="text-red-600 text-[25px] mt-6" />
                    </div>
                  </center>

                  <div className="text-center">
                    <h2 className="text-[25px] font-cormorant font-bold">
                      Place Your Order
                    </h2>
                    <p className="font-cormantThiner text-[18px]">
                      After finalization design quote,v place you order
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <div className="hover:border-[1px]  shadow-lg hover:-translate-y-7 hover:border-red-600 py-10 hover:shadow-xl rounded-lg transition-all duration-[1s] ease-in-out hover:shadow-gray-500">
                  <center>
                    <div class="w-20 h-20 border-red-500 border-[3px] rounded-full">
                      <FaTruck className="text-red-600 text-[25px] mt-6" />
                    </div>
                  </center>

                  <div className="text-center">
                    <h2 className="text-[25px] font-cormorant font-bold">
                      MoveIn
                    </h2>
                    <p className="font-cormantThiner text-[18px]">
                      Move in to your newly furnished within 45-60 days
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
        {/* ================================================== Why choose  ================================== */}
        <section>
          <div className="flex gap-5 px-16 mt-20 max-md:px-6 max-lg:flex-col">
            <div className="w-[40%] max-lg:w-full">
              <ul className="flex">
                <li className="pt-3 pr-3">
                  <div className="h-[2px] w-[70px] bg-red-600"></div>
                </li>
                <li>
                  <h2 className=" font-cormantThiner">
                    ENHANCE YOU LIVING EXPERIENCE
                  </h2>
                </li>
              </ul>

              <h2 className="text-[27px] mb-2 mt-2 uppercase font-normal  font-popins ">
                Why Choose Us{" "}
                <span className="text-red-600 mr-2 ml-2"> INDDECORE</span>
                INTERIO Designer
              </h2>
              <div className="pl-5">
                <ul className="text-[18px] text-black font-extrabold font-cormantThiner list-disc">
                  <li>No.1 Quality material and Finishing</li>
                  <li>Upto 10 Years Material Warranty</li>
                  <li>Project Delivery within 45 Days</li>
                  <li>Get Free Consultations with Design Experts</li>
                  <li>Innovative and mesmerizing</li>
                  <li>20+ Years of Industry Experienced</li>
                  <li>Certified Interior Designers</li>
                  <li>Quality in Affordable Pricing</li>
                </ul>
              </div>
              <div className="lg:w-[38%] md:w-[35%] max-sm:w-[50%] max-md:w-[40%] py-2 bg-red-600  mt-10 flex justify-evenly ">
                <Link to={"Contact-us"}>
                  <button className="text-white uppercase font-cormantThiner mt-1">
                    Contact Us
                  </button>
                </Link>

                <BsArrowRight className="font-bold text-[35px] text-white " />
              </div>
            </div>
            <div className="w-[60%] max-lg:w-full  rounded-xl  Baner-black-white">
              <img
                className="object-cover h-full shadow-inner rounded-xl shadow-black"
                src={Why}
                alt="loading"
              />
            </div>
          </div>
        </section>
        {/* ==================================================================================== */}

        {/* ==========================  OUR PROJECTS ===================*/}

        <section className="py-6 pt-10">
          <div>
            <h2 className="text-center  text-[32px] font-popins tracking-wider">
              RECENT <span className="text-red-600"> PROJECTS </span>
            </h2>
          </div>
          <div className="container flex flex-col justify-center p-4 mx-auto font-extrabold text-black">
            <div className="grid grid-cols-1 gap-4 px-16 max-sm:px-6 lg:grid-cols-3 sm:grid-cols-2 justify-evenly">
              <div className="Baner-black-white">
                <img src={ProjectimgOne} alt="loading" />
                <h2 className="text-center font-cormantThiner mt-5 text-[23px]">
                  Bedazzled
                </h2>
              </div>

              <div className="Baner-black-white">
                <img src={ProjectimgTwo} alt="loading" />
                <h2 className="text-center font-cormantThiner mt-5 text-[23px]">
                  Ultimate Mancave
                </h2>
              </div>

              <div className="Baner-black-white">
                <img src={ProjectimgThree} alt="loading" />
                <h2 className="text-center font-cormantThiner mt-5 text-[23px]">
                  Lavish Loft
                </h2>
              </div>

              <div className="Baner-black-white">
                <img src={ProjectimgFour} alt="loading" />
                <h2 className="text-center font-cormantThiner mt-5 text-[23px]">
                  Style King
                </h2>
              </div>

              <div className="Baner-black-white">
                <img src={ProjectimgFive} alt="loading" />
                <h2 className="text-center font-cormantThiner mt-5 text-[23px]">
                  Crowd Pleaser
                </h2>
              </div>

              <div className="Baner-black-white">
                <img src={ProjectimgSix} alt="loading" />
                <h2 className="text-center font-cormantThiner mt-5 text-[23px]">
                  Liberace
                </h2>
              </div>
            </div>
          </div>
        </section>

        {/* ============= Small Content ==============*/}

        <section>
          <div className="px-16 py-10 mt-10 max-sm:px-6 max-sm:mt-0 ">
            <div>
              <p className="font-cormantThiner  text-black font-extrabold text-[35px] text-center max-md:text-[30px]">
                Design dreams made into reality and Design with passion. Your
                personality, with our Inddecore interio expertise.
              </p>
              <center>
                <div className="lg:w-[24%]  max-sm:w-[74%] md:w-[40%] max-md:w-[40%]  bg-red-600  mt-10 flex justify-evenly text-[20px] pt-2 pb-2">
                  <Link to={"Gallary"}>
                    {" "}
                    <button className="text-white font-cormantThiner ">
                      SEE ALL PROJECTS
                    </button>{" "}
                  </Link>

                  <BsArrowRight className="font-bold text-[35px] text-white " />
                </div>
              </center>
            </div>
          </div>
        </section>
        {/* ==================================================  ================================== */}
        <section>
          <div className="flex gap-5 px-16 py-20 mt-20 bg-gray-100 max-sm:px-6 max-lg:flex-col">
            <div className="w-[40%] max-lg:w-full">
              <ul className="flex">
                <li className="pt-3 pr-3">
                  <div className="h-[2px] w-[70px] bg-red-600"></div>
                </li>
                <li>
                  <h2 className=" font-cormantThiner">
                    ENHANCE YOU LIVING EXPERIENCE
                  </h2>
                </li>
              </ul>

              <h2 className="text-[35px]  font-popins uppercase">
                Achieving the Best Interiors in Kerala
              </h2>
              <p className="mt-5 text-justify text-black font-extrabold text-[18px] font-cormantThiner">
                Inddecore Interio has been honored with prestigious awards for
                our exceptional interior design work. Our commitment to
                innovative, high-quality designs has earned us the respect of
                both clients and industry peers. We specialize in creating
                bespoke interior solutions that cater to the unique tastes and
                needs of our clients. Our remarkable achievements are a
                testament to our dedication to delivering personalized and
                exceptional designs. At Inddecore Interio, we believe that
                quality is paramount.
              </p>
              <div className="lg:w-[38%] md:w-[40%] max-md:w-[40%] py-2 bg-red-600  mt-10 flex justify-evenly">
                <Link to={"Contact-us"}>
                  <button className="text-white uppercase font-cormantThiner mt-1">
                    Contact Us
                  </button>
                </Link>
                <BsArrowRight className="font-bold text-[35px] text-white " />
              </div>
            </div>

            <div className="w-[60%] pt-10 max-lg:w-full rounded-xl  ">
              <div className="relative">
                <video ref={videoRef} src={VedioOne} controls={!isPlaying} />

                <button
                  onClick={handlePlayPause}
                  className="absolute text-[35px] p-6 text-white left-[43%] top-40 max-sm:top-20 "
                >
                  {isPlaying ? <FaPause /> : <FaPlay />}
                </button>
              </div>
              {/* <ul className="flex justify-evenly ">
                <li>
                  <div>
                    <h2 className="text-[50px] max-sm:text-[30px] font-semibold flex">
                      <span>3,726</span>
                      <span className="text-red-600 text-[25px] ml-3">+</span>
                    </h2>
                    <h2 className="font-semibold text-red-600">
                      Finished Projects
                    </h2>
                  </div>
                </li>

                <li className="pt-10">
                  <div className="h-[30px] w-[2px] bg-gray-400"></div>
                </li>

                <li>
                  <div>
                    <h2 className="text-[50px] max-sm:text-[30px] font-semibold flex">
                      <span>69</span>
                      <span className="text-red-600 text-[25px] ml-3">+</span>
                    </h2>
                    <h2 className="font-semibold text-red-600">
                      On Going Projects
                    </h2>
                  </div>
                </li>

                <li className="pt-10">
                  <div className="h-[30px] w-[2px] bg-gray-400"></div>
                </li>

                <li>
                  <div>
                    <h2 className="text-[50px] max-sm:text-[30px] font-semibold flex">
                      <span>150</span>
                      <span className="text-red-600 text-[25px] ml-3">+</span>
                    </h2>
                    <h2 className="font-semibold text-red-600">Awards</h2>
                  </div>
                </li>
              </ul> */}
            </div>
          </div>
        </section>

        {/* ======================= testimonial ==================================== */}
        <section>
          <div className="px-10 pb-10 max-sm:px-1">
            <div>
              <h2 className="text-center text-[32px] font-cormantThiner uppercase text-red-600 pt-10 ">
                WHAT OUR CLIENT SAYS
              </h2>
            </div>
            <div>
              <Slider className="" {...settings}>
                <center className="px-7">
                  <ul className="flex w-[80%] max-md:w-full gap-5 shadow-xl pb-10 pt-10 shadow-gray-500 max-sm:shadow-lg max-lg:flex-col mb-10 mt-20 justify-evenly ">
                    <li>
                      <div className="w-auto h-auto">
                        <div className="px-5 pt-28 max-sm:px-0 max-md:pt-20">
                          <p className="font-cormantThiner">21-9-2023</p>
                          <p className="font-semibold font-cormantThiner text-[25px]">
                            Arun
                          </p>

                          <ul className="flex justify-center ">
                            <li>
                              <AiFillStar className="text-[#daa844] text-[30px]" />
                            </li>
                            <li>
                              <AiFillStar className="text-[#daa844] text-[30px]" />
                            </li>
                            <li>
                              <AiFillStar className="text-[#daa844] text-[30px]" />
                            </li>
                            <li>
                              <AiFillStar className="text-[#daa844] text-[30px]" />
                            </li>
                            <li>
                              <AiFillStar className="text-[#daa844] text-[30px]" />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="w-[70%] pr-20 max-lg:px-10 max-lg:w-full">
                      <div className="w-[100%]">
                        <p>
                          <BiSolidQuoteLeft className="text-[102px] text-[#c7993d]" />
                        </p>
                        <p className="text-[18px] max-md:text-[20px] text-black font-cormantThiner text-justify">
                          1. " Thanks to Inddecore Interio, my house became the
                          home of my dreams. Their attention to detail and
                          innovative design ideas are truly remarkable. From the
                          initial consultation to the final execution, the
                          entire process was smooth and stress-free”.
                        </p>
                      </div>
                    </li>
                  </ul>
                </center>

                <center className="px-7">
                  <ul className="flex w-[80%] max-md:w-full gap-5 shadow-xl pb-10 pt-10 shadow-gray-500 max-sm:shadow-lg max-lg:flex-col mb-10 mt-20 justify-evenly ">
                    <li>
                      <div className="w-auto h-auto">
                        <div className="px-5 pt-28 max-sm:px-0 max-md:pt-20">
                          <p className="font-cormantThiner">10-10-2023</p>
                          <p className="font-semibold font-cormantThiner text-[25px]">
                            Danial
                          </p>

                          <ul className="flex justify-center ">
                            <li>
                              <AiFillStar className="text-[#daa844] text-[30px]" />
                            </li>
                            <li>
                              <AiFillStar className="text-[#daa844] text-[30px]" />
                            </li>
                            <li>
                              <AiFillStar className="text-[#daa844] text-[30px]" />
                            </li>
                            <li>
                              <AiFillStar className="text-[#daa844] text-[30px]" />
                            </li>
                            <li>
                              <AiFillStar className="text-[#daa844] text-[30px]" />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="w-[70%] pr-20 max-lg:px-10 max-lg:w-full">
                      <div className="w-[100%]">
                        <p>
                          <BiSolidQuoteLeft className="text-[102px] text-[#c7993d]" />
                        </p>
                        <p className="text-[18px] max-md:text-[20px] text-black font-cormantThiner text-justify">
                          2. " It was a pleasure working with Inddecore Interio
                          on my workspace, and I'm really pleased with the
                          outcome. I was astonished by the team's exceptional
                          originality and professionalism. They succeeded in
                          creating the ideal harmony between practicality and
                          beauty."
                        </p>
                      </div>
                    </li>
                  </ul>
                </center>

                <center className="px-7">
                  <ul className="flex w-[80%] max-md:w-full gap-5 shadow-xl pb-10 pt-10 shadow-gray-500 max-sm:shadow-lg max-lg:flex-col mb-10 mt-20 justify-evenly ">
                    <li>
                      <div className="w-auto h-auto">
                        <div className="px-5 pt-28 max-sm:px-0 max-md:pt-20">
                          <p className="font-cormantThiner">10-10-2023</p>
                          <p className="font-semibold font-cormantThiner text-[25px]">
                            vishwa
                          </p>

                          <ul className="flex justify-center ">
                            <li>
                              <AiFillStar className="text-[#daa844] text-[30px]" />
                            </li>
                            <li>
                              <AiFillStar className="text-[#daa844] text-[30px]" />
                            </li>
                            <li>
                              <AiFillStar className="text-[#daa844] text-[30px]" />
                            </li>
                            <li>
                              <AiFillStar className="text-[#daa844] text-[30px]" />
                            </li>
                            <li>
                              <AiFillStar className="text-[#daa844] text-[30px]" />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="w-[70%] pr-20 max-lg:px-10 max-lg:w-full">
                      <div className="w-[100%]">
                        <p>
                          <BiSolidQuoteLeft className="text-[102px] text-[#c7993d]" />
                        </p>
                        <p className="text-[18px] max-md:text-[20px] text-black font-cormantThiner text-justify">
                          3. "Inddecore Interio's commitment to quality is
                          outstanding. They transformed my retail space into an
                          inviting and visually stunning environment. I was
                          impressed by their ability to capture the essence of
                          my brand while ensuring a great shopping experience
                          for customers."
                        </p>
                      </div>
                    </li>
                  </ul>
                </center>
              </Slider>
            </div>
          </div>
        </section>

        {/* ======================================== */}
        <section>
          <div className="relative w-full h-auto ">
            <img
              className="object-cover object-bottom h-[300px] w-full max-md:h-[500px]"
              src={BeforFooterImage}
              alt="loading"
            />
            <div className="absolute top-0 w-full h-[100%] bg-blue-900 opacity-70"></div>
            <div className="absolute top-0 h-[100%] w-full">
              <p className="pl-48  max-sm:px-4 max-lg:pl-5 pt-10 font-semibold  text-white font-cormantThiner text-[35px]">
                Want to find out more about how we can help? <br /> Have a
                project you’d like us to look at and want an idea of cost?
              </p>
              <p className="pl-48 mt-5 text-white max-sm:px-4 max-lg:pl-5 font-cormantThiner">
                GIVE US A CALL OR DROP US AN EMAIL AND WE’LL GET BACK TO YOU AS
                SOON AS WE CAN.
              </p>
              <div className="pl-48 mt-5 text-white max-lg:pl-5 font-cormantThiner ">
                <ul className="flex text-[18px] max-md:flex-col ">
                  <li className="flex pr-20 ">
                    <p className="pr-5 mt-1">
                      <BsFillTelephoneFill />
                    </p>
                    <span>+91 96334 61561</span>
                  </li>
                  <li className="flex ">
                    <p>
                      <BiLogoGmail className="mt-1 mr-5" />
                    </p>
                    <span>info.idinterio@gmail.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Homepage;

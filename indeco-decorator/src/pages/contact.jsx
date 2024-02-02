import React from "react";
import ContactUs from "../assets/images/Contact-us/image-four.jpg";
// import { BsArrowRight } from "react-icons/bs";
import Contacts from "../components/email";
import { Helmet } from "react-helmet";
// import { Link } from "react-router-dom";
import VedioOne from "../assets/vedios/WhatsApp Video 2023-12-18 at 08.15.11_3b9bdb7c.mp4";
import { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
const Contact = () => {
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
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Your Dream Project Starts Here</title>
        <meta
          name="description"
          content="Have any inquiries, suggestions, or dreams to share? We're all ears! Contact Inddecore Interior today and let's embark on the journey to bring your vision to life."
        />
        <link
          rel="canonical"
          href="https://inddecoreinteriors.com/contact-us"
        />
      </Helmet>

      <section>
        <div className="relative h-96 max-md:h-[500px]">
          <img
            className="object-cover w-full h-full"
            src={ContactUs}
            alt="loading"
          />

          <div className="absolute top-0 w-full h-full px-16 py-10 Contact-banner"></div>

          <div className="absolute top-0 z-10 w-full h-auto px-16 py-10 max-sm:px-3">
            <h2 className=" text-white text-thirtyfivepixls  font-popins ">
              Meet a Expert Designer Today
            </h2>
            <div className="w-32 h-[1px] mt-5 mb-5 bg-red-600"></div>
            <div>
              <ul>
                <li className="text-[25px] text-white font-cormantThiner">
                  Hours : All Days - 10am to 6pm
                </li>
                <li className="text-[25px] text-white font-cormantThiner">
                  Call: +91 9633461561
                </li>
                <li className="text-[25px] text-white font-cormantThiner">
                  Book a free consultation with one of our Expert designers!
                </li>
                <li className="text-[20px] ">
                  <button className="w-auto px-5 py-1 mt-5 font-bold text-white uppercase bg-red-600 font-cormantThiner">
                    <a href="tel:+919633461561">Call Us </a>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* ==================================================  ================================== */}
        <section>
          <div className="flex gap-5 px-16 py-20 bg-gray-100 max-sm:px-6 max-lg:flex-col">
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

              <h2 className=" uppercase text-thirtyfivepixls  font-popins ">
                Our Achievements
              </h2>
              <p className="mt-5 text-justify text-[18px] font-semibold text-black font-cormantThiner">
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
              {/* <div className="lg:w-[38%] md:w-[40%] max-md:w-[40%] py-2 bg-red-600  mt-10 flex justify-evenly">
                <Link to={"#Contact-us"}>
                  {" "}
                  <button className="text-white uppercase font-cormantThiner">
                    Contact Us
                  </button>{" "}
                </Link>

                <BsArrowRight className="font-bold text-[35px] text-white " />
              </div> */}
            </div>

            <div className="w-[60%]  max-lg:w-full rounded-xl  ">
              <center>  <div className="relative">
                <video ref={videoRef} src={VedioOne} controls={!isPlaying} className="h-96"/>

                <button onClick={handlePlayPause} className="absolute text-[35px] p-6 text-white left-[43%] top-40  ">
                  {isPlaying ? <FaPause />  : <FaPlay />}
                
                </button>
              </div> </center>
          
              {/* <ul className="flex justify-evenly ">
                <li>
                  <div>
                    <h2 className="text-[50px] max-sm:text-[30px] font-semibold flex">
                      <span>3,726</span>{" "}
                      <span className="text-red-600 text-[25px] ml-3">+</span>{" "}
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
                      <span>150</span>{" "}
                      <span className="text-red-600 text-[25px] ml-3">+</span>{" "}
                    </h2>
                    <h2 className="font-semibold text-red-600">Awards</h2>
                  </div>
                </li>
              </ul> */}
            </div>
          </div>
        </section>

        {/* =============== Contact-us =================== */}
        <Contacts />
      </section>
    </>
  );
};

export default Contact;

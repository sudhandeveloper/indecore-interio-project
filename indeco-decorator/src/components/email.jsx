import React, { useEffect, useState } from "react";

import { BiLogoFacebook } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
const SendEmailForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const emailAddress = "info.idinterio@gmail.com"; // Replace with the recipient's email address
  const subject = "New message from your website Anandtham"; // Change the email subject as needed

  useEffect(() => {
    if (submitted && name !== "" && phone !== "" && message !== "") {
      const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
        subject
      )}&body=Name: ${name}%0D%0APhone: ${phone}%0D%0AMessage: ${message}`;
      window.location.href = mailtoLink;
      setSubmitted(false); // Reset the form submission state
    }
  }, [submitted, name, phone, message]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); // Triggers the useEffect to send the email
  };

  return (
    <>
      <section>
        <div className="flex max-lg:flex-col  px-16 max-md:px-6 bg-[#28282B] py-10">
          <div className="w-[50%]  max-md:text-center items-center max-lg:w-full max-md:mb-10">
            <h2 className="uppercase  text-[24px] text-red-500  font-popins">
              Contact Now
            </h2>
            <h2 className="mt-5 text-[30px] max-md:text-[30px] text-white uppercase font-popins">
              For Any Inquiries Please Call
            </h2>
            <h2 className="mt-4 text-[25px]  text-red-500">
              <a href="tel:+919633461561">+91 96334 61561</a>
            </h2>

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
          {/* ============= */}
          <form
            className="p-5 w-[60%] max-lg:w-full max-lg:mt-10"
            onSubmit={handleFormSubmit}
          >
            <h2 className="text-center text-[25px] mb-5  text-red-600  font-popins  ">
              Contact Form
            </h2>
            <div className="">
              <label className="">
                <h2 className=" mt-5 text-white font-RobatoCondesed text-[18px] tracking-wider">
                  Name
                </h2>
                <input
                  className="mt-5 w-[100%] py-2 pl-2 mb-5"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
            </div>

            <div className="">
              <label className="">
                <h2 className="mb-2  text-white font-RobatoCondesed text-[18px] tracking-wider">
                  Phone
                </h2>
                <input
                  className="w-[100%] py-2 pl-2"
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </label>
            </div>
            <div className="">
              <label className="">
                <h2 className="mb-2 mt-5 text-white font-RobatoCondesed text-[18px] tracking-wider">
                  Message
                </h2>
                <textarea
                  className="pt-3 pl-3 w-full border-[1px] border-gray-600 "
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </label>
            </div>
            <button
              className="w-auto px-5 py-1 mt-5 font-medium  text-white uppercase bg-red-500  font-Barlow"
              type="submit"
            >
              Send Email
            </button>
          </form>
          <div></div>
        </div>
      </section>
    </>
  );
};

export default SendEmailForm;

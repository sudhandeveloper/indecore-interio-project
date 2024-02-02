import React from "react";
import BlogBanner from "../assets/images/Blog/blog-banner.jpg";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
const Blog = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Your Dream Project Starts Here</title>
        <meta
          name="description"
          content="Have any inquiries, suggestions, or dreams to share? We're all ears! Contact Inddecore Interior today and let's embark on the journey to bring your vision to life."
        />
        <link rel="canonical" href="https://inddecoreinteriors.com/blog" />
      </Helmet>{" "}
      <section>
        <div className="relative h-96 max-md:h-[500px]">
          <img
            className="object-cover w-full h-full"
            src={BlogBanner}
            alt="loading"
          />

          <div className="absolute top-0 w-full h-full px-16 py-10 Contact-banner"></div>

          <div className="absolute top-0 z-10 w-full h-auto px-16 pt-20 max-sm:px-3">
            <h2 className=" text-white text-thirtyfivepixls font-popins ">
              Interior Designers BOLG
            </h2>
            <h2 className="font-popins text-white text-thirtyfivepixls 
             ">
              INDDECORE INTERIO
            </h2>
            <div className="w-20 h-[1px] bg-red-600"></div>

            <Link to={"/Contact-us"}>
              {" "}
              <button className="w-auto px-5 py-1 mt-5 font-bold text-white uppercase bg-red-600 font-cormantThiner tracking-wider]">
                Hire us
              </button>{" "}
            </Link>
          </div>
        </div>

        {/* ========================== */}
        <section className="py-6 ">
          <h2 className="text-center font-popins mt-10 mb-3 rounded-full   uppercase  text-red-600 text-[35px]">
            Wellcome to Our Blog
          </h2>
          <center>
            <div className="w-64 h-1 mb-2 bg-black"></div>
          </center>
          <div className="container flex flex-col justify-center p-20 mx-auto">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 sm:grid-cols-2">
              <div className="px-6 py-5 shadow-lg font-cormantThiner rounded-2xl shadow-gray-500">
                {/* <img src={Ban} alt="loading" /> */}
                <h2 className="mb-2 mt-10 font-popins  text-[30px] text-green-700">
                  Kitchen Interiors is an Culinary Haven
                </h2>
                <h2 className=" font-extrabold text-[25px]">
                  Your kitchen is the heart of your home, where delicious meals
                  and memories are made. We will help you design a kitchen that
                  seamlessly blends style and functionality.
                </h2>

                <p className="mt-5 text-black text-[19px] text-justify">
                  Celebrate the beauty of Kerala by incorporating earthy tones,
                  wood finishes, and traditional elements in your kitchen design
                  from interior designers in Kerala. Warm yellows, muted greens,
                  and rich wood textures can evoke the essence of Kerala.
                  Inddecore Interior specializes in creating intelligent storage
                  solutions. Custom cabinets, shelves, and drawers can keep your
                  kitchen organized and clutter-free, making meal preparation a
                  joy. Your kitchen should feature high-quality appliances that
                  not only perform well but also complement your design. The
                  experts at Inddecore Interior can assist you in selecting the
                  right appliances to blend seamlessly with your kitchen's
                  aesthetics.
                </p>
              </div>

              <div className="px-6 py-5 shadow-lg font-cormantThiner rounded-2xl shadow-gray-500">
                <h2 className="mb-2 mt-10 font-popins text-[30px] text-green-700">
                  Living Space Interiors are where your Comfort Meets Elegance
                </h2>
                <h2 className=" font-extrabold text-[25px]">
                  Your living space is a reflection of your lifestyle and
                  personality. It's the place where you unwind, entertain
                  guests, and create cherished memories.
                </h2>

                <p className="mt-5 text-black text-[19px] text-justify">
                  The layout of your living space should be comfortable and
                  welcoming. Inddecore Interior can guide you in selecting the
                  right furniture and arranging it to create a cozy atmosphere.
                  The choice of colors and decor in your living space can set
                  the tone for the entire home. Let Inddecore Interior help you
                  choose a color palette and decor elements that reflect your
                  style. Proper lighting can transform your living area by
                  interior designers in Kerala. Inddecore Interior can recommend
                  a combination of ambient, task, and accent lighting that adds
                  warmth and elegance to your space.
                </p>
              </div>

              <div className="px-6 py-5 shadow-lg font-cormantThiner rounded-2xl shadow-gray-500">
                <h2 className="mb-2 mt-10 font-popins  text-[30px] text-green-700">
                  Living Space Interiors are where your Comfort Meets Elegance
                </h2>

                <h2 className=" font-extrabold text-[25px]">
                  The bathroom is your private oasis where you can relax and
                  rejuvenate. Inddecore Interior can turn this space into a
                  spa-like retreat.
                </h2>

                <p className="mt-5 text-black text-[19px] text-justify">
                  Consider soothing colors and materials to create a calming
                  atmosphere in your bathroom. Marble, soft blues, and greens
                  can help you achieve a tranquil ambiance. Clever storage
                  solutions are essential in a bathroom. Custom vanities, hidden
                  cabinets, and well-organized shelves can make your bathroom
                  clutter-free. Inddecore Interior can assist you in selecting
                  luxurious fixtures and fittings that enhance the overall
                  aesthetic and functionality by interior designers in Kerala,
                  of your bathroom.
                </p>
              </div>

              <div className="px-6 py-5 shadow-lg font-cormantThiner rounded-2xl shadow-gray-500">
                <h2 className="mb-2 mt-10  font-popins text-[30px] text-green-700">
                  Master Bedroom Interiors is a Personal Haven
                </h2>
                <h2 className=" font-extrabold text-[25px]">
                  Your master bedroom should be a reflection of your personal
                  style and offer a peaceful retreat at the end of the day.
                </h2>

                <p className="mt-5 text-black text-[19px] text-justify">
                  Invest in high-quality, comfortable bedding that invites
                  relaxation. Your choice of bed linens and pillows can add a
                  touch of luxury to your space. Opt for calming and soothing
                  colors in your bedroom, like soft neutrals, pastels, or cool
                  shades of blue. These colors can promote a restful atmosphere.
                  Your bedroom should reflect your personality. Inddecore
                  Interior can help you add personalized touches, such as
                  custom-made furniture or artwork, to make the space uniquely
                  yours.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Blog;

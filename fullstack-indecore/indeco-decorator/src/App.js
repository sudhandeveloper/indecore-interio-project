import "./App.css";
import { Route, Routes } from "react-router-dom";

import ScrollToTop from "./components/scrool-to-top";
import Navbar from "./components/new/Nav-one";

import Home from "./pages/homepage";
import Aboutus from "./pages/aboutus";
import Contact from "./pages/contact";
import HomeInterior from "./pages/service-dropdown-pages/home-interiories";
import Commercial from "./pages/service-dropdown-pages/commercial-interior";
import Corporate from "./pages/service-dropdown-pages/corporate-interior";
import Gallary from "./pages/gallary";
import Blog from "./pages/blog";

import Footer from "./components/Fotter/fotter";
function App() {
  return (
    <>
      <Navbar />
      {/* <New /> */}
      <></>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about-us"
          element={
            <>
              {" "}
              <ScrollToTop />
              <Aboutus />{" "}
            </>
          }
        />
        <Route
          path="/Contact-us"
          element={
            <>
              <ScrollToTop />
              <Contact />
            </>
          }
        />
        <Route
          path="/Home-interiories"
          element={
            <>
              {" "}
              <ScrollToTop />
              <HomeInterior />
            </>
          }
        />
        <Route
          path="/Commercial-interior"
          element={
            <>
              {" "}
              <ScrollToTop />
              <Commercial />
            </>
          }
        />
        <Route
          path="/Corporate-interior"
          element={
            <>
              <ScrollToTop /> <Corporate />
            </>
          }
        />
        <Route
          path="/Gallary"
          element={
            <>
            
              <ScrollToTop />
              <Gallary />{" "}
            </>
          }
        />
        <Route path="/Blog" element={<Blog />} />
      </Routes>

      <Footer />
      {/* <NavBar/> */}
    </>
  );
}

export default App;

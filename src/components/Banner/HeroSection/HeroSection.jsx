import "./HeroSection.css";
import hero from "../../../../public/assets/hero.png";
import NavBar from "../../../pages/Shared/NavBar/NavBar";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <div>
      <div className="header">
        <div className="navsBarWrap">
          <div className="bg-[#242526] h-16 flex items-center text-white">
          <NavBar/>
          </div>
          <div className="header-content">
            <div className="left-side">
              <h1 className="welcome-heading">Welcome to SoftyPy !</h1>
              <p className="welcome-paragraph">
                Accelerate Your Business Growth With Our Proven Digital
                Marketing Strategies <br />
                We help businesses of all sizes maximize their online presence
                and reach their target audience with our data-driven approach to
                digital marketing.
              </p>
              <Link to="/contact">
                <button className="ExploreBtn flex items-center justify-center"> <span>Explore Us </span><HiOutlineArrowNarrowRight/> </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

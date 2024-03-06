import { useState } from "react";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import "./Portfolio.css";
import { TabList, TabPanel, Tabs, Tab } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Link } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import Container from "../../ui/Container";
import { useGetPortfolioQuery } from "../../redux/features/portfolio/portfolioApi";
import { FaAngleRight } from "react-icons/fa";
const Portfolio = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const {
    data: portfolio,
    isLoading,
    isError,
  } = useGetPortfolioQuery(undefined);
  console.log(portfolio);
  if (isLoading) {
    return <p>Loading.....</p>;
  }
  if (isError) {
    return <p>Something went to wrong</p>;
  }

  return (
    <div>
      <div className=" ">
        <div className="navsBarWrap">
          <div className="bg-[#680C70] text-white ">
            <NavBar />
          </div>
          <div className="aboutContainers portfolioContainer">
            <div className="aboutContent">
              <div className="flex items-center uppercase bg-[#680C70] text-white rounded-md w-[200px] justify-between mb-5 px-3 py-3">
                <p>Home</p>
                <FaAngleRight />
                <p>Portfolio </p>
              </div>
              <h2 className="md:text-5xl ml-0 xl:-ml-36 font-bold text-3xl text-left md:text-center uppercase ">
                Our Portfolio
              </h2>
            </div>
          </div>
        </div>
      </div>
      <Container>
        <div className="sectionMargin mb-24">
          <SectionTitle title="Working Portfolio"></SectionTitle>
          <div className="mt-8mb-24">
            <Tabs
              className="tabWrap"
              defaultTabIndex={tabIndex}
              onSelect={(index) => setTabIndex(index)}
            >
              <TabList>
                <Tab>All </Tab>
                <Tab>E-Commerce</Tab>
                <Tab>Travel Agency </Tab>
                <Tab>News Portal </Tab>
                <Tab>Corporate </Tab>
                <Tab>Real Estate </Tab>
                <Tab>Education </Tab>
              </TabList>
              <TabPanel>
                <div className="portfolio grid grid-cols-1 lg:grid-cols-2 justify-between gap-10">
                  <Link>
                    <div
                      style={{
                        backgroundImage: `url('../../../public/assets/AirTrips.png')`,
                        backgroundSize: "cover",
                      }}
                      className="singlePortfolio  "
                    >
                      <div className="bg-[#680C70] text-white absolute w-full px-10 py-2 right-0 bottom-0  ">
                        <h2 className="text-xl">Ghuronti Travels Ltd</h2>
                        <p>
                          {" "}
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quaerat sequi pariatur in fuga non aliquid ut
                          molestiae similique ipsa facere.{" "}
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link>
                    <div
                      style={{
                        backgroundImage: `url('../../../public/assets/AirTrips.png')`,
                        backgroundSize: "cover",
                      }}
                      className="singlePortfolio  "
                    >
                      <div className="bg-[#680C70] text-white absolute w-full px-10 py-2 right-0 bottom-0  ">
                        <h2 className="text-xl">Ghuronti Travels Ltd</h2>
                        <p>
                          {" "}
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quaerat sequi pariatur in fuga non aliquid ut
                          molestiae similique ipsa facere.{" "}
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link>
                    <div
                      style={{
                        backgroundImage: `url('../../../public/assets/AirTrips.png')`,
                        backgroundSize: "cover",
                      }}
                      className="singlePortfolio  "
                    >
                      <div className="bg-[#680C70] text-white absolute w-full px-10 py-2 right-0 bottom-0  ">
                        <h2 className="text-xl">Ghuronti Travels Ltd</h2>
                        <p>
                          {" "}
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quaerat sequi pariatur in fuga non aliquid ut
                          molestiae similique ipsa facere.{" "}
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link>
                    <div
                      style={{
                        backgroundImage: `url('../../../public/assets/AirTrips.png')`,
                        backgroundSize: "cover",
                      }}
                      className="singlePortfolio  "
                    >
                      <div className="bg-[#680C70] text-white absolute w-full px-10 py-2 right-0 bottom-0  ">
                        <h2 className="text-xl">Ghuronti Travels Ltd</h2>
                        <p>
                          {" "}
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quaerat sequi pariatur in fuga non aliquid ut
                          molestiae similique ipsa facere.{" "}
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link>
                    <div
                      style={{
                        backgroundImage: `url('../../../public/assets/AirTrips.png')`,
                        backgroundSize: "cover",
                      }}
                      className="singlePortfolio  "
                    >
                      <div className="bg-[#680C70] text-white absolute w-full px-10 py-2 right-0 bottom-0  ">
                        <h2 className="text-xl">Ghuronti Travels Ltd</h2>
                        <p>
                          {" "}
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quaerat sequi pariatur in fuga non aliquid ut
                          molestiae similique ipsa facere.{" "}
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link>
                    <div
                      style={{
                        backgroundImage: `url('../../../public/assets/AirTrips.png')`,
                        backgroundSize: "cover",
                      }}
                      className="singlePortfolio  "
                    >
                      <div className="bg-[#680C70] text-white absolute w-full px-10 py-2 right-0 bottom-0  ">
                        <h2 className="text-xl">Ghuronti Travels Ltd</h2>
                        <p>
                          {" "}
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quaerat sequi pariatur in fuga non aliquid ut
                          molestiae similique ipsa facere.{" "}
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link>
                    <div
                      style={{
                        backgroundImage: `url('../../../public/assets/AirTrips.png')`,
                        backgroundSize: "cover",
                      }}
                      className="singlePortfolio  "
                    >
                      <div className="bg-[#680C70] text-white absolute w-full px-10 py-2 right-0 bottom-0  ">
                        <h2 className="text-xl">Ghuronti Travels Ltd</h2>
                        <p>
                          {" "}
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quaerat sequi pariatur in fuga non aliquid ut
                          molestiae similique ipsa facere.{" "}
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link>
                    <div
                      style={{
                        backgroundImage: `url('../../../public/assets/AirTrips.png')`,
                        backgroundSize: "cover",
                      }}
                      className="singlePortfolio  "
                    >
                      <div className="bg-[#680C70] text-white absolute w-full px-10 py-2 right-0 bottom-0  ">
                        <h2 className="text-xl">Ghuronti Travels Ltd</h2>
                        <p>
                          {" "}
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quaerat sequi pariatur in fuga non aliquid ut
                          molestiae similique ipsa facere.{" "}
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link>
                    <div
                      style={{
                        backgroundImage: `url('../../../public/assets/AirTrips.png')`,
                        backgroundSize: "cover",
                      }}
                      className="singlePortfolio  "
                    >
                      <div className="bg-[#680C70] text-white absolute w-full px-10 py-2 right-0 bottom-0  ">
                        <h2 className="text-xl">Ghuronti Travels Ltd</h2>
                        <p>
                          {" "}
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quaerat sequi pariatur in fuga non aliquid ut
                          molestiae similique ipsa facere.{" "}
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link to="https://www.ghuronti.com/hajj/search">
                    <div className="singlePortfolio portfolio10">
                      <div className="bg-[#680C70] text-white absolute w-full right-0 bottom-0  ">
                        <h2 className="text-xl">Hajj & Umrah Package </h2>
                      </div>
                    </div>
                  </Link>
                  <Link to="https://havenly-de0a6.web.app/">
                    <div className="singlePortfolio portfolio11">
                      <div className="bg-[#680C70] text-white absolute w-full right-0 bottom-0  ">
                        <h2 className="text-xl">House Rent </h2>
                      </div>
                    </div>
                  </Link>
                  <Link to="https://monumental-cheesecake-9a7972.netlify.app/">
                    <div className="singlePortfolio portfolio12">
                      <div className="bg-[#680C70] text-white absolute w-full right-0 bottom-0  ">
                        <h2 className="text-xl">Ghuronti Travels Ltd</h2>
                      </div>
                    </div>
                  </Link>
                  <Link to="https://www.ghuronti.com/hotel">
                    <div className="singlePortfolio portfolio13">
                      <div className="bg-[#680C70] text-white absolute w-full right-0 bottom-0  ">
                        <h2 className="text-xl">Digital Agency </h2>
                      </div>
                    </div>
                  </Link>
                  <Link to="https://subtle-selkie-38000f.netlify.app/">
                    <div className="singlePortfolio portfolio14">
                      <div className="bg-[#680C70] text-white absolute w-full right-0 bottom-0  ">
                        <h2 className="text-xl">Landing Page </h2>
                      </div>
                    </div>
                  </Link>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="portfolio grid grid-cols-1 lg:grid-cols-2 place-items-center">
                  <Link to="https://www.crateandbarrel.com/">
                    <div className="singlePortfolio portfolio16">
                      <div className="bg-[#680C70] text-white absolute w-full right-0 bottom-0  ">
                        <h2 className="text-xl">Crateandbarrel</h2>
                      </div>
                    </div>
                  </Link>
                  <Link to="https://nextstair.com/">
                    <div className="singlePortfolio portfolio17">
                      <div className="bg-[#680C70] text-white absolute w-full right-0 bottom-0  ">
                        <h2 className="text-xl">NextStair</h2>
                      </div>
                    </div>
                  </Link>
                  <Link to="https://www.makearchitects.com/">
                    <div className="singlePortfolio portfolio18">
                      <div className="bg-[#680C70] text-white absolute w-full right-0 bottom-0  ">
                        <h2 className="text-xl">Make Ltd</h2>
                      </div>
                    </div>
                  </Link>
                  <Link to="https://www.allbirds.com/">
                    <div className="singlePortfolio portfolio15">
                      <div className="bg-[#680C70] text-white absolute w-full right-0 bottom-0  ">
                        <h2 className="text-xl">Allbirds</h2>
                      </div>
                    </div>
                  </Link>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="portfolio grid grid-cols-1 lg:grid-cols-2 place-items-center">
                  <Link to="https://www.ghuronti.com/hotel">
                    <div className="singlePortfolio portfolio1">
                      <div className="bg-[#680C70] text-white absolute w-full right-0 bottom-0  ">
                        <h2 className="text-xl">Ghuronti Travels Ltd</h2>
                      </div>
                    </div>
                  </Link>
                  <Link to="https://airtrips.net/">
                    <div className="singlePortfolio portfolio4">
                      <div className="bg-[#680C70] text-white absolute w-full right-0 bottom-0  ">
                        <h2 className="text-xl">Airtrips </h2>
                      </div>
                    </div>
                  </Link>
                  <Link to="https://www.ghuronti.com/flight/flightSearch">
                    <div className="singlePortfolio portfolio9">
                      <div className="bg-[#680C70] text-white absolute w-full right-0 bottom-0  ">
                        <h2 className="text-xl">Flight Bookng</h2>
                      </div>
                    </div>
                  </Link>
                  <Link to="https://www.ghuronti.com/hajj/search">
                    <div className="singlePortfolio portfolio10">
                      <div className="bg-[#680C70] text-white absolute w-full right-0 bottom-0  ">
                        <h2 className="text-xl">Hajj & Umrah Package </h2>
                      </div>
                    </div>
                  </Link>
                  <Link to="https://www.ghuronti.com/bus/search">
                    <div className="singlePortfolio portfolio8">
                      <div className="bg-[#680C70] text-white absolute w-full right-0 bottom-0  ">
                        <h2 className="text-xl">Bus Ticket Booking </h2>
                      </div>
                    </div>
                  </Link>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="portfolio grid grid-cols-1 lg:grid-cols-2 place-items-center">
                  <Link to="https://nextstair.com/">
                    <div className="singlePortfolio portfolio2">
                      <div className="bg-[#680C70] text-white absolute w-full right-0 bottom-0  ">
                        <h2 className="text-xl">NextStair</h2>
                      </div>
                    </div>
                  </Link>
                  <Link to="https://arkaxis.net/">
                    <div className="singlePortfolio portfolio3">
                      <div className="bg-[#680C70] text-white absolute w-full right-0 bottom-0  ">
                        <h2 className="text-xl">Arkaxis Ltd</h2>
                      </div>
                    </div>
                  </Link>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="portfolio grid grid-cols-1 lg:grid-cols-2 place-items-center">
                  <Link to="https://nextstair.com/">
                    <div className="singlePortfolio portfolio2">
                      <div className="bg-[#680C70] text-white absolute w-full right-0 bottom-0  ">
                        <h2 className="text-xl">NextStair</h2>
                      </div>
                    </div>
                  </Link>
                  <Link to="https://arkaxis.net/">
                    <div className="singlePortfolio portfolio3">
                      <div className="bg-[#680C70] text-white absolute w-full right-0 bottom-0  ">
                        <h2 className="text-xl">Arkaxis Ltd</h2>
                      </div>
                    </div>
                  </Link>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="portfolio grid grid-cols-1 lg:grid-cols-2 place-items-center">
                  <Link to="https://nextstair.com/">
                    <div className="singlePortfolio portfolio2">
                      <div className="bg-[#680C70] text-white absolute w-full right-0 bottom-0  ">
                        <h2 className="text-xl">NextStair</h2>
                      </div>
                    </div>
                  </Link>
                  <Link to="https://arkaxis.net/">
                    <div className="singlePortfolio portfolio3">
                      <div className="bg-[#680C70] text-white absolute w-full right-0 bottom-0  ">
                        <h2 className="text-xl">Arkaxis Ltd</h2>
                      </div>
                    </div>
                  </Link>
                </div>
              </TabPanel>
              <TabPanel>
                <h3 className="text-4xl font-bold text-center">
                  Education Website{" "}
                </h3>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Portfolio;

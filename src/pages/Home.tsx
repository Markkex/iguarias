import React, { FC, Fragment } from "react";
import Footer from "../components/Footer";
import HomeReservation from "../components/HomeReservation";
import Menu from "../components/Menu";
import Presentation from "../components/Presentation";
const Home: FC = () => {
  return (
    <Fragment>
      <div className="home">
        <div className="heading">
          <Menu />
        </div>
        <div className="about-section">
          <Presentation />
        </div>
        <HomeReservation />
        <Footer />
      </div>
    </Fragment>
  );
};

export default Home;

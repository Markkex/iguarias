import React, { FC, Fragment } from "react";
import FoodMenu from "../components/FoodMenu";
import Footer from "../components/Footer";
import HomeReservation from "../components/HomeReservation";
import Location from "../components/Location";
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
        <FoodMenu />
        <HomeReservation />
        <Location />
        <Footer />
      </div>
    </Fragment>
  );
};

export default Home;

import React, { FC } from "react";
import image from "../media/bebida.PNG";
const Presentation: FC = () => {
  return (
    <div className="presentation">
      <div className="about-image">
        <img src={image} alt="drink" />
      </div>
      <div className="about-content">
        Iguarias da Vila is located in Fuzeta where is home to many fisherman.
        <br />
        <br />
        Our dishes are inspired on Mediterranic, European and Portuguese food
        where we also have option for vegan enthusiasts.
        <br />
        <br />
        Our food is prepared daily with the highest quality to ensure that
        freshest meals are delivered to our customers.
        <br />
        <br />
        Located in the historic plaza of fuzeta it welcomes many visitors during
        the whole year.
        <br />
        <br />
        It's architectonic design resembles the typical housing during the late
        50's is an ode to Fuzeta.
        <br />
        <br />
      </div>
    </div>
  );
};

export default Presentation;

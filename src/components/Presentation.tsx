import React, { FC } from "react";
import image from "../media/bebida.PNG";
const Presentation: FC = () => {
  return (
    <div className="presentation">
      <div className="about-image">
        <img src={image} alt="drink" />
      </div>
      <div className="about-content">
        <p>
          Iguarias da Vila is located in Fuzeta where is home to many fisherman.
        </p>
        <br />
        <p>
          Our dishes are inspired on Mediterranic, European and Portuguese food
          where we also have option for vegan enthusiasts.
        </p>
        <br />
        <p>
          Our food is prepared daily with the highest quality to ensure that
          freshest meals are delivered to our customers.
        </p>
        <br />
        <p>
          Located in the historic plaza of fuzeta it welcomes many visitors
          during the whole year.
        </p>
        <br />
        <p>
          It's architectonic design resembles the typical housing during the
          late 50's is an ode to Fuzeta.
        </p>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Presentation;

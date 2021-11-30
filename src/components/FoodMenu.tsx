import React, { useState } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const FoodMenu = () => {
  const [current, setCurrent] = useState(0);

  const sliderData = [
    { image: "https://www.collinsdictionary.com/images/full/cow_55631443.jpg" },
    {
      image:
        "https://www.economist.com/sites/default/files/images/2021/09/articles/main/20210918_stp504.jpg",
    },
  ];
  const length = sliderData.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(sliderData) || sliderData.length <= 0) {
    return null;
  }
  return (
    <div className="slider">
      <ChevronLeftIcon onClick={prevSlide} className="left-arrow" />
      <ChevronRightIcon onClick={nextSlide} className="right-arrow" />
      {sliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="menu image" className="image" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FoodMenu;

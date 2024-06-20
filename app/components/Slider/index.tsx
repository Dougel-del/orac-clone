"use client";
import useDevice from "@/app/hooks/useDeviceDetection";
import ReactPlayer from "react-player";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const SliderComponent = () => {
  const device = useDevice();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <>
      {device === "desktop" ? (
        <div className="video-box">
          <ReactPlayer url="https://youtu.be/r6iDh-M-Rzk?t=1" />
          <ReactPlayer url="https://youtu.be/PG965Q584fY" />
          <ReactPlayer url="https://youtu.be/HsbE9lmM64M" />
          <ReactPlayer url="https://youtu.be/dbUR_ebWLII" />
        </div>
      ) : (
        <div className={`slider-container`}>
          <Slider {...settings}>
            <ReactPlayer url="https://youtu.be/r6iDh-M-Rzk?t=1" />
            <ReactPlayer url="https://youtu.be/PG965Q584fY" />
            <ReactPlayer url="https://youtu.be/HsbE9lmM64M" />
            <ReactPlayer url="https://youtu.be/dbUR_ebWLII" />
          </Slider>
        </div>
      )}
    </>
  );
};

export default SliderComponent;

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Moviecard from "./Moviecard";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Movieslide = ({ movie }) => {

  return (
    <div>
      <Carousel className="캐러셀" responsive={responsive}>
        {movie && movie.map((item) => <Moviecard movie={item}/>)}
      </Carousel>
    </div>
  );
};

export default Movieslide;

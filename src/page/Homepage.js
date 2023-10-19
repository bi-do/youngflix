import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { 영화API패치 } from "../redux/reducer/action/movieaction";
import Banner from "../component/Banner";
import Movieslide from "../component/Movieslide";
import { ClipLoader } from "react-spinners";
import { Container } from "react-bootstrap";

const Homepage = () => {
  const dispatch = useDispatch();
  const 인기영화 = useSelector((state) => state.movie.인기영화);
  const 탑레영화 = useSelector((state) => state.movie.탑레영화);
  const 상영예정 = useSelector((state) => state.movie.상영예정);
  const 로딩 = useSelector((state) => state.movie.로딩);

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "gray",
  };

  useEffect(() => {
    dispatch(영화API패치());
  }, []);

  if (로딩) {
    return (
      <div className="홈페이지 홈페이지-로딩스피너">
        <ClipLoader
          color="#ffffff"
          loading={로딩}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
          className="로딩스피너"
        />
      </div>
    );
  } else {
    return (
      <div className="홈페이지">
        {인기영화.results && <Banner movie={인기영화.results[0]} />}
        <Container>
          <h1>인기영화</h1>
          <Movieslide movie={인기영화.results} />
          <h1>TOP Rate</h1>
          <Movieslide movie={탑레영화.results} />
          <h1>상영 예정</h1>
          <Movieslide movie={상영예정.results} />
        </Container>
      </div>
    );
  }
};

export default Homepage;

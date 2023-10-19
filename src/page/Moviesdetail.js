import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Badge, Col, Container, Row } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faUsers } from "@fortawesome/free-solid-svg-icons";
import Movieotherinfo from "../component/Movieotherinfo";
import Modal from "../component/Modal";
import Review from "../component/Review";
import Relatedmovies from "../component/Relatedmovies";


const Movisdetail = () => {
  const 영화 = useSelector((state) => state.movie.디테일아이템);
  const 로딩 = useSelector((state) => state.movie.로딩);
  const 추천영화 = useSelector((state)=>state.movie.추천영화)
  const 영화리뷰 = useSelector((state)=>state.movie.영화리뷰)
  const [리뷰보기,셋리뷰보기] = useState(true)

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "gray",
  };


  if (로딩 === true) {
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
      <div className="영화디테일-백그라운드">
        <Container>
          <Row className="영화디테일-전체">
            <Col md={4} sm={12}>
              <div
                className="영화디테일-이미지"
                style={{
                  backgroundImage: `url(https://www.themoviedb.org/t/p/w300_and_h450_bestv2${영화.poster_path})`,
                }}  
              ></div>
            </Col>
            <Col md={8} sm={12}>
              <div>
                <div>
                  <div className="카드-라인-뱃지">
                    {영화.genres.map((item) => (
                      <Badge bg="danger" className="영화디테일-카드-뱃지">
                        {item.name}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h1 className="영화디테일-제목">{영화.title}</h1>
                  <div className="영화디테일-태그라인">{영화.tagline}</div>
                </div>
                <div>
                  <span className="영화디테일-평가들">
                    <FontAwesomeIcon icon={faStar} />{" "}
                    {영화.vote_average.toFixed(1)}
                  </span>
                  <span className="영화디테일-평가들 영화디테일-인기도">
                    <FontAwesomeIcon icon={faUsers} /> {영화.popularity}
                  </span>
                  <span className="영화디테일-평가들 카드-이용가">{영화.adult === false ? "Under 18" : "Adult"}</span>
                </div>
                <div className="영화디테일-설명">
                  {영화.overview}
                </div>
                <div>
                  <Movieotherinfo 영화={영화} />
                </div>
                <div>
                  <Modal/>
                </div>
              </div>
            </Col>
          </Row>
          <div>
            <div>
              <button onClick={()=>셋리뷰보기(true)} className={`리뷰버튼 ${리뷰보기===true?'활성버튼':''}`}>REVIES ({영화리뷰.results.length})</button>
              
              <button onClick={()=>셋리뷰보기(false)} className={`리뷰버튼 ${리뷰보기===false?'활성버튼':''}`}>RELATED MOVIES ({추천영화.results.length})</button>
            </div>
            <div>
              {리뷰보기===true? <Review/> : <Relatedmovies/>}
            </div>
          </div>
          
        </Container>
      </div>
    );
  }
};

export default Movisdetail;

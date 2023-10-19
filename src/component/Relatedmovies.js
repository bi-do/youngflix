import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import { 영화디테일패치 } from "../redux/reducer/action/movieaction";

const Relatedmovies = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const 추천영화 = useSelector((state) => state.movie.추천영화);
  const 장르 = useSelector((state) => state.movie.장르);
  const 무비카드 = (item) => {
    dispatch(영화디테일패치(item.id));
    navigate("/영화디테일");
  };
  return (
    <Row className="추천영화-전체">
      {추천영화.results.length > 0? 추천영화.results.map((item) => (
        <Col className="추천영화">
          <div
            className="카드 추천카드"
            onClick={() => {
              무비카드(item);
            }}
            style={{
              backgroundImage: `url(https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${item.backdrop_path})`,
            }}
          >
            <div className="오버레이">
              <div className="카드-제목">{item.title}</div>
              <div className="카드-장르">
                {item.genre_ids.map((item) => (
                  <Badge bg="primary" className="카드-뱃지">
                    {장르.genres.find((it) => it.id === item).name}
                  </Badge>
                ))}
              </div>
              <div>
                <span className="카드-평점">{item.vote_average}점</span>
                <span className="카드-이용가">
                  {item.adult === false ? null : (
                    <Badge bg="danger">성인</Badge>
                  )}
                </span>
              </div>
            </div>
          </div>
        </Col>
      )):<div>
        추천영화가 없습니다.
        </div>}
    </Row>
  );
};

export default Relatedmovies;

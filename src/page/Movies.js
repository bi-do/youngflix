import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { 영화목록패치 } from "../redux/reducer/action/movieaction";
import Movielist from "../component/Movielist";
import Pagenation from "../component/Pagebutton";
import Sort from "../component/Sort";
import Filter from "../component/Filter";

const Movies = () => {
  const 필터링영화 = useSelector((state) => state.movie.필터영화목록);
  const 로딩 = useSelector((state) => state.movie.목록로딩);

  if (로딩 === true) {
    return <div>로딩중</div>;
  } else {
    return (
      <div className="영화들">
        <div className="필터들">
          <Sort />
          <Filter />
        </div>
        <Container>
          <Row>
            {필터링영화.length > 0?
              필터링영화.map((item) => (
                <Col>
                  <Movielist 영화={item} />
                </Col>
              )):'검색결과가 존재하지 않습니다.'}
          </Row>
          <div className="페이지네이션">
            <Pagenation />
          </div>
        </Container>
      </div>
    );
  }
};

export default Movies;

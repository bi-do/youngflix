import React from "react";
import Pagination from "react-bootstrap/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { 영화검색패치, 영화목록패치 } from "../redux/reducer/action/movieaction";

const Pagebutton = () => {
  const 페이지 = useSelector((state) => state.movie.현재페이지);
  const 토탈페이지 = useSelector((state) => state.movie.토탈페이지);
  const 검색여부 = useSelector((state)=>state.movie.검색여부)
  const 현재검색어 = useSelector((state)=>state.movie.현재검색어)
  const dispatch = useDispatch();

  const 페이지이동 = (item) => {
    if(검색여부===false){
    dispatch(영화목록패치(item))
  }else{
    dispatch(영화검색패치({페이지:item, 검색어:현재검색어}))
  }
  };
  return (
    <Pagination>
      {페이지 >= 3 ? <Pagination.First onClick={() => 페이지이동(1)} /> : null}
      {페이지 >= 2 ? (
        <Pagination.Prev onClick={() => 페이지이동(페이지 - 1)} />
      ) : null}

      {페이지 >= 5 ? <Pagination.Ellipsis /> : null}

      {페이지 < 3 ? null : (
        <Pagination.Item onClick={() => 페이지이동(페이지-2)}>
          {페이지 - 2}
        </Pagination.Item>
      )}
      {페이지 < 2 ? null : (
        <Pagination.Item onClick={() => 페이지이동(페이지-1)}>
          {페이지 - 1}
        </Pagination.Item>
      )}
      <Pagination.Item active>{페이지}</Pagination.Item>
      {페이지 === 토탈페이지 ? null : (
        <Pagination.Item onClick={() => 페이지이동(페이지+1)}>
          {페이지 + 1}
        </Pagination.Item>
      )}
      {페이지 > 토탈페이지 - 1 ? null : (
        <Pagination.Item onClick={() => 페이지이동(페이지+2)}>
          {페이지 + 2}
        </Pagination.Item>
      )}

      {페이지>토탈페이지-3?null:<Pagination.Ellipsis />}
      {페이지 === 토탈페이지 ? null : <Pagination.Next onClick={() => 페이지이동(페이지+1)}/>}
      {페이지 >= 토탈페이지 - 2 ? null : <Pagination.Last onClick={() => 페이지이동(토탈페이지)}/>}
    </Pagination>
  );
};

export default Pagebutton;

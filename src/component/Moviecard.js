import React from "react";
import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { 영화디테일패치 } from "../redux/reducer/action/movieaction";

const Moviecard = ({ movie }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const 장르 = useSelector((state) => state.movie.장르);
  const 무비카드 = (item)=>{
    dispatch(영화디테일패치(item.id))
    navigate('/영화디테일')
  }
  
  return (
    <div
      className="카드" onClick={()=>{무비카드(movie)}}
      style={{
        backgroundImage: `url(https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${movie.backdrop_path})`,
      }}
    >
      <div className="오버레이">
        <div className="카드-제목">{movie.title}</div>
        <div className="카드-장르">
          {movie.genre_ids.map((item) => (
            <Badge bg="primary" className="카드-뱃지">
              {(장르.genres.find((it) => it.id === item)).name}
            </Badge>
          ))}
        </div>
        <div>
          <span className="카드-평점">{movie.vote_average}점</span>
          <span className="카드-이용가">{movie.adult === false ? null : <Badge bg="danger">성인</Badge>}</span>
        </div>
      </div>
    </div>
  );
};

export default Moviecard;

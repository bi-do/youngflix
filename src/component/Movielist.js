import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar,faUsers } from "@fortawesome/free-solid-svg-icons";
import { 영화디테일패치 } from "../redux/reducer/action/movieaction";
import { useNavigate } from "react-router";

const Movielist = ({ 영화 }) => {
  const 장르 = useSelector((state) => state.movie.장르);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const 영화디테일 = () =>{
    dispatch(영화디테일패치(영화.id))
    navigate('/영화디테일')
  }
  return (
    <div
      className="영화목록"
      style={{
        backgroundImage: `url(https://www.themoviedb.org/t/p/w300_and_h450_bestv2${영화.poster_path})`,
      }}
    onClick={영화디테일}>
      <div className="영화목록-오버레이">
        <div>
          <h3>{영화.title}</h3>
          <p>{영화.release_date.substr(0, 4)}</p>
        </div>
        <div>
          {영화.genre_ids.map((item) => (
            <Badge bg="primary" className="카드-뱃지">
              {장르.genres.find((it) => it.id === item).name}
            </Badge>
          ))}
        </div>
        <div className="영화목록-설명">{영화.overview}</div>
        <div className="영화목록-평가">
          <span> <FontAwesomeIcon icon={faStar} /> {영화.vote_average.toFixed(1)}</span>
          <span><FontAwesomeIcon icon={faUsers} /> {영화.popularity}</span>
        </div>
      </div>
    </div>
  );
};

export default Movielist;

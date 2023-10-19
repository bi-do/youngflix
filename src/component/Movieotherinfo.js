import React from "react";
import { Badge } from "react-bootstrap";

const Movieotherinfo = ({ 영화 }) => {
  return (
    <div className="영화디테일-기타정보">
      <div>
        <Badge className='기타정보뱃지' bg="danger">Budget</Badge>
        <span>$ {영화.budget}</span>
      </div>
      <div>
        <Badge className='기타정보뱃지' bg="danger">Revenue</Badge>
        <span>$ {영화.revenue}</span>
      </div>
      <div>
        <Badge className='기타정보뱃지' bg="danger">Release date</Badge>
        <span>{영화.release_date}</span>
      </div>
      <div>
        <Badge className='기타정보뱃지' bg="danger">Runtime</Badge>
        <span>{영화.runtime}m</span>
      </div>
    </div>
  );
};

export default Movieotherinfo;

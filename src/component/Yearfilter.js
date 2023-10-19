import React, { useEffect } from "react";
import { Range } from "react-range";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { 연도변경,연도필터링 } from "../redux/reducer/movieslice";

const Yearfilter = () => {
  const 연도 = useSelector((state)=>(state.movie.연도))
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(연도필터링())
  },
  [연도])
  return (
    <div className="연도-전체">
      <div>
        연도
      </div>
      <div className="연도">
        {`From.${연도[0]} - To.${연도[1]}`}
      </div>
    <Range
      step={1}
      min={1990}
      max={2023}
      values={연도}
      onChange={(연도) => dispatch(연도변경(연도))}
      renderTrack={({ props, children }) => (
        <div
          {...props}
          style={{
            ...props.style,
            height: "6px",
            width: "100%",
            backgroundColor: "#ccc",
          }}
        >
          {children}
        </div>
      )}
      renderThumb={({ props }) => (
        <div
          {...props}
          style={{
            ...props.style,
            height: "15px",
            width: "15px",
            borderRadius:'10px',
            backgroundColor: "#999",
          }}
        />
      )}
    />
    </div>
  );
};

export default Yearfilter;

import React from "react";
import { useSelector } from "react-redux";

const Review = () => {
  const 영화리뷰 = useSelector((state) => state.movie.영화리뷰);
  return (
    <div className="리뷰박스">
      {영화리뷰.results.length > 0 ? (
        영화리뷰.results.map((item) => (
          <div className="리뷰">
            <div className="리뷰작성자">{item.author}</div>
            <div className="리뷰내용">{item.content}</div>
          </div>
        ))
      ) : (
        <div>리뷰가 없습니다.</div>
      )}
    </div>
  );
};

export default Review;

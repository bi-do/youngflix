import React from 'react'

const Banner = ({movie}) => {
  return (
    <div className="배너" style={{backgroundImage:`url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${movie.backdrop_path})`,backgroundRepeat:'no-repeat'}}>
        <div className='배너-정보'>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
        </div>
        </div>
  )
}

export default Banner
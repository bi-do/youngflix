import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Dropdown } from 'react-bootstrap'
import { 장르정렬 } from '../redux/reducer/movieslice'

const Genrefilter = () => {
    const 장르 = useSelector((state)=>state.movie.장르)
    const dispatch = useDispatch()
    const 장르정렬함수 = (event)=>{
      let 장르id = 장르.genres.find((item)=>{
        return item.name === event.target.innerText
    }).id
    console.log(장르id)
      dispatch(장르정렬(장르id))
    }
  return (
    <div className='장르버튼'>
        장르
        {장르.genres.map((item)=>(
             <Dropdown.Item onClick={장르정렬함수} className='필터-장르'>{item.name}</Dropdown.Item>
        ))}
    </div>
  )
}

export default Genrefilter
import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useDispatch} from 'react-redux';
import { 인기순정렬, 인기낮음순정렬 } from '../redux/reducer/movieslice'

const Sort = () => {
    const dispatch = useDispatch()

  return (
    <DropdownButton id="dropdown-basic-button" variant='danger' title="인기순" className='필터버튼'>
      <Dropdown.Item onClick={()=>dispatch(인기순정렬())}>인기순(높음)</Dropdown.Item>
      <Dropdown.Item onClick={()=>dispatch(인기낮음순정렬())}>인기순(낮음)</Dropdown.Item>
    </DropdownButton>
  )
}

export default Sort 
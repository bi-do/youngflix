import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Yearfilter from "./Yearfilter";
import Genrefilter from "./Genrefilter";

const Filter = () => {
  return (
    <DropdownButton id="dropdown-basic-button" variant='danger' title="필터" className='필터버튼'>
      <Yearfilter/>
      <Genrefilter/>
    </DropdownButton>
  
  );
};

export default Filter;
 
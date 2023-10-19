import React from "react";
import { Navbar, Container, Form, Nav, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { 영화보기, 유저입력,유저검색,검색어확정 } from "../redux/reducer/movieslice";
import { 영화검색패치 } from "../redux/reducer/action/movieaction";
import { 영화목록패치 } from "../redux/reducer/action/movieaction";
const 내브바 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const 검색값 = useSelector((state) => state.movie.유저입력값);
  const 유저입력함수 = (event) => {
    dispatch(유저입력(event.target.value));
  };

  const 검색함수 = () => {
    dispatch(유저검색())
    dispatch(영화검색패치({검색어:검색값}));
    dispatch(검색어확정(검색값))
    navigate("/영화");
  };

  const 영화목록 = () => {
    dispatch(영화보기())
    dispatch(영화목록패치());
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src="../images/logo.png" height={40} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to={"/"} className="내브바-버튼">
              Home
            </Link>
            <Link to={"/영화"} className="내브바-버튼" onClick={영화목록}>
              Movie
            </Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={유저입력함수}
            />
            <Button variant="danger" onClick={검색함수}>
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default 내브바;

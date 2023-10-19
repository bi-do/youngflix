import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";
import YouTube from "react-youtube";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";



const Modals = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const 영화비디오 = useSelector((state) => state.movie.영화비디오);

  const opts = {
    height: "500",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

 
  return (
    <>
      <Button className="트레일러-버튼" variant="danger" onClick={handleShow}>
        <FontAwesomeIcon icon={faVideo}/> Watch Trailer
      </Button>

      <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="유튜브">
          {영화비디오.results.length<1?
          '트레일러가 존재하지않습니다':<YouTube
          videoId={
            영화비디오.results.find((item) => item.name.includes('Trailer'))
              .key
          }
          opts={opts}
       
        />}
          
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Modals;

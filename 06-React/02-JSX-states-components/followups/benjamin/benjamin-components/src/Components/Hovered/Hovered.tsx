import React from "react";
import "./Hovered.scss"
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';


const Hovered = () => {

    // offCanvas Functions
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

    return (
        <>
        <h3 style={{margin: "10px"}}>HOVER ME!/ CLICK ME!</h3>
        <div onClick={handleShow}  className="hov"></div>

        <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Welcome to my site Darling!</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          this is nice Bootstrap component im using called offCanvas
        </Offcanvas.Body>
      </Offcanvas>
        </>
    )
}

export default Hovered;
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";
import "./ModalView.css";
import Timer from "../TimerComponent/Timer";

function ModalView(props) {
  return (
    <>
      <Modal
        show={props.show}
        onHide={props.close}
        backdrop="static"
        keyboard={false}
        size="l"
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.product.Product_Name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
            <Timer duration={props.product.duration}/>
          <div className="image-div">
            <img src={props.product.img} className="responsive" alt="" />
          </div>
          <div className="details-div">
            <h2>
              <span
                style={{
                  color: "rgb(8,130,225)",
                  fontSize: "40px",
                  fontFamily: "cursive",
                }}
              >
                Description
              </span>
            </h2>
            <span
              style={{
                color: "rgb(4, 35, 63)",
                fontSize: "20px",
                fontFamily: "cursive",
              }}
            >
              {props.product.Product_Description}
            </span>
            <h2>
              <span
                style={{
                  color: "rgb(8,130,225)",
                  fontSize: "40px",
                  fontFamily: "cursive",
                }}
              >
                Seller
              </span>
            </h2>
            <span
              style={{
                color: "rgb(4, 35, 63)",
                fontSize: "20px",
                fontFamily: "cursive",
              }}
            >
              {props.product.seller}
            </span>
          </div>
          <h2>
            <span
              style={{
                color: "rgb(8,130,225)",
                fontSize: "40px",
                fontFamily: "cursive",
              }}
            >
              Current Price
            </span>
          </h2>
          <span
            style={{
              color: "rgb(4, 35, 63)",
              fontSize: "20px",
              fontFamily: "cursive",
            }}
          >
            {props.product.CurrentPrice}
          </span>
        </Modal.Body>
        <Modal.Footer>
            <input placeholder="Please enter a amount"></input>
            <Button variant="primary">Make BID</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalView;

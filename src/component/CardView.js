import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ModalView from "./Modal";

const CardView = (props) => {
  console.log(props.product);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const closeModal = () => setIsOpenModal(false);
  const openModal = () => setIsOpenModal(true);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.product.img} />
      <Card.Body>
        <Card.Title>{props.product.Product_Name}</Card.Title>
        <Card.Text>{props.product.Product_Description}</Card.Text>
        <Button variant="primary" onClick={openModal}>
          BID
        </Button>
      </Card.Body>
      {isOpenModal && (
        <ModalView
          show={openModal}
          close={closeModal}
          product={props.product}
        />
      )}
    </Card>
  );
};

export default CardView;

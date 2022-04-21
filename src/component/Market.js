import React from "react";
import CardView from "./CardView";
import "./Market.css";

const AllItem = [
  {
    Product_Name: "Iphone",
    Product_Description: "tell somthing about product",
    seller: "me",
    startPrice: "100Rs",
    CurrentPrice: "100Rs",
    duration: "5hrs",
    img: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80",
  },
  {
    Product_Name: "Mobile",
    Product_Description: "tell somthing about product",
    seller: "me",
    startPrice: "100Rs",
    CurrentPrice: "100Rs",
    duration: "5hrs",
    img: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80",
  },
];

const Market = () => {
  return (
    <ul className="item-list">
      {AllItem.map((ele) => (
        <li className="single-item">
          <CardView product={ele} />
        </li>
      ))}
    </ul>
  );
};

export default Market;

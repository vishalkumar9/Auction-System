import React from "react";
import CardView from "./CardView";
import "./Market.css";

const AllItem = [
  {
    id:1,
    Product_Name: "Iphone",
    Product_Description: "tell something about product",
    seller: "me",
    CurrentPrice: "100 Rs",
    duration: "06-30-2022",
    img: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80",
  },
  {
    id:2,
    Product_Name: "Mobile",
    Product_Description: "tell something about product",
    seller: "me",
    CurrentPrice: "100 Rs",
    duration: "06-30-2022",
    img: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80",
  },
];

const Market = () => {
  return (
      <div className="market_content">
        <ul className="item-list">
          {AllItem.map((ele) => (
            <li className="single-item">
              <CardView product={ele} />
            </li>
          ))}
        </ul>
      </div>
  );
};

export default Market;

import React,{useState} from 'react';
import {Form} from "react-bootstrap";
import "./ItemUploadForm.css";
import addImage from "../image/undraw_collaborators_re_hont.svg"
const ItemUploadForm = () => {

    const [imageFile, setImageFile] = useState();
    const [pName,setPName] = useState(); // product name
    const [pDescription,setPDescription]=useState(); // product description
    const [pCPrice,setPCPrice]=useState(); // product current price
    const [auctionEndDate,setAuctionEndDate]=useState(); //auction end date

    const handlePNameChange = (e) =>{
        setPName(e.target.value);
    }
    const handlePDescriptionChange = (e) =>{
        setPDescription(e.target.value);
    }
    const handlePCPriceChange = (e) => {
        setPCPrice(e.target.value);
    }
    const handleAuctionEndDateChange = (e) =>{
        const temp = e.target.value.split("-");
        [temp[0],temp[1]]=[temp[1],temp[0]];
        [temp[1],temp[2]]=[temp[2],temp[1]];
        const temp2 = temp.join("-");
        setAuctionEndDate(temp2);
    }

    const handleImageFileChange = (e) =>{
        setImageFile(e.target.files[0]);
    }

    const handleItemUploadInput = (e) =>{
        e.preventDefault();

        console.log(pName,pDescription,pCPrice,auctionEndDate);
    }

        return (
            <div className="form_for_item_upload">
                <div className="ImageShow">
                    <img src={addImage} />
                </div>
                <form className="item_upload_form" onSubmit={handleItemUploadInput}>
                    <h2>Item Upload Form</h2>
                    <h3>Item Details</h3>
                    <br></br>
                    <Form.Group controlId="formFile" className="mb-3 user-box">
                        <Form.Control type="file"  placeholder="upload images" accept=".jpeg, .png, .jpeg" onChange={handleImageFileChange}/>
                        <label>Image Upload</label>
                    </Form.Group>
                    <div className="user-box">
                        <input type="text" name="product_name" onChange={handlePNameChange} placeholder="Product Name"/>
                            {/*<label>Product Name</label>*/}
                    </div>
                    <div className="user-box">
                        {/*<label>Product Description</label>*/}
                        <textarea type="text" name="product_description" onChange={handlePDescriptionChange} placeholder="Product Description"/>
                    </div>
                    <div className="user-box">
                        <input type="number" name="product_currentPrice" onChange={handlePCPriceChange} placeholder="Prodcut Current Price"/>
                        {/*<label>Product Current Price</label>*/}
                    </div>
                    <h3>Auction Duration</h3>
                    <br></br>
                    <div className="user-box">
                        <input type="Date" name="auction_durationDays" onChange={handleAuctionEndDateChange}/>
                        <label>Number Of Days</label>
                    </div>

                    <button type="submit">
                        Submit
                    </button>
                </form>
            </div>
        );
}

export default ItemUploadForm;
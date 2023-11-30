import React from "react";
import "../Seller/seller.css";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import StarIcon from "@mui/icons-material/Star";
import EuroIcon from "@mui/icons-material/Euro";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { Productitems } from "../Constant/Masterdata";
// import { regFormFullData } from "../Constant/Masterdata";

function Seller() {
  const [product, setProduct] = React.useState();
  React.useEffect(() => {
    setProduct(Productitems);
    // console.log(regFormFullData);
    console.log(Productitems);
  }, []);
  return (
    // sellertitle
    <div className="seller-content">
      <div className="seller-title">
        <div className="sellerfirst-title">Best Sellers</div>
        <div className="leftside-seller">
          <div className="seller-para">
            Add bestselling products to weekly line up
          </div>
          <div className="rightside-seller">
            <div className="leftt-arrow">
              <ArrowBackIosIcon className="sellerr-arrow" />{" "}
            </div>
            <div className="right-arrow">
              <ArrowForwardIosIcon className="sellerl-arrow" />
            </div>
          </div>
        </div>
      </div>
      {/* seller product */}

      <div className="full-product">
        {/* first box */}
        {Productitems.map((list) => {
          return (
            <div className="sellerfirst-box">
              <Card id="card-items">
                <div className="product-img">
                  <Card.Img
                    variant="top"
                    className="first-img"
                    src={list.image}
                  />
                  <div className="productimg-over">
                    <Card.Img
                      variant="top"
                      className="second-img"
                      src={list.hoverimage}
                    />
                  </div>
                  <div className="product-icon">
                    <div className="product-search">
                      {" "}
                      <SearchIcon className="search-icon" />
                    </div>
                  </div>
                  <h6 className="new-box">
                    <Badge bg="secondary" className="badge-new">
                      {list.new}
                    </Badge>
                  </h6>
                </div>
                <Card.Body className="card-product">
                  <h4 className="product-title">{list.studiodesign}</h4>
                  <p className="product-use">{list.productname}</p>
                  <div>
                    {" "}
                    <StarIcon className="star" />
                    <StarIcon className="star" />
                    <StarIcon className="star" />
                    <StarIcon className="star" />
                    <StarIcon className="star" />
                  </div>
                  <div className="product-rate">
                    <EuroIcon className="product-euroicon" />
                    <span className="product-price">
                      {list.orgnalprice}
                    </span>{" "}
                    <span className="secondproduct-rate">
                      <EuroIcon className="secondproduct-euroicon" />
                      {list.discountprice}
                    </span>
                    <Badge bg="secondary" className="badge-offer">
                      <div className="percentage">-5%</div>
                    </Badge>
                  </div>
                  <div className="product-footer">
                    <div className="add-cart">ADD TO CART</div>
                    <div className="leftside-icon">
                      <ShuffleIcon className="cross-icon" /> &nbsp;
                      <FavoriteBorderIcon className="heart-icon" />
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          );
        })}

        {/* product end */}
      </div>
    </div>
    // seller products
  );
}

export default Seller;

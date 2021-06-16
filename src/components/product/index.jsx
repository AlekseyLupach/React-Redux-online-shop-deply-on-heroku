import React from "react";
import Rating from "react-rating";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { EffectFlip, Pagination, Navigation } from "swiper/core";

SwiperCore.use([EffectFlip, Pagination, Navigation]);

function Product({
  name,
  imgLeft,
  imgCenter,
  imgRight,
  term,
  available,
  price,
  oldPrice,
  popular,
  id,
}) {
  return (
    <>
      <div className="product__image">
        <Swiper pagination={true} className="mySwiper">
          <SwiperSlide>
            <img src={imgLeft} alt="product-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={imgCenter} alt="product-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={imgRight} alt="product-img" />
          </SwiperSlide>
        </Swiper>
      </div>
      <h3 className="product__title">
        <Link className="more-detailed" to={`product/${id}`}>
          {name}
        </Link>
      </h3>
      <div className="product__props">
        <span className="product__rating">
          <Rating
            className="product__rating-stars"
            emptySymbol="fa fa-star-o"
            fullSymbol="fa fa-star"
            initialRating={popular}
          />
          {popular}
        </span>
      </div>
      <div className="product__info">
        <span className="product__term">Артикул: {term}</span>
        <span className="product__available">В наличии: {available} шт</span>
      </div>
      <div className="product__price product-price">
        <span className="product-price__current">{price} BYN</span>
        <span className="product-price__old">{oldPrice} BYN</span>
      </div>
    </>
  );
}

Product.propTypes = {
  name: PropTypes.string,
  imgLeft: PropTypes.string,
  imgCenter: PropTypes.string,
  imgRight: PropTypes.string,
  term: PropTypes.number,
  available: PropTypes.number,
  price: PropTypes.number,
  oldPrice: PropTypes.number,
  onAddProduct: PropTypes.func,
  countProductAdded: PropTypes.number,
};

Product.defaultProps = {
  name: "---",
  price: 0,
  term: 0,
  available: 0,
  oldPrice: 0,
};

export default Product;

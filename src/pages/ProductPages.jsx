import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchProduct } from "../redux/actions/product";
import { Swiper, SwiperSlide } from "swiper/react";
import Rating from "react-rating";
import { addProductToCart } from "../redux/actions/cart";
import { Loaders } from "../components";

import SwiperCore, { Navigation, Thumbs } from "swiper/core";
import AddToCartButton from "../components/AddToCartButton";
SwiperCore.use([Navigation, Thumbs]);

function ProductPages() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const isLoaded = useSelector(({ product }) => product.isLoaded);
  const cartitems = useSelector(({ cart }) => cart.items);
  const product = useSelector(({ product }) => product.item[0]);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [dispatch, id]);

  const handleAddProductToCart = (ojb) => {
    dispatch(addProductToCart(ojb));
  };

  return (
    <main>
      {isLoaded ? (
        <div className="container product-wrapper">
          <div className="product-swiper">
            <Swiper
              onSwiper={(value) => setThumbsSwiper(value)}
              spaceBetween={10}
              slidesPerView={5}
              freeMode={true}
              watchSlidesVisibility={true}
              watchSlidesProgress={true}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={product.imgLeft} alt="product-img" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={product.imgCenter} alt="product-img" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={product.imgRight} alt="product-img" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={product.imgLeft} alt="product-img" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={product.imgLeft} alt="product-img" />
              </SwiperSlide>
            </Swiper>
            <Swiper
              style={{
                "--swiper-navigation-color": "#D9D9D9",
                "--swiper-pagination-color": "#D9D9D9",
              }}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              className="mySwiper2"
            >
              <SwiperSlide className="swiper">
                <img src={product.imgLeft} alt="product-img" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={product.imgCenter} alt="product-img" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={product.imgRight} alt="product-img" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={product.imgLeft} alt="product-img" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={product.imgLeft} alt="product-img" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="product-info">
            <span className="vendor">Артикул: {product.term}</span>
            <h1 className="title">{product.name}</h1>
            <div className="testimonials">
              <div className="product__rating">
                <span className="product__rating">
                  <Rating
                    className="product__rating-stars"
                    emptySymbol="fa fa-star-o"
                    fullSymbol="fa fa-star"
                    initialRating={product.popular}
                  />
                  {product.popular}
                </span>
              </div>
            </div>
            <span className="available">В началии:{product.available} шт</span>
            <p className="product-description">{product.description}</p>
            <div className="price">
              <span className="price__current">{product.price} BYN</span>
              <span className="price__old">{product.oldPrice} BYN</span>
            </div>
            <AddToCartButton
              onClick={() => handleAddProductToCart({ ...product })}
              countProductAdded={
                cartitems[product.id] && cartitems[product.id].items.length
              }
            />
          </div>
        </div>
      ) : (
        <Loaders />
      )}
    </main>
  );
}

export default ProductPages;

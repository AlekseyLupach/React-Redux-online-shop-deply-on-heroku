import React from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper/core";
import { YMaps, Map, Placemark } from "react-yandex-maps";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

import app from "../img/catalog/app.jpg";
import mac from "../img/owl-slider/mac.jpg";
import casse from "../img/catalog/case.jpg";
import tv from "../img/advantages-cards/tv.svg";
import iphone from "../img/owl-slider/iphone.jpg";
import car from "../img/advantages-cards/car.svg";
import card from "../img/advantages-cards/card.svg";
import tools from "../img/advantages-cards/tools.svg";
import airpodsPRO from "../img/catalog/airpodsPRO-3.jpg";
import airprodsmax from "../img/owl-slider/airprodsmax.jpg";
import premiumReseller from "../img/about-us/premium-reseller.jpg";

SwiperCore.use([Pagination]);

function HomePages() {
  return (
    <main>
      <section className="carusel">
        <Swiper
          pagination={true}
          className="mySwiper"
          autoplay={{
            delay: 250,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide className="swiper-item">
            <img src={airprodsmax} alt={airprodsmax} />
          </SwiperSlide>
          <SwiperSlide className="swiper-item">
            <img src={iphone} alt={iphone} />
          </SwiperSlide>
          <SwiperSlide className="swiper-item">
            <img src={mac} alt={mac} />
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="products-advertising">
        <div className="products-advertising__wrapper">
          <div className="product-advertising">
            <div className="product-img">
              <img src={airpodsPRO} alt={airpodsPRO} />
            </div>
            <div className="product-info">
              <div className="product-name">AirPods</div>
              <div className="product-text product-info__text">
                Никаких проводов.Никаких сложностей
              </div>
              <Link to="catalog" className="product-btn">
                Купить
              </Link>
            </div>
          </div>
          <div className="product-advertising">
            <div className="product-img">
              <img src={casse} alt={casse} />
            </div>
            <div className="product-info">
              <div className="product-name">Чехлы на Iphone 12 / 12 PRO</div>
              <div className="product-text">Только идеальные пары.</div>
              <Link to="catalog" className="product-btn">
                Купить
              </Link>
            </div>
          </div>
          <div className="product-advertising">
            <div className="product-img">
              <img src={app} alt={app} />
            </div>
            <div className="product-info">
              <div className="product-name">Карта клиента</div>
              <div className="product-text">
                Совершай покупки и получайте бонусы на счет.
              </div>
              <Link to="catalog" className="product-btn">
                Подробнее
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="products-nav ">
        <div className="grid-container container">
          <div className="macbook product-nav">
            <div className="product-name">Macbook</div>
            <Link to="catalog" className="product-btn">
              Купить
            </Link>
          </div>
          <div className="iphone  product-nav">
            <div className="product-name">Iphone</div>
            <Link to="catalog" className="product-btn">
              Купить
            </Link>
          </div>
          <div className="ipad product-nav">
            <div className="product-name">Ipad</div>
            <Link to="catalog" className="product-btn">
              Купить
            </Link>
          </div>
          <div className="accessories  product-nav">
            <div className="product-name">Аксессуары</div>
            <Link to="catalog" className="product-btn">
              Купить
            </Link>
          </div>
          <div className="mac-mini  product-nav">
            <div className="product-name">Mac-mini</div>
            <Link to="catalog" className="product-btn">
              Купить
            </Link>
          </div>
          <div className="smart-home  product-nav">
            <div className="product-name">Apple Watch</div>
            <Link to="catalog" className="product-btn">
              Купить
            </Link>
          </div>
        </div>
      </section>

      <section className="about-us" id="about-us" name="about-us">
        <div className="about-us_wrapper container">
          <div className="about-us_video">
            <img src={premiumReseller} alt={premiumReseller} />
            <Link
              className="about-us_button popup-youtube"
              to={
                "/"
                // "https://www.youtube.com/watch?v=0Yo8vfQq_Z8?autoplay=1&amp;rel=0"
              }
            ></Link>
          </div>
          <div className="about-us_text">
            <h4>
              A-Store (AСтор) – официальный партнёр компании Apple в Беларуси со
              статусом Apple Premium Reseller.
            </h4>
            <p>
              Статус Apple Premium Reseller даётся только профессионалам в своём
              деле.
            </p>
            <p>
              В наших магазинах можно не только купить iPhone, компьютер Mac или
              планшет iPad, а также другую технику Apple inc и аксессуары для
              неё. A-Store – это прежде всего место, пропитанное атмосферой
              Apple, в котором вам помогут с выбором техники, научат ей
              пользоваться, дадут советы по эксплуатации ваших гаджетов и
              предложат качественные аксессуары.
            </p>
          </div>
        </div>
      </section>

      <section className="advantages-cards" id="advantages-cards">
        <h1 className="advantages-cards_title container">Услуги</h1>
        <div className="container advantages-cards__wrapper">
          <div className="advantages-cards_card">
            <div className="advantages-card_img">
              <img src={card} alt={card} />
            </div>
            <div className="advantages-card_title">Рассрочка и кредит</div>
            <div className="advantages-card_subtitle">
              С нашими кредитными предложениями продукция Apple действительно
              впишется в любой бюджет.
            </div>
          </div>
          <div className="advantages-cards_card">
            <div className="advantages-card_img">
              <img src={car} alt={car} />
            </div>
            <div className="advantages-card_title">Доставка по Беларуси</div>
            <div className="advantages-card_subtitle">
              Мы доставляем продукты Apple более чем в 130 городов Беларуси.
              Доставка по Минску - бесплатная.
            </div>
          </div>
          <div className="advantages-cards_card">
            <div className="advantages-card_img">
              <img src={tools} alt={tools} />
            </div>
            <div className="advantages-card_title">Сервис i-Store</div>
            <div className="advantages-card_subtitle">
              Мы поможем вам разобраться с вашим Mac, iPhone или iPad, какие бы
              вопросы у вас ни возникли.
            </div>
          </div>
          <div className="advantages-cards_card">
            <div className="advantages-card_img">
              <img src={tv} alt={tv} />
            </div>
            <div className="advantages-card_title">Видеоконсультации</div>
            <div className="advantages-card_subtitle">
              Ваш виртуальный эксперт Apple. Закажите видеоконсультацию прямо из
              магазина.
            </div>
          </div>
        </div>
      </section>

      <section className="contacts container" id="contacts">
        <h1 className="contacts__title">Контакты</h1>
        <div className="contacts__wrapper">
          <div className="contacts__info">
            <h3 className="contacts__info-title">
              <i className="fa fa-phone" aria-hidden="true"></i>
              Наши телефон:
            </h3>
            <p className="contacts__info-subtitle">
              +375 (33) 66 08 104<br></br>+375 (29) 280 38 53
            </p>
          </div>
          <div className="contacts__info">
            <h3 className="contacts__info-title">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              Наш адрес:
            </h3>
            <p className="contacts__info-subtitle">
              г. Гродно, ул. Максима Горького 1{" "}
            </p>
          </div>
          <div className="contacts__info">
            <h3 className="contacts__info-title">
              <i className="fa fa-envelope" aria-hidden="true"></i>
              Наш emeil:
            </h3>
            <p className="contacts__info-subtitle">
              cubbije@gmail.com <br></br>cubbi@mail.ru
            </p>
          </div>
          <div className="contacts__info">
            <h3 className="contacts__info-title">Мы в соц.сетях</h3>
            <i className="fa fa-instagram fa-3x fa-fw" aria-hidden="true"></i>
            <i
              className="fa fa-facebook-official fa-3x fa-fw"
              aria-hidden="true"
            ></i>
            <i className="fa fa-twitter fa-3x fa-fw" aria-hidden="true"></i>
          </div>
        </div>
        <div className="maps__wrapper">
          <YMaps>
            <Map
              width="100%"
              height="463px"
              defaultState={{
                center: [53.68615307084164, 23.831298499999974],
                zoom: 17,
              }}
            >
              <Placemark geometry={[53.68615307084164, 23.831298499999974]} />
            </Map>
          </YMaps>
        </div>
      </section>
    </main>
  );
}

export default HomePages;

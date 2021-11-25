import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="ho me__container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
          className="home__image"
        />
        <div className="home__row">
          <Product
            id="12345678"
            title="The lean Startup: How Constant Innovation Creates Radically Successful Business Paperback"
            price={19.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
          />
          <Product
            id="24680246"
            title="KenWood KMix Stand Mixer for Baking, Stylish Kithen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/717bA2+wkQL._AC_SL1500_.jpg"
          />
          {/* Product */}
        </div>

        <div className="home__row">
          <Product
            id="36936936936"
            title="YEYIAN Sigurd 3001 27” Curved PC Gaming Frameless LED Multistand Monitor, 1080P HD, 165Hz, 1ms, 3000:1, 16:9, 178°, 16.7M Colors, G-Sync, FreeSync, DP/DVI/HDMI, Speaker, Tilt/Height/Pivot Adjustable"
            image="https://m.media-amazon.com/images/I/71INubkXazS._AC_SL1500_.jpg"
            price={29.0}
            rating={3}
          />
          <Product
            id="1111111"
            title="Echo (4th Gen) | Room-filling sound with smart home hub and Alexa | Charcoal"
            price={20}
            rating={2}
            image="https://m.media-amazon.com/images/I/71JB6hM6Z6L._AC_SL1000_.jpg"
          />
          <Product
            id="00000008"
            title=" 2021 Apple 11-inch iPad Pro (Wi‑Fi, 128GB) - Silver"
            rating={4}
            price={89.0}
            image="https://m.media-amazon.com/images/I/71FEJtVJQKS._AC_SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="22222666"
            image="https://m.media-amazon.com/images/I/91o08DsRplL._AC_SL1500_.jpg"
            title="Samsung UN55RU7300FXZA Curved 55-Inch 4K UHD 7 Series Ultra HD Smart TV with HDR and Alexa Compatibility (2019 Model)"
            price={45}
            rating={2}
          />
          {/* Product */}
        </div>
      </div>
    </div>
  );
}

export default Home;

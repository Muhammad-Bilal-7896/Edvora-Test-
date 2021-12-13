import React, { useState, useEffect } from 'react'
import Router from 'next/router'
import Head from 'next/head'
import Image from 'next/image'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

//import person_image from "../public/resources/img.png";
// const person_image = require('../resources/img.png');




const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const Home = () => {
  return (
    <div id="homeMainBody">
      <div className='container_own'>
        <div className="row">
          <div className="col-md-3 h-100">
            <div className="filter_div">
              <div className="container">
                <div className="container">
                  <div className="row">
                    <h6 className="filter_txt">
                      Filters
                    </h6>
                    <p className='border_line'></p>
                  </div>
                </div>

                <div className="container_own2 mt_custom">
                  <select className="form-select form-select-sm">
                    <option selected>Products</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                  </select>

                  <select className="form-select form-select-sm">
                    <option selected>State</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                  </select>

                  <select className="form-select form-select-sm">
                    <option selected>City</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                  </select>
                </div>

              </div>
            </div>
          </div>
          <div className="col-md-9 h-100">
            <h1 className='right_heading'>Edvora</h1>
            <h3 className='right_heading1'>Products</h3>
            <p className='right_txt'>Product Name</p>

            <p className='border_line_right'></p>

            <div className="container_items">
              <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={"Desktop"}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
              >
                <div className="border_item">
                  <img src={`resources/img.png`} className='img_person_avatar' alt="Person Avatar" />
                </div>
                <div className="border_item">Item 2</div>
                <div className="border_item">Item 3</div>
                <div className="border_item">Item 4</div>
              </Carousel>;
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home;
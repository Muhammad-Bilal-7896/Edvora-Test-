import React, { useState, useEffect } from 'react'

//Importing Components
import Items from '../Items';

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

const Products = () => {

  const [api_data, set_api_data] = useState([]);

  //Using the useEffect like ComponentDidMount
  useEffect(() => {
    fetch('https://assessment-edvora.herokuapp.com')
      .then(res => res.json())
      .then(json => {
        console.log("JSON data is equal to: ", json);
        set_api_data(json)
      })
  }, [])

  return (
            <div className="container_items">
              <Carousel
                swipeable={true}
                draggable={true}
                showDots={false}
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
                {api_data.map((v, i) => {
                  return <Items
                    image={v.image}
                    product_name={v.product_name}
                    key={v.i}
                    brand_name={v.brand_name}
                    price={v.price}
                    address={`${v.address.state} , ${v.address.city}`}
                    date={v.date}
                    discription={v.discription}
                  />
                })}
              </Carousel>;
            </div>
  )
}
export default Products;
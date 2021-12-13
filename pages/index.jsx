import React, { useState, useEffect } from 'react'

//Importing Components
//Not Using products as different data is loaded while getting data from API
//import Products from '../Components/Product';
import Items from '../Components/Items';

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

  const [api_data, set_api_data] = useState([]);

  //Product names
  const [product_names, set_product_names] = useState([]);

  //States
  const [state_names, set_state_names] = useState([]);

  //City
  const [city, setCity] = useState([]);

  //Using the useEffect like ComponentDidMount
  useEffect(() => {
    fetch('https://assessment-edvora.herokuapp.com')
      .then(res => res.json())
      .then(json => {
        console.log("JSON data is equal to: ", json);
        set_api_data(json)
        let pn = [];
        let sn = [];
        let cn = [];
        for (let i = 0; i < json.length; i++) {
          pn.push(json[i].product_name);
          sn.push(json[i].address.state);
          cn.push(json[i].address.city);
        }
        set_product_names(pn);
        set_state_names(sn);
        setCity(cn);
        console.log("Pn => ", pn)
      })
  }, [])

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
                    {/* <option selected>Products</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>  */}
                    {["Products", ...product_names].map((v, i) => {
                      return <option value={v} key={i}>
                        {v}
                      </option>
                    })}
                  </select>

                  <select className="form-select form-select-sm">
                    {["State", ...state_names].map((v, i) => {
                      return <option value={v} key={i}>
                        {v}
                      </option>
                    })}
                  </select>

                  <select className="form-select form-select-sm">
                    {["City", ...city].map((v, i) => {
                      return <option value={v} key={i}>
                        {v}
                      </option>
                    })}
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
                  return <div key={i}>
                    <Items
                      image={v.image}
                      product_name={v.product_name}
                      key={v.i}
                      brand_name={v.brand_name}
                      price={v.price}
                      address={`${v.address.state} , ${v.address.city}`}
                      date={v.date}
                      discription={v.discription}
                    />
                  </div>
                })}
              </Carousel>;
            </div>

            <br />

            <p className='right_txt'>Product Name</p>

            <p className='border_line_right'></p>

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
                  return <div key={i}>
                    <Items
                      image={v.image}
                      product_name={v.product_name}
                      key={v.i}
                      brand_name={v.brand_name}
                      price={v.price}
                      address={`${v.address.state} , ${v.address.city}`}
                      date={v.date}
                      discription={v.discription}
                    />
                  </div>
                })}
              </Carousel>;
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
export default Home;
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

  //Matched PN
  const [m_pn, set_m_pn] = useState([]);

  //For Filtering of Items
  const [currentPn, setCurrentPn] = useState("");
  const [currentSn, setCurrentSn] = useState("");
  const [currentCity, setCurrentCity] = useState("");

  //Using the useEffect like ComponentDidMount
  useEffect(() => {
    fetch('https://assessment-edvora.herokuapp.com')
      .then(res => res.json())
      .then(json => {
        console.log("JSON data is equal to: ", json);
        set_api_data(json);
        let pn = [];
        let sn = [];
        let cn = [];
        for (let i = 0; i < json.length; i++) {
          pn.push(json[i].product_name);
          sn.push(json[i].address.state);
          cn.push(json[i].address.city);

        }
        var unique_pn = [...new Set(pn)]; // ["a", "b"]

        var FullData = [];

        for (let i = 0; i < unique_pn.length; i++) {
          //////////////////////////////////
          //        var check = [];
          var tempImageArray = [];
          var tempProductName;
          var tempBrandName = [];
          var tempPrice = [];
          var tempAddress = [];
          var tempDate = [];
          var tempDiscription = [];
          //////////////////////////////////
          for (let j = 0; j < json.length; j++) {
            if (unique_pn[i] == json[j].product_name) {
              // let p_name = json[i].product_name;
              // new_m_pn.push(json[i]);
              tempImageArray.push(json[j].image);
              tempProductName = json[j].product_name;
              tempBrandName.push(json[j].brand_name);
              tempPrice.push(json[j].price);
              tempAddress.push(json[j].address.state + "," + json[j].address.city);
              tempDate.push(json[j].date);
              tempDiscription.push(json[j].discription);
            }
          }
          ////////////////////////////////////////////////////////////////////////////////////////////////////
          var newData = {
            data: {
              image: tempImageArray,
              product_name: tempProductName,
              brand_name: tempBrandName,
              price: tempPrice,
              address: tempAddress,
              date: tempDate,
              discription: tempDiscription
            }
          };
          FullData.push(newData);
          ////////////////////////////////////////////////////////////////////////////////////////////////////
        }

        //console.log("Unique Product name items: ", unique_pn);

        //console.log("Full data: ", FullData)

        //Come here and now set the data ab aae ga maza ab aaya na line pe
        //set_api_data(FullData)

        set_product_names(unique_pn);
        set_state_names(sn);
        setCity(cn);
        //console.log("Pn => ", pn)
      })
  }, [])

  const changingProductNames = (e) => {
    let tempJson = [];
    for (let i = 0; i < api_data.length; i++) {
      if (e == api_data[i].product_name) {
        tempJson.push(api_data[i]);
      }
    }
    let tempPN = [];
    for (let i = 0; i < product_names.length; i++) {
      if (e == product_names[i]) {
        tempPN.push(product_names[i]);
      }
    }
    set_product_names(tempPN);
    console.log("Temp Json ==> ", tempJson)
    set_api_data(tempJson);
    alert(e);
  }
  const changingStateNames = (e) => {
    let tempJson = [];
    for (let i = 0; i < api_data.length; i++) {
      if (e == api_data[i].address.state) {
        tempJson.push(api_data[i]);
      }
    }
    console.log("Temp Json ==> ", tempJson)
    set_api_data(tempJson);
    alert(e);
  }
  const changingCity = (e) => {
    let tempJson = [];
    for (let i = 0; i < api_data.length; i++) {
      if (e == api_data[i].address.city) {
        tempJson.push(api_data[i]);
      }
    }
    console.log("Temp Json ==> ", tempJson)
    set_api_data(tempJson);
    alert(e);
  }

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
                  <select className="form-select form-select-sm"
                    onChange={(e) => changingProductNames(e.target.value)}
                    value={currentPn}
                  >
                    {["Products", ...product_names].map((v, i) => {
                      return <option value={v} key={i}>
                        {v}
                      </option>
                    })}
                  </select>

                  <select className="form-select form-select-sm"
                    onChange={(e) => changingStateNames(e.target.value)}
                    value={currentSn}
                  >
                    {["State", ...state_names].map((v, i) => {
                      return <option value={v} key={i}>
                        {v}
                      </option>
                    })}
                  </select>

                  <select className="form-select form-select-sm"
                    onChange={(e) => changingCity(e.target.value)}
                    value={currentCity}
                  >
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

            {product_names.map((pn, i) => {
              return <div key={i}>
                <p className='right_txt'>{pn}</p>

                <p className='border_line_right'></p>

                <div className="container_items">
                  <Carousel
                    swipeable={true}
                    draggable={true}
                    showDots={false}
                    responsive={responsive}
                    infinite={true}
                    autoPlay={false}
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
                    {/* If the Product Name equals the data product name then render them otherwise not */}
                    {api_data.map((data, j) => {
                      return <div key={j}>
                        {(data.product_name == pn) ? (
                          <Items
                            image={data.image}
                            product_name={data.product_name}
                            brand_name={data.brand_name}
                            price={data.price}
                            address={`${data.address.state} , ${data.address.city}`}
                            date={data.date}
                            discription={data.discription}
                          />
                        ) : (
                          <Items
                            image="Not Matched"
                            product_name="Not Matched"
                            brand_name="Not Matched"
                            price="Not Matched"
                            address="Not Matched"
                            date="Not Matched"
                            discription="Not Matched"
                          />
                        )}
                        {/* <Items
                          image={data.image}
                          product_name={data.product_name}
                          key={data.j}
                          brand_name={data.brand_name}
                          price={data.price}
                          address={`${data.address.state} , ${data.address.city}`}
                          date={data.date}
                          discription={data.discription}
                        /> */}
                      </div>
                    })}
                  </Carousel>
                </div>
              </div>
            })}


            <br /><br />

            {/* <br />

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
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home;
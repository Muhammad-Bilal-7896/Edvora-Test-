import React, { useState, useEffect } from 'react'
import Router from 'next/router'
import Head from 'next/head'
import Image from 'next/image'

import firebase from '../firebase/index';
import "firebase/firestore"

const Home = () => {
  return (
    <div id="homeMainBody">
      <div className='container_own'>
        <div className="row">
          <div className="col-md-3 border h-100">
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
          <div className="col-md-9 border h-100">

          </div>
        </div>
      </div>
    </div>
  )
}
export default Home;
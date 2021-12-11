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
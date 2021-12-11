import React, { useState, useEffect } from 'react'
import Router from 'next/router'
import Head from 'next/head'
import Image from 'next/image'

import firebase from '../firebase/index';
import "firebase/firestore"

const Home = () => {
  return (
    <div id="homeMainBody">
      <div className='container'>
        <div className="row">
          <div className="col-md-3 border">

          </div>
          <div className="col-md-9 border">

          </div>
        </div>
      </div>
    </div>
  )
}
export default Home;
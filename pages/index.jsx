import React, { useState, useEffect } from 'react'
import Router from 'next/router'
import Head from 'next/head'
import Image from 'next/image'

import firebase from '../firebase/index';
import "firebase/firestore"

const Home = () => {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}
export default Home;
import React from 'react'
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <>
<h1>HOME</h1>
<Link to="/">Home</Link> &nbsp; &nbsp; &nbsp; &nbsp;
<Link to="/about-us">About</Link> &nbsp; &nbsp; &nbsp; &nbsp;
<Link to="services">Service</Link> &nbsp; &nbsp; &nbsp; &nbsp;
<Link to="/contact">Contact</Link> &nbsp; &nbsp; &nbsp; &nbsp;

    </>

  )
}

export default Home
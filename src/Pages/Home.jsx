import React from 'react'
import Banner from '../Component/Core/Home/Banner'
import Offer from '../Component/Core/Home/Offer'
import Blog from '../Component/Core/Home/Blog'
import Shopabout from '../Component/Core/Home/Shopabout'
import Getintouch from '../Component/Core/Home/Getintouch'

const Home = () => {
  return (
    <>
    <Banner/>
    <Offer/>
    <Shopabout/>

 


<div className="client_section layout_padding">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <h1 className="about_taital">What syas customers</h1>
        <div className="bulit_icon"><img src="images/bulit-icon.png" /></div>
      </div>
    </div>
    <div className="client_section_2">
      <div className="client_taital_main">
        <div className="client_left">
          <div className="client_img"><img src="images/client-img1.png" /></div>
        </div>
        <div className="client_right">
          <h3 className="moark_text">Joy Moark</h3>
          <p className="client_text">now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancynow use Lorem Ipsum as their default model text, </p>
        </div>
      </div>
      <div className="client_taital_main">
        <div className="client_left">
          <div className="client_img"><img src="images/client-img2.png" /></div>
        </div>
        <div className="client_right">
          <h3 className="moark_text">Mihacal</h3>
          <p className="client_text">now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancynow use Lorem Ipsum as their default model text, </p>
        </div>
      </div>
      <div className="client_taital_main">
        <div className="client_left">
          <div className="client_img"><img src="images/client-img3.png" /></div>
        </div>
        <div className="client_right">
          <h3 className="moark_text">Uliya den</h3>
          <p className="client_text">now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancynow use Lorem Ipsum as their default model text, </p>
        </div>
      </div>
    </div>
  </div>
</div>



<Blog/>
<Getintouch/>
    
    </>
  )
}

export default Home
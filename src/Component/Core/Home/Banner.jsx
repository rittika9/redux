import React from 'react'

const Banner = () => {
  return (
    <>
   <div className="banner_section layout_padding">
  <div className="container">
    <div id="banner_slider" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="row">
            <div className="col-md-6">
              <div className="banner_img"><img src="images/banner-img.png" /></div>
            </div>
            <div className="col-md-6">
              <div className="banner_taital_main">
                <h1 className="banner_taital">coffee</h1>
                <h5 className="tasty_text">Tasty Of DozeCafe</h5>
                <p className="banner_text">more-or-less normal distribution of letters, as opposed to using </p>
                <div className="btn_main">
                  <div className="about_bt"><a href="/about">About Us</a></div>
                  <div className="callnow_bt active"><a href="#">Call Now</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="row">
            <div className="col-md-6">
              <div className="banner_img"><img src="images/banner-img.png" /></div>
            </div>
            <div className="col-md-6">
              <div className="banner_taital_main">
                <h1 className="banner_taital">coffee</h1>
                <h5 className="tasty_text">Tasty Of DozeCafe</h5>
                <p className="banner_text">more-or-less normal distribution of letters, as opposed to using </p>
                <div className="btn_main">
                  <div className="about_bt"><a href="#">About Us</a></div>
                  <div className="callnow_bt active"><a href="#">Call Now</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="row">
            <div className="col-md-6">
              <div className="banner_img"><img src="images/banner-img.png" /></div>
            </div>
            <div className="col-md-6">
              <div className="banner_taital_main">
                <h1 className="banner_taital">coffee</h1>
                <h5 className="tasty_text">Tasty Of DozeCafe</h5>
                <p className="banner_text">more-or-less normal distribution of letters, as opposed to using </p>
                <div className="btn_main">
                  <div className="about_bt"><a href="#">About Us</a></div>
                  <div className="callnow_bt active"><a href="#">Call Now</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#banner_slider" role="button" data-slide="prev">
        <i className="fa fa-arrow-left" />
      </a>
      <a className="carousel-control-next" href="#banner_slider" role="button" data-slide="next">
        <i className="fa fa-arrow-right" />
      </a>
    </div>
  </div>
</div>

    
    
    
    </>
  )
}

export default Banner
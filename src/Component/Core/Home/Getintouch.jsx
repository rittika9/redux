import React from 'react'

const Getintouch = () => {
  return (
    <>
    
    
    
    <div>
  <div className="contact_section layout_padding">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <h1 className="contact_taital">Get In Touch</h1>
          <div className="bulit_icon"><img src="images/bulit-icon.png" /></div>
        </div>
      </div>
    </div>
    <div className="container-fluid">
      <div className="contact_section_2">
        <div className="row">
          <div className="col-md-12">
            <div className="mail_section_1">
              <input type="text" className="mail_text" placeholder="Your Name" name="Your Name" />
              <input type="text" className="mail_text" placeholder="Your Email" name="Your Email" />
              <input type="text" className="mail_text" placeholder="Your Phone" name="Your Phone" />
              <textarea className="massage-bt" placeholder="Massage" rows={5} id="comment" name="Massage" defaultValue={""} />
              <div className="send_bt"><a href="#">SEND</a></div>
            </div>
          </div>
          <div className="map_main">
            <div className="map-responsive">
              {/* <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France" width={250} height={500} frameBorder={0} style={{border: 0, width: '100%'}} allowFullScreen /> */}
            
            <iframe src='https://goo.gl/maps/VLbWiYGhRjUQm7Lo6'width= {250} height={500}  style={{border: 0, width: '100%'}} allowFullScreen />
            
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


    
    
    
    </>
  )
}

export default Getintouch
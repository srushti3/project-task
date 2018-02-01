import React from 'react';

const Home = () => (
  <div className="home-content">
    <section id="banner">
      <div id="mainBanner" className="container-fluid">
        <img className="bannerImage" src="https://www.redcarpetup.com/comsite/assets/images/indexImages/BannerImage.svg" alt="RedCarpetUp banner" />
        <div className="overlayContent">
          <div className="bannerText">
            <p>
              Never worry about funds again! Just download RedCarpet.
            </p>
          </div>
          <div className="downloadIcons hidden-xs">
            <a href="https://goo.gl/qwgz5z" style={{color: 'white'}}><img src="/comsite/assets/images/googleplay.svg" className="play" /> </a>
            <a href="#" style={{color: 'white'}}><img src="/comsite/assets/images/appstore.svg" className="play" /> </a>
          </div>
        </div>
        <div className="downloadIcons visible-xs">
          <a href="https://goo.gl/qwgz5z" style={{color: 'white'}}><img src="/comsite/assets/images/googleplay.svg" className="play" /> </a>
          <a href="#" style={{color: 'white'}}><img src="/comsite/assets/images/appstore.svg" className="play" /> </a>
        </div>
      </div>
    </section>
    <section id="work">
      <h3>HOW DOES IT WORK</h3>
      <div className="container">
        <div className="row">
          <div className="stepContainer visible-xs">
            <ul>
              <div className="col-xs-6">
                <li className="elementContainer">
                  <img src="https://www.redcarpetup.com/comsite/assets/images/indexImages/Step1.svg" className="imageContainer" />
                  <p className="caption">DOWNLOAD THE APP</p>
                </li>
              </div>
              <div className="col-xs-6">
                <li className="elementContainer">
                  <img src="https://www.redcarpetup.com/comsite/assets/images/indexImages/Step2.svg" className="imageContainer" />
                  <p className="caption">VERIFY PERSONAL DETAILS</p>
                </li>
              </div>
              <div className="col-xs-6">
                <li className="elementContainer">
                  <img src="https://www.redcarpetup.com/comsite/assets/images/indexImages/Step3.svg" className="imageContainer" />
                  <p className="caption">ORDER &amp; CONFIRM</p>
                </li>
              </div>
              <div className="col-xs-6">
                <li className="elementContainer">
                  <img src="comsite/assets/images/indexImages/Step4.svg" className="imageContainer" />
                  <p className="caption">RECEIVE YOUR ORDER</p>
                </li>
              </div>
              <div className="col-xs-6 col-xs-offset-3">
                <li className="elementContainer">
                  <img src="https://www.redcarpetup.com/comsite/assets/images/indexImages/Step5.svg" className="imageContainer" />
                  <p className="caption">PAY MONTHLY BY CASH OR ONLINE</p>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="stepContainer hidden-xs">
        <ul>
          <li className="elementContainer">
            <img src="https://www.redcarpetup.com/comsite/assets/images/indexImages/Step1.svg" className="imageContainer" />
            <p className="caption">DOWNLOAD THE APP</p>
          </li>
          <li className="elementContainer">
            <img src="https://www.redcarpetup.com/comsite/assets/images/indexImages/Step2.svg" className="imageContainer" />
            <p className="caption">VERIFY PERSONAL DETAILS</p>
          </li>
          <li className="elementContainer">
            <img src="https://www.redcarpetup.com/comsite/assets/images/indexImages/Step3.svg" className="imageContainer" />
            <p className="caption">ORDER &amp; CONFIRM</p>
          </li>
          <li className="elementContainer">
            <img src="https://www.redcarpetup.com/comsite/assets/images/indexImages/Step4.svg" className="imageContainer" />
            <p className="caption">RECEIVE YOUR ORDER</p>
          </li>
          <li className="elementContainer">
            <img src="https://www.redcarpetup.com/comsite/assets/images/indexImages/Step5.svg" className="imageContainer" />
            <p className="caption">PAY MONTHLY BY CASH OR ONLINE</p>
          </li>
        </ul>
      </div>
      <div id="safeSection">
        <h3>IS IT SAFE?</h3>
        <div className="container-fluid">
          <div className="row">
            <ul className="textListContainer">
              <li>
                <h5>PRIVACY</h5>
                <p>
                  We use your data to determine your “credit limit” (just like Siri listens to your voice to be a better assistant). Your personal and financial data are encrypted - even while using your phone - to ensure that it stays safe when you use RedCarpet.
                </p>
              </li>
              <li>
                <h5>BUYER’S GUARANTEE</h5>
                <p>
                  If you have any problem with the delivery of the order, we will work with our ecommerce partners to fix that for you or will refund you the entire cost, as long as the eligibility requirements are met.
                </p>
              </li>
            </ul>
          </div>
          <div className="row">
            <ul className="textListContainer">
              <li>
                <h5>24X7 PROTECTION &amp; SUPPORT</h5>
                <p>
                  Your security is our top priority. We monitor every account and transaction 24X7 to prevent fraud. We never sell your data outside RedCarpet.
                </p>
              </li>
              <li>
                <h5>LEGAL COMPLIANCE</h5>
                <p>
                  RedCarpet works with several financial institutions like banks and we make sure that our collection and recovery processes are fully compliant. If your experience has been otherwise, please reach out to us at support@redcarpetup.com and we will figure out what went wrong.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section id="services">
      <h3>SERVICES</h3>
      <div className="hidden-xs">
        <ul className="listOfServices">
          <li className="listElementContainer">
            <img src="https://www.redcarpetup.com/comsite/assets/images/indexImages/shopping.svg" className="imageContainer" />
            <p className="caption" style={{fontSize: 14}}>SHOPPING</p>
          </li>
          <li className="listElementContainer">
            <img src="https://www.redcarpetup.com/comsite/assets/images/indexImages/movies.svg" className="imageContainer" />
            <p className="caption" style={{fontSize: 14}}>MOVIES</p>
          </li>
          <li className="listElementContainer">
            <img src="https://www.redcarpetup.com/comsite/assets/images/indexImages/food.svg" className="imageContainer" />
            <p className="caption" style={{fontSize: 14}}>FOOD</p>
          </li>
          <li className="listElementContainer">
            <img src="https://www.redcarpetup.com/comsite/assets/images/indexImages/transport.svg" className="imageContainer" />
            <p className="caption" style={{fontSize: 14}}>TRANSPORT</p>
          </li>
          <li className="listElementContainer">
            <img src="https://www.redcarpetup.com/comsite/assets/images/indexImages/events.svg" className="imageContainer" />
            <p className="caption" style={{fontSize: 14}}>EVENTS</p>
          </li>
          <li className="listElementContainer">
            <img src="https://www.redcarpetup.com/comsite/assets/images/indexImages/recharge.svg" className="imageContainer" />
            <p className="caption" style={{fontSize: 14}}>RECHARGE</p>
          </li>
        </ul>
      </div>
      <div id="myCarousel" className="carousel slide visible-xs" data-ride="carousel">
        <div className="carousel-inner">
          <div className="item active">
            <img src="https://www.redcarpetup.com/comsite/assets/images/indexImages/shopping.svg" className="imageContainer" />
            <div className="carousel-caption">
              <h3 className="caption" style={{fontSize: 14}}>SHOPPING</h3>
            </div>
          </div>
          <div className="item">
            <img src="https://www.redcarpetup.com/comsite/assets/images/indexImages/movies.svg" className="imageContainer" />
            <div className="carousel-caption">
              <h3 className="caption" style={{fontSize: 14}}>MOVIES</h3>
            </div>
          </div>
          <div className="item">
            <img src="https://www.redcarpetup.com/comsite/assets/images/indexImages/food.svg" className="imageContainer" />
            <div className="carousel-caption">
              <h3 className="caption" style={{fontSize: 14}}>FOOD</h3>
            </div>
          </div>
          <div className="item">
            <img src="https://www.redcarpetup.com/comsite/assets/images/indexImages/transport.svg" className="imageContainer" />
            <div className="carousel-caption">
              <h3 className="caption" style={{fontSize: 14}}>TRANSPORT</h3>
            </div>
          </div>
          <div className="item">
            <img src="https://www.redcarpetup.com/comsite/assets/images/indexImages/events.svg" className="imageContainer" />
            <div className="carousel-caption">
              <h3 className="caption" style={{fontSize: 14}}>EVENTS</h3>
            </div>
          </div>
          <div className="item">
            <img src="https://www.redcarpetup.com/comsite/assets/images/indexImages/recharge.svg" className="imageContainer" />
            <div className="carousel-caption">
              <h3 className="caption" style={{fontSize: 14}}>RECHARGE</h3>
            </div>
          </div>
        </div>
        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
          <i className="fa fa-chevron-left carControl" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#myCarousel" data-slide="next">
          <i className="fa fa-chevron-right carControl" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </section>
    <section id="whiteSection" className="whiteSection">
      <h3>WE SUPPORT THE FOLLOWING PARTNERS AND HUNDREDS MORE!</h3>
      <div>
        <ul className="brandLogos">
          <li className="logoContainer">
            <img src="https://www.redcarpetup.com/comsite/assets/images/indexImages/flipkart.svg" className="imageContainer" />
          </li>
          <li className="logoContainer">
            <img src="https://www.redcarpetup.com/comsite/assets/images/indexImages/myntra.svg" className="imageContainer" />
          </li>
          <li className="logoContainer">
            <img src="https://www.redcarpetup.com/comsite/assets/images/indexImages/paytm.svg" className="imageContainer" />
          </li>
          <li className="logoContainer">
            <img src="https://www.redcarpetup.com/comsite/assets/images/indexImages/amazon.svg" className="imageContainer" />
          </li>
        </ul>
      </div>
    </section>
    <hr className="greenLine divider" />
    <section className="videoSlider">
      <h3>OUR VIDEOS</h3>
      <div className="container-fluid videoContainer">
        <div className="carousel slide" data-ride="carousel" id="videoCarousel">
          <div id="video_container" className="carousel-inner">
          </div>
          <a className="carousel-control left" href="#videoCarousel" role="button" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control right" href="#videoCarousel" role="button" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div></section>
  </div>
);
export default Home

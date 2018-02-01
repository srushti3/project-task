import React from 'react'

const Footer = () => (
      <footer className="footer">
        <div className="container-fluid footerContainer">
          <div className="row">
            <div className="col-xs-12">
              <div className="footer-product">
                <p>
                  A YCombinator Summer 2015 Startup
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <ul id="footer-links" className="list-unstyled list-inline">
                <li>
                  <a className="page-link" href="/about/">ABOUT</a>
                </li>
                <li>
                  <a className="page-link" href="/campus-leaders">CAMPUS LEADERS</a>
                </li>
                <li>
                  <a className="page-link" href="/faq/">FAQS</a>
                </li>
                <li>
                  <a className="page-link" href="/jobs/">JOBS</a>
                </li>
                <li>
                  <a className="page-link" href="/legal/">LEGAL</a>
                </li>
                <li>
                  <a className="page-link" href="/location/">CONTACT</a>
                </li>
                <li>
                  <a className="page-link" href="/blog/">BLOG</a>
                </li>
                <li>
                  <a className="page-link" href />
                </li>
              </ul>
              <ul className="social">
                <li><a className="socialIcon" href="https://twitter.com/RedCarpetUp"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                <li><a className="socialIcon" href="https://www.facebook.com/redcarpetup"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                <li><a className="socialIcon" href="https://www.instagram.com/redcarpetup/"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
              </ul>
              <p className="company-name">© RedCarpet Tech Pvt Ltd.</p>
            </div>
          </div>
        </div>
      </footer>
    );
export default Footer

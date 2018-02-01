import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => (
  <div>
    <div className="navbar-wrapper">
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid navbarContainer">
          <div className="navbar-header col-md-3">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <i className="fa fa-bars" aria-hidden="true" />
            </button>
            <a className="navbar-brand logoContainer" href="https://www.redcarpetup.com/">
              <img src="https://www.redcarpetup.com/comsite/assets/images/logo-redcarpet.svg" className="logo" alt="Home" />
            </a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <div className="mobile-list">
              <ul id="mainNav" className="nav navbar-nav navbar-right col-md-9">
                <li>
                  <a className="page-link" href="/about/">About</a>
                </li>
                <li>
                  <a className="page-link" href="/campus-leaders/">Campus Leaders</a>
                </li>
                <li>
                  <a className="page-link" href="/location/">Contact</a>
                </li>
                <li>
                  <a className="page-link" href="/faq/">FAQs</a>
                </li>
                <li>
                  <a className="page-link" href="/jobs/">Jobs</a>
                </li>
                <li>
                  <a className="page-link" href="/shop/">Shop</a>
                </li>
                <li>
                  <a className="page-link" href="/smart-card/">Smart-Card</a>
                </li>
                <li>
                  <a className="page-link" href="/blog/">The RC Blog</a>
                </li>
                <li>
                  <a className="page-link" href="/videos/">Videos</a>
                </li>
                <li className="dl">
                  <a target="_blank" href="https://play.google.com/store/apps/details?id=com.redcarpetup.rewardpay">
                    <img src="https://www.redcarpetup.com/comsite/assets/images/play.png" /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
);

export default Navigation;

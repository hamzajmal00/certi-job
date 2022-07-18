import React, { Component, Fragment } from 'react'
import ifa from "../../assets/img/i-f.png"
import ita from "../../assets/img/i-t.png"
import ila from "../../assets/img/i-l.png"
import iinsta from "../../assets/img/i-insta.png"
import ima from "../../assets/img/i-m.png"

export class ContentFooter extends Component {
  render() {
    return (
      <div>
          <div className='footer-content'>
                <div className="footer-item">
                    <div className="footer-nav">
                        <a href="#">Service</a>
                        <a href="#">Pricing</a>
                        <a href="#">Contact</a>
                    </div>

                </div>
                <div className="footer-item">
                    <div className="footer-nav">
                        <a href="#">Terms of Service</a>
                        <a href="#">Terms of Pricing</a>
                        <a href="#">Terms of Contact</a>
                    </div>
                </div>
                <div className="footer-item">
                    <div className="footer-nav">
                        <a href="#">For Subject-mater</a>
                        <a href="#">Help Center</a>
                        <a href="#">information of Canidates</a>
                    </div>
                </div>
                <div className="footer-item">
                    <div className="footer-icons">
                        <img src={ifa} alt="" />
                        <img src={ita} alt="" />
                        <img src={ila} alt="" />
                        <img src={iinsta} alt="" />
                    </div>
                    <p>Subscribe our Newsletters to keep updated yourself with Current Revolution in Fitness Sector.</p>
                    <div className="footer-filed">
                        <input type="text" placeholder="Enter your email" />
                        <img src={ima} alt="" />
                    </div>
                    
                </div>
          </div>
          <div className="end-footer">
          <p>© CertiJob 2021. All rights reserved.</p>
      </div>
  </div>
    )
  }
}

export default ContentFooter
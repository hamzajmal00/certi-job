import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import MainLogo from "../../assets/img/side-logo.png"
import SideEnd from "../../assets/img/side-end.png"

export class SiderBar extends Component {
    state= {
        closeside : false
    }
  render() {
    

    this.toggerHandler = () => {
        this.setState({closeside: !this.state.closeside})
    }
   
    return (
        <div className={this.state.closeside ? 'side-bar close-sidebar' : 'side-bar show-sidebar'}>
      <div className='sidebar-content'>  
            <div className="sidebar-header">
                <img src={MainLogo} />
                <div className="toggle-icon">
                    <i onClick={this.toggerHandler} className={this.state.closeside ? 'fa fa-bars' : 'fa fa-times'}></i>
                </div>
            </div>
            <div className="side-menu-list">
                <a href="#" className="active">
                    <div className="side-menu-item">
                            <i className="fa-solid fa-address-card"></i>
                            Manage Interviews
                    </div>
                </a>
                <a href="#">
                    <div className="side-menu-item">
                            <i className="fa-solid fa-address-card"></i>
                            Manage Test
                    </div>
                </a>
                <a href="#">
                    <div className="side-menu-item">
                            <i className="fa-solid fa-address-card"></i>
                            My profile
                    </div>
                </a>
                <a href="#">
                    <div className="side-menu-item">
                            <i className="fa-solid fa-address-card"></i>
                            Payments
                    </div>
                </a>
            </div>
                <div className="sidebar-end">
                    <div className="s-end-img">
                        <img src={SideEnd} alt="" />
                    </div>
                    <p className="s-end-des">
                        Lorem ipsum dolor sit amet, consec tetur adipiscing elit. 
                    </p>
                    <button className="s-end btn btn-primary">Upgrade Now</button>
                </div>
      </div>
     </div>
    

    )
  }
}

export default SiderBar
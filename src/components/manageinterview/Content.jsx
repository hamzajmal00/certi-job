import React, { Component } from 'react'
import UserProfile from "../../assets/img/user-profile.png"
import Nav from 'react-bootstrap/Nav';

export class Content extends Component {
  render() {
      const adbtn ={
        color:'#06BF97',
        margin: '0px 20px 0px 0px',
      }
      const delbtn ={
        color:'#FF4337',
        margin: '0px 20px 0px 0px',
      }
    return (
      <div className='inner-content'>
            <div className="inner-header">
                <div className="header-heading">
                    <h1>Manage Interviews</h1>
                </div>
                <div className="header-menu">
                    <div className="menu-icon">
                        <i className="fa fa-bell"></i>
                    </div>
                    <div className="user-profile">
                        <img src={UserProfile} alt="" />
                        <a href="#">admin <i className="fa-solid fa-caret-down"></i></a>
                    </div>
                    
                </div>

          </div> 
          <div className="content-tabs">
              <ul className="nav tab-nav nav-pills  mb-3 tabs-header" id="pills-tab" role="tablist">
                  <li className="tab-nav-item" role="presentation">
                    <a className="tab-nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Invites</a>
                  </li>
                  <li className="tab-nav-item" role="presentation">
                      <a className="tab-nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-Scheduled" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Scheduled</a>
                    </li>
                  <li className="tab-nav-item" role="presentation">
                    <a className="tab-nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-Rejected" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Rejected</a>
                  </li>
                  <li className="tab-nav-item" role="presentation">
                      <a className="tab-nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-Completed" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Completed</a>
                    </li>
        
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                      <div className="tab-table">
                      <table className="table table-hover">
                          <thead>
                            <tr>
                              <th scope="col">HR Manager</th>
                              <th scope="col">Interview Type</th>
                              <th scope="col">Date & Time</th>
                              <th scope="col">Payment</th>
                              <th scope="col">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="clr-row">
                              <td>John Doe</td>
                              <td>UI/UX Designer</td>
                              <td>23/04/2021 12:00PM - 12:30PM</td>
                              <td>$40</td>
                              <td>
                                  <a href="#" style={adbtn}>Action</a>
                                  <a href="#" style={delbtn}>Delete</a>
                                  <i className="fa fa-eye"></i>
                              </td>
                            </tr>
                            <tr className="p-5">
                              <td>John Doe</td>
                              <td>UI/UX Designer</td>
                              <td>23/04/2021 12:00PM - 12:30PM</td>
                              <td>$40</td>
                              <td>
                                  <a href="#" style={adbtn}>Action</a>
                                  <a href="#" style={delbtn}>Delete</a>
                                  <i className="fa fa-eye"></i>
                              </td>
                            </tr>
                            <tr className="clr-row">
                              <td>John Doe</td>
                              <td>UI/UX Designer</td>
                              <td>23/04/2021 12:00PM - 12:30PM</td>
                              <td>$40</td>
                              <td>
                              <a href="#" style={adbtn}>Action</a>
                                  <a href="#" style={delbtn}>Delete</a>
                                  <i className="fa fa-eye"></i>
                              </td>
                            </tr>
                            <tr className="p-5">
                              <td>John Doe</td>
                              <td>UI/UX Designer</td>
                              <td>23/04/2021 12:00PM - 12:30PM</td>
                              <td>$40</td>
                              <td> 
                                <a href="#" style={adbtn}>Action</a>
                                  <a href="#" style={delbtn}>Delete</a>
                                  <i className="fa fa-eye"></i>
                              </td>
                            </tr>
                  
        
                          </tbody>
                        </table>
                      </div>
                    

                  </div>
                  <div className="tab-pane fade" id="pills-Scheduled" role="tabpanel" aria-labelledby="pills-profile-tab" >..dd.2</div>
                  <div className="tab-pane fade" id="pills-Rejected" role="tabpanel" aria-labelledby="pills-contact-tab" >..3.</div>
                  <div className="tab-pane fade" id="pills-Completed" role="tabpanel" aria-labelledby="pills-disabled-tab" >..4</div>
                </div>
                
          </div>
      </div>
    )
  }
}

export default Content
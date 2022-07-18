import React, { Component, Fragment } from 'react'
import Content from '../components/manageinterview/Content'
import ContentFooter from '../components/manageinterview/ContentFooter'
import SiderBar from '../components/manageinterview/SiderBar'

export class ManageInterview extends Component {
    state= {
      closeside : false
  }
  render() {

 
    return (
      <Fragment>
        <div className="main-wraper">
          
              <SiderBar />
         
          <div className="content">
            <Content />
          </div>
            <div className="site-footer">
             <ContentFooter />
            </div>
        </div>
      </Fragment>
    )
  }
}

export default ManageInterview
import React, { Component, Fragment } from 'react'
import { BrowserRouter , Routes, Route } from "react-router-dom";
import ManageInterview from '../pages/ManageInterview';

export class AppRoute extends Component {
  render() {
    return (
  
      <BrowserRouter>
            <Routes>
            
                <Route exact path="/" element={<ManageInterview />} />
            </Routes>
        </BrowserRouter>
    )
  }
}

export default AppRoute
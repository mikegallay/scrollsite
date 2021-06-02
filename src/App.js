import React, { Component, useState } from "react";
import {
    BrowserRouter,
    Route,
    Link,
    NavLink
  } from "react-router-dom";

import Routes from './routes';
// import siteData from './site.json';

import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';

const siteData = {
  "data":[{
      "path": "/overview",
      "name": "Home",
      "component": "Home"
  },
  {
      "path": "/overview/stuff",
      "name": "Stuff",
      "component": "Stuff"
  },
  {
      "path": "/overview/contact",
      "name": "Contact",
      "component": "Contact"
  }]
}
 
class App extends Component {
  
  state = {
    siteData:'',
    navActive:false
  }

  getData = () =>  {
    console.log('get data');
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(siteData);
      }, 1500)
    })
  }

  componentDidMount = () => {
    console.log('did mount',this.state.siteData);
    if (this.state.siteData === ''){
      this.getData()
      .then(siteData => {
        this.setState({siteData})
      })
    }
  }

  toggleNav = () => {
    console.log('togglenav');
    let navActive = !this.state.navActive
    this.setState({navActive})
  }

  needData = () => {
    return <div>Loading</div>
  }

  hasData = () => {
    return <div>
            <Header toggleNav={this.toggleNav}/>
            <Nav active={this.state.navActive}/>
            {/*<ul className="header">
              { 
                this.state.siteData.data &&
                this.state.siteData.data.map(page =>
                  <li key={page.nav} >
                    <NavLink to={page.path}>{page.name}</NavLink>
                  </li>
                )
              }
            </ul>*/}
            <div className="main_content">
              <Routes siteData={this.state.siteData}/>
            </div>
          </div>
  }

  render() {
    return (
      <BrowserRouter>
         {this.state.siteData.data
        ? this.hasData()
        : this.needData()}
      </BrowserRouter>
    );
  }
}
export default App;

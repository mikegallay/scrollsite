import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

  import Home from "./Home";
  import Stuff from "./Stuff";
  import Contact from "./Contact";
  import MainSlider from "./components/MainSlider/MainSlider";

class Routes extends Component {
  render () {
    console.log('routes',this.props);
    const {siteData} = this.props;
    return (
        <Switch>

        {/* <Route exact path="/" component={Home}/> */}
        
        <Route path="/overview(/*)" render={(props) => <MainSlider siteData={siteData} {...props}/>} />
        {/* <Route path="/stuff" render={(props) => <MainSlider siteData={siteData} {...props}/>} /> */}
        {/* <Route path="/contact" render={(props) => <MainSlider siteData={siteData} {...props}/>} /> */}
        {/* <Route path="/contact" component={Contact}/> */}
        {/* <Route path="/stuff" component={Stuff}/> */}
        {/*
        <Route exact path="*" render={props => {
            const pathname = props.history.location.pathname.replace(/\//g, '');
            if(pathname !== 'sequencessequence-confirmed' &&
                pathname !== 'sequencesresources' &&
                pathname !== 'sequencesresourcefor-patients' &&
                pathname !== 'sequencesresourcefor-oncologists' &&
                pathname !== 'sequencesresourcefor-family' &&
                pathname !== 'sequencessequences' &&
                pathname !== 'sequencesrequest' &&
                pathname !== 'sequencesrequests' &&
                pathname !== 'sequencessequence-sending' &&
                pathname !== 'sequencesrequisition-form' &&
                pathname !== 'sequenceschoose-your-sequence-type' &&
                pathname !== 'sequencespsomagennew' &&
                pathname.indexOf('sequences/request') > -1 &&
                pathname !== 'sequences') {
            return <Error404 history={props.history} />;
            }

            return null;
        }}/>*/}

        {/*
        <Route exact path="*" render={props => {
            const pathname = props.history.location.pathname;
            if(window.ga) {
            // console.log('track', pathname);
            window.ga('send', 'pageview', pathname);
            }*/
        }

            return null;
        }}/>

        </Switch>
    )
  }
}

export default Routes

import React, {Component, useEffect, useRef} from 'react';
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

import './MainSlider.scss';

class MainSlider extends Component {

  
  constructor(props) {
    super(props);

    this.main_slider = React.createRef();

    this.state = {}

  }

  //When the component mounts
  componentDidMount(){
    const {location,siteData} = this.props;
    console.log('scroll update',this.props);
    let section = siteData.data.find(item => item.path === location.pathname);
    console.log('section',section);
    this.scrollGallery(section.name);
  }

  scrollGallery = elem1 => {
    // gsap.registerPlugin(ScrollTrigger);
    var d = document.getElementById(elem1).offsetTop;
    d*=-1;
    console.log('scroll',d);

    gsap.to(this.main_slider, {
      y: d,
      duration: 1
  });

  }



  render() {
    const {location,siteData} = this.props;
    // console.log('main slider props',this.props);
    return (
      <div ref={(el) => (this.main_slider = el)} className="main_slider">
        {siteData.data.map((page => 
          <div id={page.name} key={page.path} className={`section ${page.name} ${(location.pathname === page.path ? 'active' : '')}`}>{page.name}</div>
        ))}
      </div>
    )
  }
}

export default MainSlider

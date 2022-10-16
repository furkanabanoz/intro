import React, { Component } from 'react'
import foto1 from '../../images/fotograf1.webp'
import foto2 from '../../images/fotograf2.webp'
import foto3 from '../../images/fotograf3.webp'
import './Slider.css'

export default class slider extends Component {
  render() {
    return (
        <div>
        <div class="slider-container">
          <div class="slider">
            <div class="slides">
              <div id="slides__1" class="slide">
                <img src={foto1} />
                <a class="slide__prev" href="#slides__4" title="Next" />
                <a class="slide__next" href="#slides__2" title="Next" />
              </div>
              <div id="slides__2" class="slide">
                <img src={foto2} />
                <a class="slide__prev" href="#slides__1" title="Prev" />
                <a class="slide__next" href="#slides__3" title="Next" />
              </div>
              <div id="slides__3" class="slide">
                <img src={foto3} />
                <a class="slide__prev" href="#slides__2" title="Prev" />
                <a class="slide__next" href="#slides__4" title="Next" />
              </div>
            </div>
            <div class="slider__nav">
              <a class="slider__navlink" href="#slides__1" />
              <a class="slider__navlink" href="#slides__2" />
              <a class="slider__navlink" href="#slides__3" />
            </div>
          </div>
        </div>
  
      </div>
    )
  }
}

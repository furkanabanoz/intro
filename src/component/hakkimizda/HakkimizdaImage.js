import React, { Component } from 'react'
import foto from '../../images/kopek.jpg'
import './hakkimizdaImage.css'
export default class HakkimizdaImage extends Component {
  render() {
    return (
      <div>
        <img src={foto} />
      </div>
    )
  }
}

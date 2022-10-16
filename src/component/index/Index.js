import React, { Component } from 'react'
import Slider from '../shared/Slider'
import Comments from '../shared/Comments'
export default class Index extends Component {
    render() {
        return (
            <div>
                <Slider></Slider>
                <Comments></Comments>

            </div>
        )
    }
}

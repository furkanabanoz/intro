import React, { Component } from 'react'
import logo from '../../logo/logo.jpg'
import './MyNavbar.css'
export default class MyNavbar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="/anasayfa"> <img className='logo' src={logo} /></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="/anasayfa">anasayfa</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/hakkimizda">hakkimizda</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/makaleler">makaleler</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/egitimler">egitimler</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/portfolyo">portfolyo</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/iletisim">iletisim</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

import React, { Component } from 'react'
import  { useState } from 'react'
import { Row, Col, Card, CardHeader, CardBody, CardTitle, CardText ,Button} from 'reactstrap'
import './Kontak.css'
import BasvuruFormu from './BasvuruFormu';
import ProjeFormu from './ProjeFormu';
import IletisimFormu from './IletisimFormu';




const Kontak = () => {
        const [page, setPage] = useState(0);
        return (
            <div >
                <div>
                    <Row>
                        <Col md="4">
                           
                                
                                <Card id='KontakCard'
                                    className="my-2"
                                    color="primary"
                                    inverse
                                    style={{
                                        width: '18rem'
                                    }}

                                >

                                    
                                    <CardBody onClick={() => {
                                            setPage(0);
                                        }} >
                                        <CardTitle tag="h5">
                                            İletişim Formu
                                        </CardTitle>
                                        <CardText >
                                            With supporting text below as a natural lead-in to additional content.

                                        </CardText>
                                        
                                    </CardBody>
                                </Card>
                            
                        </Col>
                        <Col md="4">
                            <Card id='KontakCard'
                                className="my-2"
                                color="secondary"
                                inverse
                                style={{
                                    width: '18rem'
                                }}

                            >
                                <CardBody onClick={() => {
                                            setPage(1);
                                        }}>
                                    <CardTitle tag="h5">
                                        Proje Formu
                                    </CardTitle>
                                    <CardText>
                                        With supporting text below as a natural lead-in to additional content.
                                    </CardText>
                                    
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="4"><Card id='KontakCard'
                            className="my-2"
                            color="success"
                            inverse
                            style={{
                                width: '18rem'
                            }}
                            onClick={() => {
                                setPage = 3;
                            }}
                        >
                            <CardBody onClick={() => {
                                            setPage(2);
                                        }}>
                                <CardTitle tag="h5">
                                    Başvuru Formu
                                </CardTitle>
                                <CardText>
                                    With supporting text below as a natural lead-in to additional content.
                                </CardText>
                            </CardBody>
                        </Card></Col>
                    </Row>
                </div>
                <hr />
                {page == 0 ? <IletisimFormu /> : page == 1 ? <ProjeFormu /> : <BasvuruFormu />}
            </div>
        )
    }

export default Kontak;

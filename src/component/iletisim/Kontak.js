import React, { Component } from 'react'
import { Row, Col,Card ,CardHeader,CardBody,CardTitle,CardText} from 'reactstrap'
import './Kontak.css'
export default class Kontak extends Component {
    render() {
        return (
            <div >
                <Row>
                    <Col md="4">
                        <a >
                        <Card id='KontakCard'
                            className="my-2"
                            color="primary"
                            inverse
                            style={{
                                width: '18rem'
                            }}
                        >
                            <CardHeader>
                                Header
                            </CardHeader>
                            <CardBody>
                                <CardTitle tag="h5">
                                    Special Title Treatment
                                </CardTitle>
                                <CardText>
                                    With supporting text below as a natural lead-in to additional content.
                                </CardText>
                            </CardBody>
                        </Card>
                        </a>
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
                            <CardHeader>
                                Header
                            </CardHeader>
                            <CardBody>
                                <CardTitle tag="h5">
                                    Special Title Treatment
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
                    >
                        <CardHeader>
                            Header
                        </CardHeader>
                        <CardBody>
                            <CardTitle tag="h5">
                                Special Title Treatment
                            </CardTitle>
                            <CardText>
                                With supporting text below as a natural lead-in to additional content.
                            </CardText>
                        </CardBody>
                    </Card></Col>
                </Row>
            </div>
        )
    }
}

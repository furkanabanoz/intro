import React, { Component } from 'react'
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, Row ,Col} from 'reactstrap'
import './Card.css'
import resim from '../../images/fotograf2.webp'

export default class CardAdd extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col sm="3">
                    <img src={resim} />
                        <Card body>
                            <CardTitle><b>Special Title Treatment</b></CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        </Card>
                    </Col>
                    <Col sm="3">
                    <img src={resim} />
                        <Card body>
                            <CardTitle><b>Special Title Treatment</b></CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        </Card>
                    </Col>
                    <Col sm="3">
                    <img src={resim} />
                        <Card body>
                            <CardTitle><b>Special Title Treatment</b></CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        </Card>
                    </Col>
                    <Col sm="3">
                        <img src={resim} />
                        <Card body>
                            <CardTitle><b>Special Title Treatment</b></CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        </Card>
                    </Col>
                </Row>



            </div>
        )
    }
}

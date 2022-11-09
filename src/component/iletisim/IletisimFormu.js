import React, { Component } from 'react'
import './IletisimFormu.css'
import { Form, FormGroup, Label, Input, CardSubtitle, CardText, Button, Row, Col } from 'reactstrap'

export default class IletisimFormu extends Component {
    render() {
        return (
            <div id='kontakyazısı'>
                <Form>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleEmail">
                                    Adınız - Soyadınız 
                                </Label>
                                <Input
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleEmail">
                                    E-posta
                                </Label>
                                <Input
                                    id="exampleEmail"
                                    name="email"
                                    placeholder="@"
                                    type="email"
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col >
                            <FormGroup row>
                                <Label
                                    for="exampleText"
                                    sm={2}
                                >
                                    Mesajınız
                                </Label>
                                <Col sm={10}>
                                    <Input
                                        id="exampleText"
                                        name="text"
                                        type="textarea"
                                        placeholder="Text"
                                    />
                                </Col>
                            </FormGroup>
                        </Col>
                    </Row>

                    <Button>
                        Gönder
                    </Button>
                </Form>
            </div>
        )
    }
}

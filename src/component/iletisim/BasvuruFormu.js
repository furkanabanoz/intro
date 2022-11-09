import React, { Component } from 'react'

import { Form, FormGroup, Label, Input, CardSubtitle, CardText, Button, Row, Col } from 'reactstrap'

export default class BasvuruFormu extends Component {
  render() {
    return (
      <div>
        <Form>
                    <Row>
                    <Col >
                            <FormGroup>
                                <Label for="exampleName">
                                    Adınız - Soyadınız 
                                </Label>
                                <Input
                                />
                            </FormGroup>
                        </Col>
                        <Col >
                            <FormGroup>
                                <Label for="examplePhone">
                                    Cep Telefonu
                                </Label>
                                <Input
                                />
                            </FormGroup>
                        </Col>
                        <Col >
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
                        <Col >
                            <FormGroup>
                                <Label for="exampleEmail">
                                    web Siteniz
                                </Label>
                                <Input
                                />
                            </FormGroup>
                        </Col>
                        <Col >
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
                                    
                                >
                                    Mesajınız
                                </Label>
                                <Col>
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

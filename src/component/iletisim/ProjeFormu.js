import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, CardSubtitle, CardText, Button, Row, Col } from 'reactstrap'
export default class ProjeFormu extends Component {
  render() {
    return (
      <div>
        <div id='ProjeFormu'>
                <Form>
                    <h2>Kişisel Bilgiler</h2>
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
                    </Row>

                    <hr />
                    <h2>Firma Bilgileri</h2>
                    <Row>
                        <Col >
                            <FormGroup>
                                <Label for="exampleCompanyName">
                                    Firma Adı 
                                </Label>
                                <Input
                                />
                            </FormGroup>
                        </Col>
                        <Col >
                            <FormGroup>
                                <Label for="exampleCompanyPosition">
                                    Firmadaki Pozisyonunuz
                                </Label>
                                <Input
                                />
                            </FormGroup>
                        </Col>
                        <Col >
                            <FormGroup>
                                <Label for="exampleCompanyWebSite">
                                    Firma Web Sitesi
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
                                <Label for="exampleCompanyPhone">
                                    Firma Telefonu
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
                    <hr />
                    <h2>Firma Bilgileri</h2>
                    <Row>
                    <Col >
                            <FormGroup>
                                <Label for="exampleProjectName">
                                    Proje Adı
                                </Label>
                                <Input
                                />
                                
                            </FormGroup>
                        </Col>
                        <Col >
                            <FormGroup row>
                                <Label
                                    for="exampleText"
                                >
                                    Proje Detayları
                                </Label>
                                <Col >
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
      </div>
    )
  }
}

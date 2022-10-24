import React, { Component } from 'react'
import { Col, Row } from 'reactstrap'
import profilResmi from '../../images/kopek.jpg'
import './Iletisim.css'
import IletisimCard from './IletisimCard'
export default class Iletisim extends Component {
    render() {
        return (
            <div>
                <div id='iletisim1'>
                    <Row>
                        <Col>
                            <div  id='metinIletisim'>
                            <h1>İletişim Bilgilerimiz</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum magnam facere rerum commodi praesentium voluptatibus laudantium consectetur quod est, non perferendis dignissimos accusamus a. Laudantium sit numquam ullam provident voluptas!
                                Mollitia delectus, non eaque quaerat placeat nobis veritatis est accusamus sunt esse officiis quod nemo molestias saepe vel repellat, velit expedita provident fugit voluptate. Nostrum doloremque a in deleniti soluta.
                                Voluptatibus cum totam, earum eveniet eum obcaecati fugiat vero numquam aut veniam, exercitationem voluptatum magni deserunt modi maxime nam temporibus in quod nulla distinctio quia harum! Minus eligendi voluptatem qui.
                                Facere culpa corrupti, blanditiis eligendi et laboriosam ut natus veniam, quod alias eveniet. Veritatis alias dicta repudiandae. Adipisci maiores laudantium in minus, dolorum aut aliquid vitae nihil cum cumque atque!
                                Ipsum fugiat odit enim temporibus nihil amet laudantium, velit veritatis beatae, minima quas natus illum dolor? Error laudantium iusto dolor totam assumenda enim perferendis, placeat praesentium, soluta rerum sint deserunt?
                                Fugit architecto sed, animi exercitationem aliquam dolorum, aliquid rem voluptas, veniam voluptatum ipsum enim earum debitis quae rerum doloribus accusamus vero ipsa voluptate. Aut in repellendus fuga quae ex recusandae?
                                Quod ipsam eligendi mollitia nemo tempore, quis officia, iusto, error incidunt a delectus atque dicta. Ex ipsam laudantium obcaecati provident vitae dicta vel odit hic sed, culpa quaerat quae soluta.
                                Laboriosam doloribus obcaecati quidem ipsam labore illum. Vel ratione voluptate vitae animi. Quibusdam repudiandae fugit earum, quasi placeat vel, blanditiis adipisci accusamus maxime magni quos. Eius minima aspernatur ducimus veniam.
                                Mollitia et ad at optio sed eos amet, adipisci id. Modi, magnam nulla. Distinctio perferendis veniam nemo consequuntur asperiores debitis fugit. Animi doloribus repellendus officiis nesciunt delectus, commodi beatae reprehenderit.
                                Assumenda vitae corporis velit quis ipsum maxime rerum. In itaque reiciendis cumque eos ducimus, facere enim error omnis minus obcaecati sit fuga eius dolore iusto tempore! Animi veniam quisquam eveniet!</p>
                                </div>
                        </Col>
                        <Col id='resimIletisim'>
                            <img src={profilResmi} alt="" />
                        </Col>


                    </Row>
                </div>
                <Row>
                    <IletisimCard></IletisimCard>
                </Row>
                <Row>
                </Row>
                <Row>
                    <h1>merhaba</h1>
                </Row>
            </div>
        )
    }
}

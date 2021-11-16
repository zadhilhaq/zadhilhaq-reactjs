import React from "react";
import './index.scss'
import profil from '../Assets/img/profil.jpg'

import { Container, Row, Col } from "react-bootstrap";

export default function Jumbotron() {
    
    return(
      <div>
        <Container fluid>
          <Row>
            <Col>
            <img src={profil} alt="Reza Dhia Ulhaq" width="200" className="rounded-circle" />
            <h1 class="display-4">Reza Dhia Ulhaq</h1>
            <p class="lead">Student | Explorer</p>
            <p class="lead">Hai perkenalkan saya Reza Dhia Ulhaq, mahasiswa Teknologi Informasi Universitas Sumatera Utara. Saat ini saya sedang menyelesaikan penelitian tugas akhir saya, selain itu saya juga sedang mengembangkan kemampuan pemrograman saya di Eduwork.</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
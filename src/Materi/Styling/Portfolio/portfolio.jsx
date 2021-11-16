import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col, Table} from "react-bootstrap";

export default function Portfolio() {
    
    return(
        <div>
            <div>
                <Row>
                    <Col>
                    <h2>Skills</h2>
                    <p>* Html *</p>
                    <p>* Css *</p>
                    <p>* Dart *</p>
                    <p>* JavaScript *</p>
                    <p>* Python *</p>
                    </Col>
                    <Col>
                    <h2>Hoby</h2>
                    <p>* Nonton *</p>
                    <p>* Badminton *</p>
                    <p>* Mendengar Musik *</p>
                    </Col>
                </Row>
            </div>
            <div>
            <h2>Education</h2>
    <Table striped bordered hover variant="dark">
      <thead>
      <tr>
        <th>No</th>
        <th>Study</th>
        <th>Year</th>
      </tr>
      </thead>
      <tbody>
      <tr class="t1">
        <td>1</td>
        <td>TK Tjut Nyak Dhien Tangse</td>
        <td>2003-2004</td>
      </tr>
      <tr class="t2">
        <td>2</td>
        <td>SD Negeri 3 Tangse</td>
        <td>2004-2008</td>
      </tr>
      <tr class="t1">
        <td>3</td>
        <td>SD Negeri 3 Sigli</td>
        <td>2008-2010</td>
      </tr>
      <tr class="t2">
        <td>4</td>
        <td>SMP Negeri 2 Sigli</td>
        <td>2010-2013</td>
      </tr>
      <tr class="t1">
        <td>5</td>
        <td>SMA Negeri Unggul Sigli</td>
        <td>2013-2015</td>
      </tr>
      </tbody>
    </Table>  
            </div>

            
        </div>
    
    );
  }
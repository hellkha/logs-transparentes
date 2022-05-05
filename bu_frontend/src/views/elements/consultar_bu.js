import React, { Component } from 'react';
import {
  Row,
  Button,
  Col,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardText,
  Form,
  FormGroup,
  Label,
  Input, 
  FormText
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loader } from '../../vibe/';
import PageLoaderContext from '../../vibe/components/PageLoader/PageLoaderContext';
import laptopImage from '../../assets/images/laptop.jpeg';

class Consultar_BU extends Component {
  axios = require('axios')
  bu_api_url = require('../../config.json').bu_api_url
  // bu_api_url = "http://172.20.11.11:8080"

  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { lista } = this.state
    
    var len = lista.length
    var turno = new Map()
    var uf = new Map()
    var zona = new Map()
    var secao = new Map()

//    console.log(lista)

    for (var i=0; i<len; i++) {
      turno.set(lista[i].turno, lista[i].turno)
      uf.set(lista[i].UF, lista[i].UF)
      zona.set(lista[i].zona, lista[i].zona)
      secao.set(lista[i].secao, lista[i].secao)
    }

    let turnoArr = Array.from(turno.keys())
    let zonaArr = Array.from(zona.keys()).sort()
    let secaoArr = Array.from(secao.keys()).sort()  
    let ufArr = Array.from(uf.keys())



/*    
    console.log(turnoArr)
    console.log(zonaArr)
    console.log(secaoArr)
    console.log(ufArr)
*/


      return (
      <Row>
        <Col md={12}>
          <Card>
            <CardHeader>Consultar Boletins de Urna - Turno</CardHeader>
            <CardBody>
              <FormGroup>
                <Label for="turnoSelect">Turno</Label>
                <Input type="select" name="turno" id="turnoSelect" onChange={this.handleChange.bind(this)}>
                <option value=""></option>
                 {turnoArr.map((entry) => (
                    <option value={entry}>{entry}º</option>
                ))}
                </Input>
            </FormGroup>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>Consultar Boletins de Urna - Estado</CardHeader>
            <CardBody>
              <FormGroup>
                <Label for="UFSelect">UF</Label>
                <Input type="select" name="uf" id="uf" onChange={this.handleChange.bind(this)}>
                <option value=""></option>
                {ufArr.map((entry) => (
                    <option value={entry}>{entry}</option>
                ))}
                </Input>
            </FormGroup>
            </CardBody>
            <CardBody>
              <FormGroup>
                <Label for="zonaSelect">Zona</Label>
                <Input type="select" name="zona" id="zona" onChange={this.handleChange.bind(this)}>
                <option value=""></option>
                {zonaArr.map((entry) => (
                    <option value={entry}>{entry}</option>
                ))}
                </Input>
            </FormGroup>
            </CardBody>
            <CardBody>
              <FormGroup>
                <Label for="secaoSelect">Seção</Label>
                <Input type="select" name="secao" id="secao" onChange={this.handleChange.bind(this)}>
                <option value=""></option>
                {secaoArr.map((entry) => (
                    <option value={entry}>{entry}</option>
                ))}
                </Input>
            </FormGroup>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>Consultar Boletins de Urna - Consulta</CardHeader>
            <CardBody>
              <PageLoaderContext.Consumer>
                {context => (
                  <Link to={"/elements/mostrarbu/id" }> 
                  <Button onClick={this.handleConsultar.bind(this)}>Consultar</Button>
                  </Link>
                )}
              </PageLoaderContext.Consumer>
            </CardBody>
          </Card>
        </Col>
        
      </Row>
    );
  }
}

export default Consultar_BU;

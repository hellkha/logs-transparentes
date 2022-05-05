import React from "react";
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
  } from 'reactstrap';
//import "./App.css";
import {db} from '../../vibe/services/db';
import props from 'prop-types';

//constructor(props) {
//    super(props);
//}
export const Stocks = () => {    
    return (
      <>
        <HomePageHeader />
        <div className="">
          {db.map((data, key) => {
            return (
              <div key={key}>
                <Stock
                  key={key}
                  hash={data.hash}
                  secao={data.secao}
                  turno={data.turno}
                  zona={data.zona}
                  uf={data.uf}
                />
              </div>
            );
          })}
        </div>
      </>
    );
  };
  
  const HomePageHeader = () => {
    return (
      <header className="header">
        <h2>Todos Boletins de Urna</h2>
      </header>
    );
  };
  
  const Stock = ({ hash, zona, secao, turno, uf }) => {
    if (!hash) return <div />;
    return (
      <>

        <Card>
        <CardHeader>Boletim de Urna {hash}</CardHeader>
            <CardBody>
                <CardText>
                <span>
                    Zona: 
                </span>
                {zona}
                </CardText>
            </CardBody>
            <CardBody>
                <CardText>
                <span>
                    Seção: 
                </span>
                {secao}
                </CardText>
            </CardBody>
            <CardBody>
                <CardText>
                <span>
                    Turno: 
                </span>
                {turno}
                </CardText>
            </CardBody>
            <CardBody>
                <CardText>
                <span>
                    UF: 
                </span>
                {uf}
                </CardText>
            </CardBody>
        </Card>
    </>
    );
  };
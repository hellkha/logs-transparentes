import React, { Component, useEffect, useState } from 'react';
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
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import { Loader } from '../../vibe/';
import PageLoaderContext from '../../vibe/components/PageLoader/PageLoaderContext';
import laptopImage from '../../assets/images/laptop.jpeg';

import api from '../../vibe/services/api';
import { Stocks } from "./Stocks";

export default function Consultar_Todos() {
    //const [search, setse] = useState([]);
      const [posts, setPosts] = useState([]);
        useEffect(() => {
            const fetchPosts = async () => {
              try{
                const response = await api.get('/posts');
                setPosts(response.data)
                console.log(response)
              } catch (err) {
                if (err.response){
                  console.log(err.response.data);
                  console.log(err.response.status);
                  console.log(err.response.headers);
                } else {
                  console.log(`Error: ${err.message}`)
                }
              }
            }
            fetchPosts()
            //eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return(
      <div className="App">
        <Stocks />
      </div>
    );
}


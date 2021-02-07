import React,{useState} from 'react';
import ResultContainer from '../containers/ResultContainer';
import memeGenerator from '../containers/MemeGenerator';
import FormDialog from './Dialog';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Stage, Layer, Image as Imag } from "react-konva";
import {rect,Konva} from "konva";
import { CardHeader,Button,TextField,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle } from '@material-ui/core';
import { BrowserRouter,Route,Redirect,Switch,Link} from 'react-router-dom';

import '../style.css';



const useStyles = makeStyles({
  root: {
    minWidth:200,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  }
  
});

export default function MemeCard(props){
  
      
  function handleIt(e)
  {
    props.clicked(e);
  }
  return (


    <Card className="Cards" variant="outlined">
    <CardHeader title={props.memeObject.name}/>
      <CardContent>
        <img id="image" onClick={handleIt}  alt="meme" src={props.memeObject.url} height={350} width={350}></img> 
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}





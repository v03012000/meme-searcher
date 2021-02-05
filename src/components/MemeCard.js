import React,{useState} from 'react';
import ResultContainer from '../containers/ResultContainer';
import memeGenerator from '../containers/MemeGenerator';
import FormDialog from './Dialog';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
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

export default function MemeCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [textadded,setText]=useState("");
  const [x,setX]=useState(0);
  const [y,setY]=useState(0);
  const [allEdits,setEdits]=useState([]);


const calculateAspectRatio = function(image) {
    let canvas = document.getElementById("imageCanvas");
  
    let imageAspectRatio = image.width / image.height;
    let canvasAspectRatio = canvas.width / canvas.height;
    let renderableHeight, renderableWidth, xStart, yStart;
    let AspectRatio = {};
  
    // If image's aspect ratio is less than canvas's we fit on height
    // and place the image centrally along width
    if (imageAspectRatio < canvasAspectRatio) {
      renderableHeight = canvas.height;
      renderableWidth = image.width * (renderableHeight / image.height);
      xStart = (canvas.width - renderableWidth) / 2;
      yStart = 0;
    }
  
    // If image's aspect ratio is greater than canvas's we fit on width
    // and place the image centrally along height
    else if (imageAspectRatio > canvasAspectRatio) {
      renderableWidth = canvas.width;
      renderableHeight = image.height * (renderableWidth / image.width);
      xStart = 0;
      yStart = (canvas.width - renderableHeight) / 2;
    }
  
    //keep aspect ratio
    else {
      renderableHeight = canvas.height;
      renderableWidth = canvas.width;
      xStart = 0;
      yStart = 0;
    }
    AspectRatio.renderableHeight = renderableHeight;
    AspectRatio.renderableWidth = renderableWidth;
    AspectRatio.startX = xStart;
    AspectRatio.startY = yStart;
    return AspectRatio;
  };
  
   const loadImageInCanvas = event => {
    const canvas = document.getElementById("imageCanvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = event.target.src;
    img.crossOrigin = "Anonymous";
    img.addEventListener("load", () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      // from studyJS
      let AR = calculateAspectRatio(img);
      ctx.drawImage(
        img,
        AR.startX,
        AR.startY,
        AR.renderableWidth,
        AR.renderableHeight
      );
    });
  };
  
  const handleImgClick = e => {
    loadImageInCanvas(e);
  };
  function getMousePos(canvas, e) {
    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  }
  function handleTextChange(e)
  {
    setText(e.target.value);   
  }
  function handleText(e) {
    const canv = e.target;
    const ctx = canv.getContext("2d");
    const pos = getMousePos(canv, e);
    ctx.font = "800 40px Impact, Arial";
    ctx.fillStyle = "black";
    ctx.fillText(textadded, pos.x, pos.y);
    setEdits(prevEdits => {
        return [...prevEdits, {
            posX: pos.x,
            posY: pos.y,
            text: textadded}];
      });
      return allEdits;
  }
  let addTextToCanvas = e => {
    e.preventDefault();
    handleText(e);
    setText("");
  };
  let removeLastText = e => {
    e.preventDefault();
    const canv = document.getElementById("imageCanvas");
    const ctx = canv.getContext("2d");
    setEdits(allEdits.pop());
    loadImageInCanvas(false);

    setTimeout(() => {
      ctx.font = "800 40px Impact, Arial";
      ctx.fillStyle = "#433487";
      allEdits.forEach(edit => {
        ctx.fillText(edit.text, edit.posX, edit.posY);
      });
    }, 200);
  };
  
  return (
      
    <Card className={classes.root} variant="outlined">
    <CardHeader title={props.memeObject.name}/>
      <CardContent>
        <img id="image"  onClick={(e)=>handleImgClick(e)} alt="meme" src={props.memeObject.url} height={350} width={350}></img> 
        <h2>{textadded}</h2>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}





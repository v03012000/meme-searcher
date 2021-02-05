import React, { Component,useState} from "react";
import CurrentImage from './CurrentImage';
import TextField from './TextField';
import MemeLibrary from './MemeLibrary';


export default function MemeGenerator(props) {

    const [currentImage,setCurrImg]=useState("https://i.imgflip.com/1ur9b0.jpg");
    const [textadded,setText]=useState("");
    const [x,setX]=useState(0);
    const [y,setY]=useState(0);
    const [allEdits,setEdits]=useState([]);

   let onSaveMeme = e => {
        e.preventDefault();
        const canv = document.getElementById("imageCanvas");
        // Canvas2Image.saveAsPNG(canv);
        var image = canv
          .toDataURL("image/png")
          .replace("image/png", "image/octet-stream");
        window.location.href = image;
      };
  
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
     // const img="https://i.imgflip.com/1ur9b0.jpg"
      img.src = event ? event.target.src :"https://i.imgflip.com/1ur9b0.jpg";
      img.crossOrigin = "Anonymous";
      img.addEventListener("load", () => {
        //ctx.clearRect(0, 0, canvas.width, canvas.height);
    
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
     setCurrImg= e.target;
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
    let val2="";
    if(props.memesArray.length!=0)
    {
        val2="Available meme templates";
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
    }
    return(
        <div>
        <TextField
                    removeLastText={removeLastText}
                    userText={textadded}
                    handleTextChange={handleTextChange}
                    />
                
                  <CurrentImage
                    currentImage={currentImage}
                    addTextToCanvas={addTextToCanvas}
                    onSaveMeme={onSaveMeme}
                  />
                <hr />
                <h1>{val2}</h1>
                <br></br>
                <MemeLibrary
                  allImages={props.memesArray}
                  handleImgClick={handleImgClick}
                />
        
        </div> 
    )};


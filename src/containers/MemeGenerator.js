import React, { useRef, useLayoutEffect,useState} from "react";
import CurrentImage from './CurrentImage';
import TextField from './TextField';
import MemeLibrary from './MemeLibrary';
import { Stage, Layer, Image as Imag} from "react-konva";
import {rect,Konva} from "konva";
export default function MemeGenerator(props) {

    const [currentImage,setCurrImg]=useState("");
    const [textadded,setText]=useState("");
    const [x,setX]=useState(0);
    const [y,setY]=useState(0);
    const [allEdits,setEdits]=useState([]);
    const [color, setColor]=useState("Black");
    const [fontsize, setFontSize]=useState(14);
 function handlecolor(event)
 {
   setColor(event.target.getAttribute("value"));
 }

 function handlefont(e)
 {
setFontSize(e.target.getAttribute("value"));
 }

   let onSaveMeme = e => {
        e.preventDefault();
        const canv = document.getElementById("finalcanvas");
        // Canvas2Image.saveAsPNG(canv);
        var image = canv
          .toDataURL("image/png")
          .replace("image/png", "image/octet-stream");
        window.location.href = image;
      };
  
      const [size, setSize] = useState([0,0]);
      const targetRef = useRef();
      useLayoutEffect(() => {
        function updateSize() {
          setSize([window.innerWidth, window.innerHeight]);}
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
      }, []);
      const calculateAspectRatio = function(image) {
        var exampleimg = new Image();
        exampleimg.src = image.url;
            let imageAspectRatio = exampleimg.width / exampleimg.height;
            let canvasAspectRatio = size[0] / size[1];
            let renderableHeight, renderableWidth, xStart, yStart;
            let AspectRatio = {};
            if (imageAspectRatio < canvasAspectRatio) {
              renderableHeight = size[1];
              renderableWidth = exampleimg.width * (renderableHeight / size[1]);
              xStart = (size[0] - renderableWidth) / 2;
              yStart = 0;
            }
            else if (imageAspectRatio > canvasAspectRatio) {
              renderableWidth = size[0];
              renderableHeight = exampleimg.height * (renderableWidth / exampleimg.width);
              xStart = 0;
              yStart = (size[0] - renderableHeight) / 2;
            }
            else {
              renderableHeight = size[1];
              renderableWidth = size[0];
              xStart = 0;
              yStart = 0;
            }
            AspectRatio.renderableHeight = renderableHeight;
            AspectRatio.renderableWidth = renderableWidth;
            AspectRatio.startX = xStart;
            AspectRatio.startY = yStart;
            return AspectRatio;
          };
    
    function handleImgClick(e){
      setCurrImg(e.target);
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
  
    function addTextToCanvas() {
     // e.preventDefault();
      setText("");
     // console.log(textadded);
    }
    let removeLastText = e => {
      e.preventDefault();
      const canv = document.getElementById("imageCanvas");
      const ctx = canv.getContext("2d");
      let changed=allEdits;
      changed.pop();
      setEdits(changed);
  
      setTimeout(() => {
        ctx.font = "800 20px Impact, Arial";
        ctx.fillStyle = "black";
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
                    changecolor={handlecolor}
                    changefont={handlefont}
                    after={addTextToCanvas}
                    />
              
                  <CurrentImage
                    currentImage={currentImage}
                    addTextToCanvas={textadded}
                    onSaveMeme={onSaveMeme}
                    c={color}
                    f={fontsize}
                    
                    
                  />
                <hr />
                <h1>{val2}</h1>
                <br></br>
                <MemeLibrary
                  allImages={props.memesArray}
                  click={handleImgClick}
                />
        
        </div> 
    )};


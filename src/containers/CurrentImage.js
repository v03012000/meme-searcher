import React ,{useRef, useLayoutEffect,useState} from "react";
import '../style.css';
import {Konva} from "konva";
import useImage from 'use-image';
import { Stage, Layer, Image as Imag,Text} from "react-konva";
export default function CurrentImage({ currentImage, addTextToCanvas,onSaveMeme,c,f,after}) {
  const { src, alt } = currentImage;
  let valsrc;
  if(src)
  {
    valsrc=src;
  }
  else{
    valsrc='https://i.imgflip.com/30b1gx.jpg';
  }
  const [size, setSize] = useState([0,0]);
  const targetRef = useRef();
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth*0.7, window.innerHeight*0.9]);}
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
var finali = new Image();
finali.src = valsrc;
  //console.log(finali.src);
  let AR = calculateAspectRatio(finali);
//console.log(addTextToCanvas);

  return (
    <div className="current-image" id="current-image">
      {!src ? (
          <div>
        <h3>Choose an image from Meme Library and then click edit option. </h3>
        <h4>Right click and save image</h4>
        </div>
      ) : (  
      <h1></h1>
      )}
      <div id="stage-parent" ref={targetRef}  height={400} >
      <div id="container">
       <Stage x={50} y={50} width={size[0]} height={size[1]}>
       <Layer id="myCanvas">
       <Imag id="myimageclass" image={finali} x={AR.startX} y={AR.startY} width={AR.renderableWidth} height={AR.renderableHeight}/>
       <Text text={addTextToCanvas} draggable={true} fontSize={f} ellipsis={true} fill={c} />
       </Layer>
       </Stage>
        

      </div>
    </div>
    
      
    </div>
  );
}

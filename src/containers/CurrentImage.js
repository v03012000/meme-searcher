import React from "react";
import { CardHeader,Button,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle } from '@material-ui/core';
function CurrentImage({ currentImage, addTextToCanvas,onSaveMeme}) {
  const { src, alt } = currentImage;
  
 let extra="https://i.imgflip.com/1ur9b0.jpg";
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
      <div className="img-canvas">
        <canvas 
          id="imageCanvas"
          width={14 * 30}
          height={14 * 30}
          onClick={addTextToCanvas}
          
        />
      
      </div>
      
    </div>
  );
}

export default CurrentImage;

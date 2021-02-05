import React from "react";
import MemeCard from '../components/MemeCard';
function MemeLibrary(props) {
    const { allImages, handleImgClick } = props;
  
    return (
        <div className="meme-library-container">  
        {   
         allImages &&  allImages.map(meme=> {return (<div>
         <MemeCard key={meme.id} memeObject={meme} onClick={handleImgClick}/>
         
         </div>)
         })
        }
        </div>
    );
  }
  
  export default MemeLibrary;
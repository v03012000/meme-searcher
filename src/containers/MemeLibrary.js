import React from "react";
import MemeCard from '../components/MemeCard';
function MemeLibrary(props) {
    const { allImages, click } = props;
    return (
        <div className="meme-library-container">  
        {  
         allImages &&  allImages.map(meme=> {return (<div>
         <MemeCard key={meme.id} memeObject={meme} clicked={click}/>
         
         </div>)
         })
        }
        </div>
    );
  }
  
  export default MemeLibrary;
import React from "react";
import { CardHeader,Button,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle } from '@material-ui/core';
import FormDialog from '../components/Dialog';
import DropDown from '../components/Dropdowns';
function TextField(props) {
  const { userText, handleTextChange, removeLastText ,onSaveMeme} = props;
  return (
    <form className="text-form">
    <FormDialog
            
            userText={userText}
            handleTextChange={handleTextChange}
            tocolor={props.changecolor}
            tofont={props.changefont} 
            done={props.after}/>
       <br/>
     
      
    </form>
  );
}

export default TextField;
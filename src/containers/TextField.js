import React from "react";
import { CardHeader,Button,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle } from '@material-ui/core';
import FormDialog from '../components/Dialog';
function TextField(props) {
  const { userText, handleTextChange, removeLastText ,onSaveMeme} = props;
  return (
    <form className="text-form">
    <FormDialog
            
            userText={userText}
            handleTextChange={handleTextChange}/>
       <br/>
      <Button onClick={removeLastText} variant="contained" color="primary">Remove last text</Button>
      
    </form>
  );
}

export default TextField;
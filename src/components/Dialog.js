import { Button,TextField,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle } from '@material-ui/core';
import React from 'react'
import Dropdowns from '../components/Dropdowns';
import DropDown from '../components/Dropdowns';

export default function FormDialog(props) {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = (e) => {
      setOpen(false); 
    };
   



    return (
      <div>
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Click for Editing
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Edit This Meme</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To edit this meme, write your text below and drag the text to desired place.
            </DialogContentText>
            <TextField
             onChange={(e)=>{props.handleTextChange(e)}}
             value={props.userText}
              autoFocus
              margin="dense"
              id="text"
              label="text"
              type="text"
              fullWidth
            
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Dropdowns cc={props.tocolor} cf={props.tofont} first={"Black"} second={"White"} third={"Blue"} value={"color"} name={"Font Color"}/>
            <Dropdowns cf={props.tofont} cc={props.tocolor} first={20} second={30} third={35} value={"font"} name={"Font Size"}/>
            <Button id="finished" onClick={handleClose} color="primary">
            Add Text
            </Button>
            
          </DialogActions>
        </Dialog>
      </div>
    );
  }
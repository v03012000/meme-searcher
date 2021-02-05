import { Button,TextField,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle } from '@material-ui/core';
import React from 'react'

export default function FormDialog(props) {
    const [open, setOpen] = React.useState(false);
    
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
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
              To edit this meme, write your text below and click on an image to insert.
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
            <Button onClick={handleClose} color="primary">
            Add Text
            </Button>
            
          </DialogActions>
        </Dialog>
      </div>
    );
  }
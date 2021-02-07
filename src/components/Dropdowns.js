import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function Dropdowns(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
  //  console.log(event.currentTarget);
    setAnchorEl(event.currentTarget);
  };
//console.log(props);
  const handleClose = (e) => {
    if(e.target.getAttribute("value")=="Black" || e.target.getAttribute("value")=="White" || e.target.getAttribute("value")=="Blue")
    {
      props.cc(e);
    }
    else if(e.target.getAttribute("value")=="20" || e.target.getAttribute("value")=="30" || e.target.getAttribute("value")=="35")
    {
    props.cf(e);
    }
    
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" color="primary" onClick={handleClick}>
      {props.name}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem value={props.first} onClick={handleClose}>{props.first}</MenuItem>
        <MenuItem value={props.second} onClick={handleClose}>{props.second}</MenuItem>
        <MenuItem value={props.third} onClick={handleClose}>{props.third}</MenuItem>
      </Menu>
    </div>
  );
}
import React,{useEffect,useState} from 'react';
import './App.css';
import SearchContainer from '../src/containers/SearchContainer.js'
import { AppBar,Toolbar,IconButton,Typography } from '@material-ui/core';
import MemeGenerator from '../src/containers/MemeGenerator';
import Footer from '../src/containers/Footer';
function App() {
  const [allMemes,setMemes]=useState([]);
  const [search,setSearch]=useState("");
  let abc=[]
useEffect(() => {
  async function fetchData() {
    const response=await fetch('https://api.imgflip.com/get_memes');
    const data= await response.json();
    const extra=data.data.memes;
    setMemes(extra);
  }
  fetchData();
}, []);
if(allMemes.length>0)
{
 abc=allMemes;
}
const extra=abc.filter(meme =>meme.name.toLowerCase().includes(search)).slice(0,30);
let val="";

let val3="";
if(extra.length===0)
{
val="No Meme Template Found!!  😔 ";
}
if(search==='')
{
val3="Select an image and then click edit option";
}

function handleSearch(event)
{
  setSearch(event.target.value);
}





  return (
    <div className="App">
     <AppBar position="static">
     <Toolbar variant="dense">
    
    <Typography variant="h6" color="inherit">
    Meme Maker
    </Typography>
  </Toolbar>
</AppBar>
    <SearchContainer onSearch={handleSearch}/>
     <br></br>
     <MemeGenerator memesArray={
  abc.filter(meme =>meme.name.toLowerCase().includes(search)).slice(0,6)} />
  <h1> {val}</h1>
  <Footer/>
    </div>
  
  );
}

export default App;

import React,{useState} from 'react'
import '../style.css';
import { Input } from '@material-ui/core';
export default function SearchContainer(props)
{

return (
<div>
<form className="form">
<label className="label">
  {" "}
    📷
  {"  "}
</label>
<Input  onChange={(e)=>props.onSearch(e)} type="text" name="query" className="input" value={props.search} placeholder="search a meme template.."/>

<h1><strong>{props.search}</strong></h1>
</form>

</div>);

}

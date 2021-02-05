import React from 'react';
import '../style.css';
import CurrentImage from './CurrentImage';
import MemeGenerator from './MemeGenerator';
import MemeCard from '../components/MemeCard';
export default function ResultContainer(props)
{
return(
<div>
<h1>{"hiiii"}</h1>
<div>
<MemeGenerator allImages={props.memesArray}/>
</div> 
</div>
);
}

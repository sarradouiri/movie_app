import React from 'react';
import MovieCard from './MovieCard';

export default function MovieList ({data}) {

return(
<div style = { {display:'flex',flexDirection:'row'}}>



{data.map((e,key)=> (

< MovieCard e={e} key={key}/>

))}
</div>

)}
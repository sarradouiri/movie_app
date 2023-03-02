import React from 'react';
import MovieCard from './MovieCard';

export default function MovieList ({data}) {

return(
<div>



{data.map((e,key)=> (

< MovieCard e={e} key={key}/>

))}
</div>

)}
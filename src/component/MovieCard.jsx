import React from 'react';
export default function MovieCard({e}) {
    return (
   <div  style={{padding:"1rem" , border:"1px solid black",margin:"1rem",width:"200px", display:'flex',flexDirection:"column"}}>
       
       <h2>{e.title}</h2>
       <p>{e.description}</p>
        <img width={100} height={100} src={e.posterUrl} alt={e.title} />
        </div>
    )
  }
import React from 'react';


export default function Filter({setSearchWord}) {
    return (
      <div>
          <input type="text" onChange={(e)=>setSearchWord(e.target.value)} />
      </div>
    )
  }
  

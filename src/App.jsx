import { useState } from 'react';
import{List} from './assets/Data';
import Filter from './component/Filter';
import MovieList from './component/MovieList';


function App() {
const [movies,setMovies]=useState(List)
const [searchWord , setSearchWord]=useState('')

  return (
    
    <div>     
    <MovieList data={List}/></div>

<div>
<Search setSearchWord={setSearchWord}  />
 <Filter MovieList= {searchWord ? List.filter(e=>e.title.toLowerCase().includes(searchWord.toLowerCase()))} />
</div>
  )
}

export default App

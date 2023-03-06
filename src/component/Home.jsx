import { useState } from 'react';
import{List} from '../assets/Data';
import Filter from './Filter';
import MovieList from './MovieList';


function Home() {
const [movies,setMovies]=useState(List)
const [searchWord , setSearchWord]=useState('')

  return (
    
    <div>     
    <MovieList data={searchWord ? movies.filter(e=>e.title.toLowerCase().includes(searchWord.toLowerCase())):movies} />


 <Filter setSearchWord={setSearchWord}   />
</div>
  )
}

export default Home

import React, { useState, useSyncExternalStore } from 'react'
import ResultCart from './ResultCart';


const Add = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([])
  

  function onChange(e) {
    setQuery(e.target.value)

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`).then((res)=>
    res.json()).then((data)=>setResults(data.results));
  }
  
  return(
    <div className='add-page'>
      <div className="container">
        <div className="add-content">
            <h1 className='display-5 text-center mt-3'>Aradığınız Film Burada</h1>
            <br />
            <br />
            <div className="input-wrapper">
              <input type="text" value={query} onChange={onChange} placeholder='Film ara...' className='form-control' />
            </div>
            {results.length > 0 && (
              <ul className='results mt-3 p-3 '>
                {results.map((movie)=>(
                  <li className='list-group-item' key={movie.id}>
                    <ResultCart movie={movie}/>
                  </li>
                ))}
              </ul>
            )
            }
        </div>
      </div>
    </div>
  )
}

export default Add

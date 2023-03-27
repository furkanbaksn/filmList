import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

const ResultCart = ({movie}) => {
    return (
    <div className='result-card card'>
      <div className="poster-wrapper mt-3 p-3">
        {movie.poster_path ? (
            <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt="" />
        ):(
            <div className="filler-poster"></div>
        ) }
      </div>
      <div className='info'>
            <div className="header">
                <h3 className='title'>{movie.title}</h3>
                <h4 className='release-date'>
                    {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
                </h4>
                <h4 className='release-date'>
                    IMDB : <b>{movie.vote_average}</b>  
                </h4>
            </div>
            <div className='controls'>
                <button className='btn btn-danger'>
                    İzleneceklere Ekle
                </button>
            </div>
      </div>
    </div>
  )
}

export default ResultCart;

import './MoviesCardList.css'
import React, { useEffect, useState } from 'react'
import MoviesCard from '../MoviesCard/MoviesCard'
import ButtonMore from '../ButtonMore/ButtonMore';

function MoviesCardList({ films, deleteCardIcon }) {
  const [moreButton, setMoreButton] = useState(false)
  console.log(films.length)
  useEffect(() => {
    if (films.length > 11) {
      setMoreButton(true);
    }
  })
  return (
    <>
      <section className='movies-card-list'>
        {films.map((film) => (
          <MoviesCard
            film={film}
            key={film.filmId}
            deleteCardIcon={deleteCardIcon}
          />
        ))}
      </section>
      {moreButton ?
        <ButtonMore />
        : <div className='indent'></div>
      }
    </>
  )
}

export default MoviesCardList;
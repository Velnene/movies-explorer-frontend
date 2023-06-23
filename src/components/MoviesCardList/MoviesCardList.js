import './MoviesCardList.css'
import React, { useEffect, useState } from 'react'
import MoviesCard from '../MoviesCard/MoviesCard'
import ButtonMore from '../ButtonMore/ButtonMore';

function MoviesCardList({ films, deleteCardIcon }) {
  const [moreButton, setMoreButton] = useState(false);

  return (
    <>
      <section className='movies-card-list'>
        {films.map((film) => (
          <MoviesCard
            film={film}
            key={film.id}
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
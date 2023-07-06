import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies(props) {

  return (
    <>
      <SearchForm
        isOn={props.isOn}
        handleToggle={props.handleToggle}
        getSerchFilm={props.getSerchFilm}
      />
      <MoviesCardList
        moreButton={props.moreButton}
        films={props.searchFilms}
        handleShowMorePosts={props.handleShowMorePosts}
      />
    </>
  )
}

export default Movies;
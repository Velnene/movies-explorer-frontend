import './SavedMovies.css'
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies(props) {
  props.getIsComponentSaveFilms(true);
  const deleteCardIcon = true;
  const isSerchfilms = true;
  
  return (
    <section>
      <SearchForm
        isOn={props.isOn}
        handleToggle={props.handleToggle}
        getSerchFilm={props.getSerchFilm}
      />
      {<MoviesCardList
        moreButton={props.moreButton}
        handleShowMorePosts={props.handleShowMorePosts}
        isSerchfilms={isSerchfilms}
        deleteCardIcon={deleteCardIcon}
        films={props.searchFilms}
        getSearchFilms={props.getSearchFilms}
      />}
    </section>
  )
}

export default SavedMovies;
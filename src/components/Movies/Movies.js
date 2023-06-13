import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({ loggedIn, isOn, handleToggle }) {
  return (
    <>
      <SearchForm
        isOn={isOn}
        handleToggle={handleToggle} />
      <MoviesCardList/>
    </>
  )
}
export default Movies;
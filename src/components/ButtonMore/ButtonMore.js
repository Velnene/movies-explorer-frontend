import './ButtonMore.css';

function ButtonMore(props) {
  return (
    <div className='button-more'>
      <button onClick={props.handleShowMorePosts} className='button-more__button'>Ещё</button>
    </div>
  )
}
export default ButtonMore
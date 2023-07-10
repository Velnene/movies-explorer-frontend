import './Preloader.css';

function Preloader({ children = [] }, props) {
  return (
    <>
      <div className={props.preloader ? 'preloader preloader_open': 'preloader' }>
        <div class="preloader__element">
        </div>
      </div>
      {children}
    </>
  )
}

export default Preloader;


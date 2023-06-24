import './Main.css'
import React from "react";

function Main({ children = [] }) {

  return (
    <main className="main">
      <div className='main__container'>
        {children}
      </div>
    </main>
  )
}

export default Main;
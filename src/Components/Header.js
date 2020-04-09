import React from 'react'

function Header() {
  return (
    <header>
    <nav>
      <a href="https://facebook.com"><img src="https://i.imgur.com/KDIDiSE.png" /></a>
      <form>
        <input type="text" placeholder="  pesquisar"></input>
        <button className="material-icons">search</button>
      </form>
      <div>
        <a href=''>Meu perfil</a>
        <a href='' className="material-icons">account_circle</a>
        <a href='' className="material-icons">chat</a>  
        <a href='' className="material-icons">notifications</a>
        <span>|</span>
        <i className="material-icons">help</i>
      </div>
    </nav>
  </header>
  )
}

export default Headerg
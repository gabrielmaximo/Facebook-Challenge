import React from 'react';

function Header () {
  return (
    <header>
      <nav>
      <a href="https://facebook.com"><img src="https://i.imgur.com/KDIDiSE.png"/></a>
      <form action="">
        <input type="text" placeholder="Pesquisar"/>
        <button type="submit" className='material-icons'>search</button>
      </form>
      <div className="icons">
        <span>Meu Perfil</span> 
        <span className='material-icons'>account_circle</span>
        <span className='material-icons'>chat</span>
        <span className='material-icons'>notifications</span>
        <span id="black-icon">|</span>
        <span id="black-icon" className="material-icons">help</span>
      </div>
      </nav>
    </header>
  );
}

export default Header;
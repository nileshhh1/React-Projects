import React from 'react'

const Nav = () => {
  return (
    <div>
         <nav className='container'>
        <div className="logo">
        <img src="/images/simple-icons_nike.png"></img>
        </div>
        <ul>
          <li href="#">Home</li>
          <li href="#">Collection</li>
          <li href="#">Contact</li>
          <li href="#">About</li>
        </ul>
        <button>Login</button>
      </nav>
    </div>
  )
}

export default Nav;
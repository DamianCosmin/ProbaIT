import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <img className ="navbar-logo-image"></img>
        </div>
        <ul className="navbar-links">
          <li className="navbar-item hide-login"><button id="button-login">Login</button></li>
          <li className="navbar-item hide-login"><button id="button-register">Register</button></li>
          <li className="navbar-item show-login"><button id="button-profile">Profile</button></li>
          <li className="navbar-item show-login on-recipes-page"><button id="button-recipes">Recipes</button></li>
          <li className="navbar-item show-login on-recipes-page"><button id="button-add-recipe">Add Recipe</button></li>
        </ul>
       </nav>

       <div id="login-box">
        <h2 className="box-title">New recipes are waiting for you!</h2>
        <form id="login-form">
          <input  type='text' className='form-input' placeholder='E-mail:' name='email' required></input>
          <hr></hr>
          <input type='text' className='form-input' placeholder='Password:' name='password' required></input>
          <hr></hr>
          <input type='submit' className='form-submit' value='Log in'></input>
        </form>
       </div>

       <div id="register-box">
        <h2 className="box-title">Join us now!</h2>
        <form method="POST" id="register-form">
          <input type='text' className='form-input' placeholder='Full name:' name='name' required></input>
          <hr></hr>
          <input type='text' className='form-input' placeholder='Phone number:' name='phone' required></input>
          <hr></hr>
          <input type='text' className='form-input' placeholder='E-mail:' name='email' required></input>
          <hr></hr>
          <input type='text' className='form-input' placeholder='Password:' name='password' required></input>
          <hr></hr>
          <input type='text' className='form-input' placeholder='Confirm password:' name='password_conf' required></input>
          <hr></hr>
          <input type='submit' className='form-submit' value='Sign up'></input>
        </form>
       </div>

       <div id="profile-box">
        <h2 className="box-title">Profile</h2>
        <div id="profile-grid">
          <div className='profile-column width-25'>
            <img id='profile-icon'></img>
          </div>
          <div className='profile-column width-55'>
            <p className='profile-details'>Name: </p>
            <hr></hr>
            <p className='profile-details'>Phone number: </p>
            <hr></hr>
            <p className='profile-details'>E-mail: </p>
            <hr></hr>
            <p className='profile-details'>Recipes: </p>
            <hr></hr>
          </div>
        </div>
       </div>

       <div id="recipe-box">
        <h2 className="box-title">Add new recipe</h2>
        <div id="profile-grid">
          <div className='profile-column width-25'>
            <img id='food-icon'></img>
          </div>
          <div className='profile-column width-55'>
          <input type='text' className='form-input' placeholder='Recipe name:' name='recipe-name' required></input>
          <hr></hr>
          <input type='text' className='form-input' placeholder='Details:' name='recipe-detials' required></input>
          <hr></hr>
          <input type='text' className='form-input' placeholder='Rating:' name='recipe-rating' required></input>
          <hr></hr>
          </div>
        </div>
       </div>
    </>
  )
}

export default App

import React from 'react'

/* Add NavLink to importer */
import { Link } from 'react-router-dom';


class Login extends React.Component {
  render () {
    const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}
    return (

      /**




      <div className="ui middle aligned center aligned grid">
      <div className="column">
        <h2 className="ui teal image header">
          <img src="assets/images/logo.png" className="image"/>
          <div className="content">
            Log-in to your account
          </div>
        </h2>
        <form className="ui large form">
          <div className="ui stacked segment">
            <div className="field">
              <div className="ui left icon input">
                <i className="user icon"></i>
                <input type="text" name="email" placeholder="E-mail address"/>
              </div>
            </div>
            <div className="field">
              <div className="ui left icon input">
                <i className="lock icon"></i>
                <input type="password" name="password" placeholder="Password"/>
              </div>
            </div>
            <div className="ui fluid large teal submit button">Login</div>
          </div>

          <div className="ui error message"></div>

        </form>

        <div className="ui message">
          New to us? <NavLink
                to="/about"
                exact
          >Signnnnnnn</NavLink>
        </div>
      </div>
      </div>

      **/

  <form>
  <h1>Login</h1>
  <div>
    <input type="text" name="username" placeholder="Username" />
    <label htmlFor="username">Username</label>
  </div>
  <div>
    <input type="password" name="password" placeholder="Password" />
    <label htmlFor="password">Password</label>
  </div>
  <input type="submit" value="Login" />
  <div>
    new to us? <Link to='/about' style={link} exact > Joinnnnnn pls</Link>
  </div>
</form>


    )
  }
}

export default Login;

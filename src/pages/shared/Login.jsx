import './login.css';
import React from 'react';

const Login = () => {

  return (
    <>
      <section className="login">
      <h1 className="text-3xl font-bold title text-center mb-28 mt-16">Login</h1>
        <div className="login-form">
        <form className="flex flex-col" action="">
          <input className="login-input mb-12 border border-black py-2 px-3" type="text" name="" id="" placeholder="Username" />
          <input className="login-input mb-12 border border-black py-2 px-3" type="password" name="" id="" placeholder="password" />
          <button className="border border-black btn mb-12" type="submit">Login</button>
          <a className="forgot-password text-center" href="">Forgot password</a>
        </form>
        </div>
      </section>
    </>
  )
}

export default Login;
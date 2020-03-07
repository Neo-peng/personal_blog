import React, { useState, useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalState'

export default function Signin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { signin } = useContext(GlobalContext)

  const onSubmit = (e) => {
    e.preventDefault()
    const userInfo = {
      email,
      password
    }
    console.log(userInfo)
    signin(userInfo)
  }

  return (
    <div className='container'>
      <form onSubmit={e => onSubmit(e)}>
        <div className="form-row justify-content-md-center">
          <div className="col-8">
            <h1>登陆</h1>
          </div>
          <div className="form-group col-8">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={e => setEmail(e.target.value)}></input>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group col-8">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={e => setPassword(e.target.value)}></input>
          </div>
          <div className='form-group col-8'>
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>
    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='container-fluid footer'>
      <div className=""></div>
      <div className="copyright">
        Copyright © 2020 website.cn Powered by jinpeng | <span><Link to='/signin'>管理员</Link></span>
      </div>
    </div>
  )
}

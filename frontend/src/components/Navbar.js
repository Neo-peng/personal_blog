import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="">
      <div className="container-fluid">
        <div className="row align-items-start">
          <div className="col-sm-0 col-md-2"></div>
          <div className="col-sm-12 col-md-5">
            <ul className="">
              <li><Link to='/' className="active">首页</Link></li>
              <li><Link to='/article'>文章</Link></li>
              <li><Link to='/message'>留言</Link></li>
              <li><Link to='/life'>随笔</Link></li>
            </ul>
          </div>
          <div className="search col-sm-12 col-md-3">
            <input placeholder="请输入关键词"></input>
          </div>
          <div className="col-sm-0 col-md-2"></div>
        </div>
      </div>
    </nav>
  )
}

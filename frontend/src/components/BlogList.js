import React from 'react'

export default function BlogList() {
  return (
    <div className="container-fluid row">
      <div className="col-sm-0 col-md-2"></div>
      <div className="blog-cards col-sm-12 col-md-5">
        <div className="blog-card">
          <h3 className="blog-title">This blog is a test</h3>
          <div className="tag-icon-container">
            <span><i className="iconfont">&#xe63c;</i> #react #bootstrap </span>
            <span><i className="iconfont">&#xe663;</i> 2020-3-6 16:25 发表</span>
          </div>
          <p className="blog-content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur atque nobis laborum, suscipit hic soluta reiciendis ea maxime eaque tempora ducimus corrupti, nulla, recusandae sequi explicabo in. Autem, magnam voluptatem.</p>
          <div className="read-icon-container">
            <span><i className="iconfont">&#xe64a;</i> 100000 </span>
            <span><i className="iconfont">&#xe60a;</i> 300 </span>
            <span><i className="iconfont">&#xe673;</i> 300 </span>
          </div>
        </div>
        <div className="blog-card">
          <h3 className="blog-title">This blog is a test</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus placeat amet praesentium optio! Blanditiis non, inventore neque impedit vitae molestias, corporis possimus voluptatibus earum voluptatem consectetur optio quo dolorem accusantium?</p>
        </div>
        <div className="blog-card">
          <h3 className="blog-title">This blog is a test</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, repudiandae inventore blanditiis, in enim similique at numquam voluptate adipisci cupiditate expedita totam error, odit a vitae rem reprehenderit veritatis laborum?</p>
        </div>
      </div>
      <div className="col-sm-0 col-md-3 ">
        <div className="blog-card">
          <h2>关于本站</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, neque molestiae! Possimus ut temporibus sapiente assumenda tenetur sint repudiandae molestiae vel expedita facilis iure quasi ducimus eos voluptas, nam minus.
          </p>
        </div>

      </div>
      <div className="col-sm-0 col-md-2"></div>
    </div>
  )
}

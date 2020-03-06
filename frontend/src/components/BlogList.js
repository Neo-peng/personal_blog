import React from 'react'

export default function BlogList() {
  return (
    <div className="container-fluid row">
      <div className="col-sm-0 col-md-2"></div>
      <div className="blog-cards col-sm-12 col-md-5">
        <div className="blog-card">
          <h3 className="blog-title">This blog is a test</h3>
          <p className="blog-content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur atque nobis laborum, suscipit hic soluta reiciendis ea maxime eaque tempora ducimus corrupti, nulla, recusandae sequi explicabo in. Autem, magnam voluptatem.</p>
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

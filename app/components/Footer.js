import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <>
  <footer className="footer_area">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <div className="footer_top flex-column">
            <div className="footer_logo">
              <Link className="navbar-brand logo_h" href={'/'}>
                <Image src='/logo/logo-no-background.png' width={100} height={30} alt='logo'/>
              </Link>
              <h4>Follow Me</h4>
            </div>
            <div className="footer_social">
              <a href="#">
                <i className="fa fa-facebook" />
              </a>
              <a href="#">
                <i className="fa fa-twitter" />
              </a>
              <a href="#">
                <i className="fa fa-dribbble" />
              </a>
              <a href="#">
                <i className="fa fa-behance" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row footer_bottom justify-content-center">
        <p className="col-lg-8 col-sm-12 footer-text">
          {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
          Copyright © All rights reserved | This template is made with{" "}
          <i className="fa fa-heart-o" aria-hidden="true" /> by{" "}
          <a href="https://colorlib.com" target="_blank">
            Colorlib
          </a>
          {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
        </p>
      </div>
    </div>
  </footer>
  {/*================End Footer Area =================*/}
</>

  )
}

export default Footer

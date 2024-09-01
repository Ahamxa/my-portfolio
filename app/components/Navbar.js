import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className="header_area">
    <div className="main_menu">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          {/* Brand and toggle get grouped for better mobile display */}
            <Link className="navbar-brand logo_h" href={'/'}>
            <Image src='/logo/logo-no-background.png' width={100} height={30} alt='logo'/>
            </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          {/* Collect the nav links, forms, and other content for toggling */}
          <div
            className="collapse navbar-collapse offset"
            id="navbarSupportedContent"
          >
            <ul className="nav navbar-nav menu_nav justify-content-end">
              <li className="nav-item active">
                <Link className="nav-link" href={'/'}>
                Home
                </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" href={'/about'}>
                About
                </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" href={'/services'}>
                service
                </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" href={'/portfolio'}>
                Portfolio
                </Link>
              </li>

              <li className="nav-item">
              <Link className="nav-link" href={'/blog'}>
                blog
                </Link>
              </li>
            
              <li className="nav-item">
              <Link className="nav-link" href={'/contact'}>
                contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
  

  )
}

export default Navbar

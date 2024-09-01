import React from 'react'
import Projects from '../components/portfolio/Projects'
import Newsletter from '../components/Newsletter'
import Link from 'next/link'

const page = () => {
  return (
    <>
    <section className="banner_area">
      <div className="banner_inner d-flex align-items-center">
    <div className="container">
      <div className="banner_content text-center">
        <h2>Portfolio</h2>
        <div className="page_link">
          <Link href={'/'}>Home</Link>
          <Link href={'/portfolio'}>Portfolio</Link>
        </div>
        </div>
       </div>
       </div>
      </section>
     <Projects/>
     <Newsletter/>
    </>
  )
}

export default page

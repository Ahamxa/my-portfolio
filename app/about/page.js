
import Link from 'next/link'
import About from '../components/About'
import Brands from '../components/Brands'
import Newsletter from '../components/Newsletter'

const page = () => {
  return (
    <>
    <section className="banner_area">
      <div className="banner_inner d-flex align-items-center">
    <div className="container">
      <div className="banner_content text-center">
        <h2>About US</h2>
        <div className="page_link">
          <Link href={'/'}>Home</Link>
          <Link href={'/about'}>about us</Link>
        </div>
        </div>
       </div>
       </div>
      </section>
      <About/>
      <Brands/>
      <Newsletter/>
    </>
  )
}

export default page

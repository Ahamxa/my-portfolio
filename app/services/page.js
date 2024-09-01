import Link from 'next/link'
import Features from '../components/Features'
import Newsletter from '../components/Newsletter'

const page = () => {
  return (
    <>
    <section className="banner_area">
      <div className="banner_inner d-flex align-items-center">
    <div className="container">
      <div className="banner_content text-center">
        <h2>Services</h2>
        <div className="page_link">
          <Link href={'/'}>Home</Link>
          <Link href={'/services'}>Servies</Link>
        </div>
        </div>
       </div>
       </div>
      </section>
      <Features/>
      <Newsletter/>
    </>
  )
}

export default page

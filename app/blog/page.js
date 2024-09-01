
import Link from 'next/link'

const page = () => {
  return (
    <>
    <section className="banner_area">
      <div className="banner_inner d-flex align-items-center">
    <div className="container">
      <div className="banner_content text-center">
        <h2>Blogs</h2>
        <div className="page_link">
          <Link href={'/'}>Home</Link>
          <Link href={'/blogs'}>Blogs</Link>
        </div>
        </div>
       </div>
       </div>
      </section>
    </>
  )
}

export default page

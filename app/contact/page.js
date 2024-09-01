import Link from "next/link"
import ContactForm from "../components/ContactForm"

const page = () => {
  return (
    <>
    <section className="banner_area">
      <div className="banner_inner d-flex align-items-center">
    <div className="container">
      <div className="banner_content text-center">
        <h2>Contact US</h2>
        <div className="page_link">
          <Link href={'/'}>Home</Link>
          <Link href={'/contact'}>contact</Link>
        </div>
        </div>
       </div>
       </div>
      </section>
      <ContactForm/>
    </>
  )
}

export default page

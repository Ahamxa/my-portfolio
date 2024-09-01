import React from 'react'
import Image from 'next/image'

const Features = () => {
  return (
    <section className="features_area section_gap_top">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center">
          <div className="main_title">
            <h2>service offers </h2>
            <p>
              I offer a range of services to help you achieve your goals. 
              Whether you&apos;re looking for web development, UI/UX design, or SEO optimization, 
              I&apos;ve got you covered.
            </p>
          </div>
        </div>
      </div>
      <div className="row feature_inner">
        <div className="col-lg-3 col-md-6">
          <div className="feature_item">
            <Image width={60} height={60} className="" src="/img/services/s1.png" alt="web development" />
            <h4>Web Development</h4>
             <p>
              Create custom web applications for your business using the latest technologies and frameworks.
             </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="feature_item">
          <Image width={60} height={60} className="" src="/img/services/s2.png" alt="UI/UX" />
            <h4>UI/UX Design</h4>
             <p>
              Design intuitive and user-friendly interfaces that enhance user experience and engagement .
             </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="feature_item">
          <Image width={60} height={60} className="" src="/img/services/s3.png" alt="web design" />
            <h4>Web Design</h4>
            <p>
              Craft visually appealing and responsive designs that make your website stand out and attract visitors.
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="feature_item">
          <Image width={60} height={60} className="" src="/img/services/s4.png" alt="SEO" />
            <h4>SEO Optimization</h4>
            <p>
              Improve your website&apos;s visibility on search engines with effective SEO strategies and best practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Features

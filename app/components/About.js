import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <section className="about_area section_gap">
    <div className="container">
      <div className="row justify-content-start align-items-center">
        <div className="col-lg-5">
          <div className="about_img">
            <Image width={600} height={600} className="" src="/img/about-us.png" alt="about us" />
          </div>
        </div>
        <div className="offset-lg-1 col-lg-5">
          <div className="main_title text-left">
            <h2>
              let’s <br />
              Introduce about <br />
              myself
            </h2>
            <p>
               Hello! I’m Ameer Hamza, a passionate software engineer with a knack for developing innovative web solutions. 
               I specialize in creating dynamic and user-friendly applications using the latest technologies.
           </p>
            <p>
               With a strong foundation in software engineering principles and hands-on experience with modern frameworks like MERN, Django, and Flask,
               I’ve successfully brought numerous projects to life. My journey in tech has been driven by a deep curiosity and commitment to continuous 
               learning and growth.
            </p>
            <a className="primary_btn" href="#">
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About

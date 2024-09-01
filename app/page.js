import Image from "next/image";
import Projects from "./components/portfolio/Projects";
import Newsletter from "./components/Newsletter";
import Features from "./components/Features";
import Brands from "./components/Brands";
import About from "./components/About";

export default function Home() {
  return (
    <>
  {/*================ Start Home Banner Area =================*/}
  <section className="home_banner_area">
    <div className="banner_inner">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="banner_content">
              <h3 className="text-uppercase">Hell0</h3>
              <h1 className="text-uppercase">I am Ameer Hamza</h1>
              <h5 className="text-uppercase">Full Stack Developer</h5>
              <div className="d-flex align-items-center">
                <a className="primary_btn" href="#">
                  <span>Hire Me</span>
                </a>
                <a className="primary_btn tr-bg" href="#">
                  <span>Get CV</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="home_right_img">
              <Image width={600} height={600}src="/img/banner/home-right.png" alt="home-banner"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*================ End Home Banner Area =================*/}
  <About/>
  <Brands/>
  <Features/>
  <Projects/>
  <Newsletter/>
</>

  );

}


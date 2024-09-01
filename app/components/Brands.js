import React from 'react'
import Image from 'next/image'

const Brands = () => {
  return (
    <section className="brand_area section_gap_bottom">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="single-brand-item d-table">
                <div className="d-table-cell text-center">
                  <Image width={80} height={80} className="" src="/img/brands/aws.svg" alt="aws" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="single-brand-item d-table">
                <div className="d-table-cell text-center">
                <Image width={80} height={80} className="" src="/img/brands/django.svg" alt="django" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="single-brand-item d-table">
                <div className="d-table-cell text-center">
                  <Image width={80} height={80} className="" src="/img/brands/docker.svg" alt="docker" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="single-brand-item d-table">
                <div className="d-table-cell text-center">
                  <Image width={80} height={80} className="" src="/img/brands/laravel.svg" alt="laravel" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="single-brand-item d-table">
                <div className="d-table-cell text-center">
                 <Image width={80} height={80} className="" src="/img/brands/nodejs.svg" alt="nodejs" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="single-brand-item d-table">
                <div className="d-table-cell text-center">
                <Image width={80} height={80} className="" src="/img/brands/react.svg" alt="react" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="single-brand-item d-table">
                <div className="d-table-cell text-center">
                <Image width={80} height={80} className="" src="/img/brands/mongodb.svg" alt="mongodb" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="single-brand-item d-table">
                <div className="d-table-cell text-center">
                <Image width={80} height={80} className="" src="/img/brands/next.svg" alt="nextjs" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="single-brand-item d-table">
                <div className="d-table-cell text-center">
                <Image width={80} height={80} className="" src="/img/brands/python.svg" alt="python" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="offset-lg-2 col-lg-4 col-md-6">
          <div className="client-info">
            <div className="d-flex mb-50">
              <span className="lage">3</span>
              <span className="smll">Years Experience Working</span>
            </div>
            <div className="call-now d-flex">
              <div>
                <span className="fa fa-phone" />
              </div>
              <div className="ml-15">
                <p>call us now</p>
                <h3>(+92)-316-0971327</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Brands

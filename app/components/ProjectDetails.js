
import React from 'react'
import Image from 'next/image'


const ProjectDetails = ({project}) => {
        return (
            <>
            <section className="portfolio_details_area section_gap">
    <div className="container">
      <div className="portfolio_details_inner">
        <div className="row">
          <div className="col-lg-6">
            <div className="left_img">
                <Image
                src={project.image} 
                alt="Portfolio Details" 
                width={500}
                height={500}
                />
            </div>
          </div>
          <div className="offset-lg-1 col-lg-5">
            <div className="portfolio_right_text mt-30">
              <h4 className="text-uppercase">{project.title}</h4>
              <p>
                {project.overview}
              </p>
              <ul className="list">
                <li>
                  <span>Rating</span>: <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </li>
                <li>
                  <span>Client</span>: {project.client}
                </li>
                <li>
                  <span>Website</span>: {project.website}
                </li>
                <li>
                  <span>Completed</span>: {project.dateOfCompletion}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p>
          {project.description}
        </p>
        <p>
          {project.challanges}
        </p>
      </div>
    </div>
  </section>
            </>
        )
}

export default ProjectDetails

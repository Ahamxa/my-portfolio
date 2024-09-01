// app/portfolio/page.js (or .tsx if using TypeScript)
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';

// Function to fetch projects
const fetchProjects = async () => {
    try {
      console.log(`${process.env.NEXT_PUBLIC_SITE_URL}/api/projects`)
        const response = await axios.get(`${process.env.NEXT_PUBLIC_SITE_URL}/api/projects`);
        return response.data;
    } catch (error) {
        console.error('Error fetching projects:', error.message);
        return [];
    }
};

// Server component to render the portfolio
const Portfolio = async () => {
    const projects = await fetchProjects();

    return (
        <section className="portfolio_area section_gap_top" id="portfolio">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="main_title text-left">
                            <h2>
                                Quality Work <br />
                                Recently Done Projects
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row portfolio-grid justify-content-center">
                    {projects.map((project) => (
                        <div key={project.slug} className="col-lg-4 col-md-6">
                            <div className="portfolio_box">
                                <div className="single_portfolio">
                                    <Image
                                        className="img-fluid w-100"
                                        src={project.image}
                                        width={200}
                                        height={100}
                                        alt={project.title}
                                    />
                                    <div className="overlay" />
                                    <a href={project.image} className="img-gal">
                                        <div className="icon">
                                            <span className="lnr lnr-cross" />
                                        </div>
                                    </a>
                                </div>
                                <div className="short_info">
                                    <h4>
                                        <Link href={`/portfolio/${project.slug}`}>
                                            {project.title}
                                        </Link>
                                    </h4>
                                    <p>{project.tags}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;

import React from 'react'
import ProjectDetails from '@/app/components/ProjectDetails'
import Link from 'next/link'
import axios from 'axios';
import { notFound } from 'next/navigation';


const fetchProject = async (slug) => {
  try {
    console.log(`${process.env.NEXT_PUBLIC_SITE_URL}/api/projects/${slug}`)
    const response = await axios.get(`${process.env.NEXT_PUBLIC_SITE_URL}/api/projects/${slug}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching project:', error.message );
    throw new Error('Project not found');
  }
};




const page = async({params}) => {
  const { slug } = params;
  let project;

  try {
    project = await fetchProject(slug);
  } catch (error) {
    notFound(); // Show a 404 page if the project is not found
    return null;
  }

  return (

    <>
    <section className="banner_area">
      <div className="banner_inner d-flex align-items-center">
    <div className="container">
      <div className="banner_content text-center">
        <h2>Project Details</h2>
        <div className="page_link">
          <Link href={'/'}>Home</Link>
          <Link href={'/portfolio'}>Portfolio</Link>
          <Link href={`/portfolio/${project.slug}`}>Project details</Link>
        </div>
        </div>
       </div>
       </div>
      </section>
      <ProjectDetails project={project}/>
    </>
    
  );
}

export default page

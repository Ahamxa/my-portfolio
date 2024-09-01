import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { slug } = params;
  
  // Example static data; replace with your database query logic
  const projects = [
    {
      slug: 'project-1',
      title: 'Project 1',
      image:'/img/portfolio/p1.jpg',
      overview:'overview project 1',
      client:'client 1',
      website:'websiee.com',
      dateOfCompletion:'13/07/2002',
      description:'description of proeject 1',
      challanges:'chanllages project 1'
    },
    {
      slug: 'project-2',
      title: 'Project 2',
      image:'/img/portfolio/p2.jpg',
      overview:'overview project 2',
      client:'client 2',
      website:'websiee.com',
      dateOfCompletion:'13/07/2002',
      description:'description of proeject 2',
      challanges:'chanllages project 2'
    },
  ];

  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return NextResponse.error(new Error('Project not found'), { status: 404 });
  }

  return NextResponse.json(project);
}

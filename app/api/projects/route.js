// app/api/projects/route.js
export async function GET() {
  // Define your projects data
  const projects = [
    { slug: 'project-1', image: '/img/portfolio/p1.jpg', title: 'Minimal Design', tags: 'Animated, portfolio' },
    { slug: 'project-2', image: '/img/portfolio/p2.jpg', title: 'Paint Wall', tags: 'Animated, portfolio'},
    { slug: 'project-3', image: '/img/portfolio/p3.jpg', title: 'Paint Wall', tags: 'Animated, portfolio'},
    { slug: 'project-4', image: '/img/portfolio/p4.jpg', title: 'Paint Wall', tags: 'Animated, portfolio'},
    { slug: 'project-5', image: '/img/portfolio/p5.jpg', title: 'Paint Wall', tags: 'Animated, portfolio'},
    { slug: 'project-6', image: '/img/portfolio/p6.jpg', title: 'Paint Wall', tags: 'Animated, portfolio'},

    // Add more projects as needed
  ];

  // Return the response with status 200
  return new Response(JSON.stringify(projects), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

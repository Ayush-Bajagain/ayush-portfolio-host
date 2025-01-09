import { useState } from 'react';
import { Project } from '../types';
import { ProjectCard } from './ProjectCard';

const projects: Project[] = [
  {
    id: 1,
    title: 'School Fee Management System',
    description: 'A comprehensive school fee management system with features for fee collection, tracking, and reporting.',
    technologies: ['HTML', 'CSS', 'PHP', 'MySQL'],
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&h=500',
    category: 'Web Development',
    liveUrl: 'http://onlinefee.freesite.online/',
    githubUrl: 'https://github.com/Ayush-Bajagain/school-fee-management',
  },
  {
    id: 2,
    title: 'Vehicle Rental System',
    description: 'Modern vehicle rental platform with real-time booking and inventory management.',
    technologies: ['React', 'Node.js', 'Supabase', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&h=500',
    category: 'Web Development',
    githubUrl: 'https://github.com/Ayush-Bajagain/vehicle-rental',
  },
  {
    id: 3,
    title: 'E-commerce Platform',
    description: 'Feature-rich e-commerce solution with product management, cart, and secure checkout.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&h=500',
    category: 'E-commerce',
    githubUrl: 'https://github.com/Ayush-Bajagain/ecommerce',
  },
];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<Project['category'] | 'All'>('All');

  const categories = ['All', ...new Set(projects.map(project => project.category))];
  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          My Projects
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category as Project['category'] | 'All')}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
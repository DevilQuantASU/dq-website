import React, { useState } from 'react';
import projectCategories from '../data/projects';

const statusColors = {
  'In Progress': 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
  'Planning': 'bg-amber-500/20 text-amber-300 border-amber-500/30',
  'Completed': 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
};

const ProjectCard = ({ title, status, description, tags, members }) => (
  <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-colors">
    <div className="flex items-start justify-between gap-3 mb-3">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <span className={`text-xs font-medium px-2.5 py-1 rounded-full border whitespace-nowrap ${statusColors[status] || 'bg-gray-700 text-gray-300 border-gray-600'}`}>
        {status}
      </span>
    </div>
    <p className="text-gray-400 text-sm leading-relaxed mb-4">{description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {tags.map((tag) => (
        <span key={tag} className="text-xs bg-gray-800 text-gray-400 px-2.5 py-1 rounded-md border border-gray-700/50">
          {tag}
        </span>
      ))}
    </div>
    <div className="flex items-center gap-2 text-xs text-gray-500">
      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      {members.join(', ')}
    </div>
  </div>
);

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const filtered = activeCategory
    ? projectCategories.filter((c) => c.name === activeCategory)
    : projectCategories;

  return (
    <div className="min-h-screen bg-gray-950 pt-24 pb-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
            Club <span className="text-indigo-500">Projects</span>
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            What we're building and researching right now.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
              activeCategory === null
                ? 'bg-indigo-600 text-white border-indigo-500'
                : 'bg-gray-900 text-gray-400 border-gray-700 hover:text-white hover:border-gray-600'
            }`}
          >
            All
          </button>
          {projectCategories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                activeCategory === cat.name
                  ? 'bg-indigo-600 text-white border-indigo-500'
                  : 'bg-gray-900 text-gray-400 border-gray-700 hover:text-white hover:border-gray-600'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Project categories */}
        <div className="space-y-16">
          {filtered.map((category) => (
            <div key={category.name}>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-white">{category.name}</h2>
                <p className="text-gray-500 text-sm mt-1">{category.description}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.projects.map((project) => (
                  <ProjectCard key={project.title} {...project} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

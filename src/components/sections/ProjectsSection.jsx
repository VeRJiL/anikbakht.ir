import React, { useState, useMemo } from 'react';
import { Github, ExternalLink, ChevronDown, ChevronUp, Star, Filter } from 'lucide-react';
import TechIcon from '../common/TechIcon';
import { projects, projectCategories, allTechnologies } from '../../data/projects';

const ProjectCard = ({ project, onToggleDetails, isExpanded }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden hover-scale group transition-all duration-300 border border-gray-700 hover:border-blue-500/50">
      {/* Project Image */}
      <div className="relative h-48 bg-gradient-to-br from-blue-600/20 to-purple-600/20 overflow-hidden">
        <div className="absolute inset-0 bg-gray-900/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl text-blue-400/30 font-bold">
            {project.title.charAt(0)}
          </div>
        </div>
        {project.featured && (
          <div className="absolute top-3 right-3">
            <div className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
              <Star className="w-3 h-3" />
              <span>Featured</span>
            </div>
          </div>
        )}
        <div className="absolute top-3 left-3">
          <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
            {project.category}
          </span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full flex items-center space-x-1 hover:bg-blue-600/20 transition-colors"
            >
              <TechIcon tech={tech} className="w-3 h-3" />
              <span>{tech}</span>
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 bg-gray-600 text-gray-400 text-xs rounded-full">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Expanded Details */}
        {isExpanded && (
          <div className="mb-4 p-4 bg-gray-700/50 rounded-lg animate-slide-in-up">
            <div className="space-y-3">
              <div>
                <h4 className="text-blue-400 font-semibold text-sm mb-1">Overview</h4>
                <p className="text-gray-300 text-sm">{project.details.overview}</p>
              </div>
              <div>
                <h4 className="text-blue-400 font-semibold text-sm mb-1">Key Challenges</h4>
                <p className="text-gray-300 text-sm">{project.details.challenges}</p>
              </div>
              <div>
                <h4 className="text-blue-400 font-semibold text-sm mb-1">Solutions</h4>
                <p className="text-gray-300 text-sm">{project.details.solutions}</p>
              </div>
              <div>
                <h4 className="text-blue-400 font-semibold text-sm mb-1">Key Metrics</h4>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {project.details.metrics.map((metric, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-300 text-xs">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-blue-400 font-semibold text-sm mb-2">All Technologies</h4>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full flex items-center space-x-1"
                    >
                      <TechIcon tech={tech} className="w-3 h-3" />
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-between">
          <div className="flex space-x-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <Github className="w-4 h-4" />
                <span>Code</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live</span>
              </a>
            )}
          </div>
          <button
            onClick={() => onToggleDetails(project.id)}
            className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors text-sm"
          >
            <span>{isExpanded ? 'Less' : 'More'}</span>
            {isExpanded ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = ({ visibleElements }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  const [expandedProjects, setExpandedProjects] = useState(new Set());
  const [showFilters, setShowFilters] = useState(false);

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const categoryMatch = selectedCategory === 'All' || project.category === selectedCategory;
      const techMatch = selectedTechnologies.length === 0 || 
        selectedTechnologies.some(tech => project.technologies.includes(tech));
      return categoryMatch && techMatch;
    });
  }, [selectedCategory, selectedTechnologies]);

  const toggleProjectDetails = (projectId) => {
    setExpandedProjects(prev => {
      const newSet = new Set(prev);
      if (newSet.has(projectId)) {
        newSet.delete(projectId);
      } else {
        newSet.add(projectId);
      }
      return newSet;
    });
  };

  const toggleTechnology = (tech) => {
    setSelectedTechnologies(prev => {
      if (prev.includes(tech)) {
        return prev.filter(t => t !== tech);
      } else {
        return [...prev, tech];
      }
    });
  };

  const clearFilters = () => {
    setSelectedCategory('All');
    setSelectedTechnologies([]);
  };

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/6 w-40 h-40 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16" data-animate id="projects">
          <h2 className={`text-4xl font-bold mb-4 transition-all duration-1000 ${
            visibleElements?.has('projects') ? 'animate-fade-in' : 'opacity-0 translate-y-8'
          }`}>
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
            visibleElements?.has('projects') ? 'animate-slide-in-up' : 'opacity-0 translate-y-8'
          }`}>
            Explore my portfolio of projects showcasing expertise in modern technologies, 
            scalable architectures, and innovative solutions.
          </p>
        </div>

        {/* Filters */}
        <div className={`mb-12 transition-all duration-1000 delay-300 ${
          visibleElements?.has('projects') ? 'animate-slide-in-up' : 'opacity-0 translate-y-8'
        }`} data-animate>
          <div className="flex flex-wrap items-center justify-between mb-6">
            <div className="flex flex-wrap gap-3 mb-4 md:mb-0">
              {projectCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Filter className="w-4 h-4" />
                <span>Tech Filter</span>
              </button>
              {(selectedTechnologies.length > 0 || selectedCategory !== 'All') && (
                <button
                  onClick={clearFilters}
                  className="px-4 py-2 bg-red-600/20 text-red-400 rounded-lg hover:bg-red-600/30 transition-colors text-sm"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>

          {/* Technology Filters */}
          {showFilters && (
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 animate-slide-in-up">
              <h3 className="text-lg font-semibold mb-3">Filter by Technology</h3>
              <div className="flex flex-wrap gap-2">
                {allTechnologies.map((tech) => (
                  <button
                    key={tech}
                    onClick={() => toggleTechnology(tech)}
                    className={`px-3 py-2 rounded-full text-sm transition-all duration-300 flex items-center space-x-2 ${
                      selectedTechnologies.includes(tech)
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    <TechIcon tech={tech} className="w-4 h-4" />
                    <span>{tech}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Projects Grid */}
        <div className={`transition-all duration-1000 delay-500 ${
          visibleElements?.has('projects') ? 'animate-slide-in-up' : 'opacity-0 translate-y-8'
        }`} data-animate>
          {filteredProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onToggleDetails={toggleProjectDetails}
                  isExpanded={expandedProjects.has(project.id)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl text-gray-600 mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No projects found</h3>
              <p className="text-gray-500">Try adjusting your filters to see more projects.</p>
            </div>
          )}
        </div>

        {/* Stats */}
        <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 delay-700 ${
          visibleElements?.has('projects') ? 'animate-slide-in-up' : 'opacity-0 translate-y-8'
        }`} data-animate>
          <div className="text-center bg-gray-800/50 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold text-blue-400 mb-1">{projects.length}</div>
            <div className="text-gray-400 text-sm">Total Projects</div>
          </div>
          <div className="text-center bg-gray-800/50 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold text-green-400 mb-1">
              {projects.filter(p => p.featured).length}
            </div>
            <div className="text-gray-400 text-sm">Featured</div>
          </div>
          <div className="text-center bg-gray-800/50 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold text-purple-400 mb-1">
              {new Set(projects.flatMap(p => p.technologies)).size}
            </div>
            <div className="text-gray-400 text-sm">Technologies</div>
          </div>
          <div className="text-center bg-gray-800/50 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold text-yellow-400 mb-1">
              {new Set(projects.map(p => p.category)).size}
            </div>
            <div className="text-gray-400 text-sm">Categories</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
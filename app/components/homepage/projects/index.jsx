'use client';
import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';
import { useEffect, useRef, useState, useMemo } from 'react';

const Projects = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [selectedSkill, setSelectedSkill] = useState('all');
  const [selectedTopic, setSelectedTopic] = useState('all');
  const cardRefs = useRef([]);
  const { skills, topics } = useMemo(() => {
    const skillsSet = new Set();
    const topicsSet = new Set();
    
    projectsData.forEach(project => {
      if (project.tools) {
        project.tools.forEach(tool => skillsSet.add(tool));
      }
      if (project.topic) {
        project.topic.forEach(t => topicsSet.add(t));
      }
    });
    
    return {
      skills: Array.from(skillsSet).sort(),
      topics: Array.from(topicsSet).sort()
    };
  }, []);
  const filteredProjects = useMemo(() => {
    return projectsData.filter(project => {
      const matchesSkill = selectedSkill === 'all' || 
        (project.tools && project.tools.includes(selectedSkill));
      const matchesTopic = selectedTopic === 'all' || 
        (project.topic && project.topic.includes(selectedTopic));
      return matchesSkill && matchesTopic;
    });
  }, [selectedSkill, selectedTopic]);

  useEffect(() => {
    const observers = [];
    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleCards((prev) => {
                const newSet = new Set(prev);
                newSet.add(index);
                return newSet;
              });
            } else {
              setVisibleCards((prev) => {
                const newSet = new Set(prev);
                newSet.delete(index);
                return newSet;
              });
            }
          });
        },
        {
          threshold: 0.15,
          rootMargin: '0px 0px -100px 0px',
        }
      );
      observer.observe(card);
      observers.push(observer);
    });
    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [filteredProjects]);

  useEffect(() => {
    setVisibleCards(new Set());
  }, [selectedSkill, selectedTopic]);

  const handleResetFilters = () => {
    setSelectedSkill('all');
    setSelectedTopic('all');
  };

  const activeFiltersCount = (selectedSkill !== 'all' ? 1 : 0) + (selectedTopic !== 'all' ? 1 : 0);

  return (
    <div id='projects' className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Projects
          </span> 
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>


      <div className="pt-12 max-w-4xl mx-auto px-4">
        <div className="flex flex-wrap items-center gap-4 w-full bg-[#1a1443] p-4 rounded-lg">
          <div className="flex-1 relative min-w-[250px]">
            <select
              value={selectedSkill}
              onChange={(e) => setSelectedSkill(e.target.value)}
              className="w-full h-[52px] px-5 py-4 bg-[#2c2466] text-white font-medium text-base rounded-lg border border-transparent focus:outline-none focus:ring-0 cursor-pointer appearance-none"
            >
              <option value="all" className="text-white font-medium">All Technologies</option>
              {skills.map(skill => (
                <option key={skill} value={skill} className="text-white font-medium">{skill}</option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          <div className="flex-1 relative min-w-[250px]">
            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="w-full h-[52px] px-5 py-4 bg-[#2c2466] text-white font-medium text-base rounded-lg border border-transparent focus:outline-none focus:ring-0 cursor-pointer appearance-none"
            >
              <option value="all" className="text-white font-medium">All Categories</option>
              {topics.map(topic => (
                <option key={topic} value={topic} className="text-white font-medium">{topic}</option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          {activeFiltersCount > 0 && (
            <button
              onClick={handleResetFilters}
              className="px-6 py-4 bg-violet-600 hover:bg-violet-500 text-white text-sm rounded-lg transition-colors duration-200 whitespace-nowrap"
            >
              Reset
            </button>
          )}
        </div>
      </div>
      <div className="pt-12">
        <div className="flex flex-col gap-8 lg:gap-12 max-w-4xl mx-auto px-4">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => {
              const isVisible = visibleCards.has(index);
              return (
                <div
                  ref={(el) => (cardRefs.current[index] = el)}
                  id={`project-card-${index + 1}`}
                  key={project.id || index}
                  className={`w-full transform transition-all duration-1000 ease-out hover:scale-[1.02] ${
                    isVisible
                      ? 'opacity-100 translate-y-0 scale-100'
                      : 'opacity-0 translate-y-8 scale-95'
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${index * 80}ms` : `${index * 30}ms`,
                    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  <div className="box-border flex items-center justify-center rounded-lg shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s] hover:shadow-[0_0_50px_0_rgba(139,92,246,0.4)]">
                    <ProjectCard project={project} />
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-16 px-4">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#1a1443] flex items-center justify-center">
                <svg className="w-8 h-8 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white mb-2">No projects found</h3>
              <p className="text-gray-400 text-sm mb-6">Try adjusting your filters</p>
              <button
                onClick={handleResetFilters}
                className="px-5 py-2.5 bg-violet-600 hover:bg-violet-700 text-white text-sm rounded-lg transition-colors duration-200"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
"use client";
import { useState, useMemo, useEffect } from 'react';

function BlogFilter({ blogs, onFilterChange }) {
  const [selectedTopic, setSelectedTopic] = useState('all');
  const [searchTitle, setSearchTitle] = useState('');

  const { topics } = useMemo(() => {
    const topicsSet = new Set();
    
    blogs.forEach(blog => {
      if (blog.tag_list && Array.isArray(blog.tag_list)) {
        blog.tag_list.forEach(tag => topicsSet.add(tag));
      }
    });
    
    return {
      topics: Array.from(topicsSet).sort()
    };
  }, [blogs]);

  const filteredBlogs = useMemo(() => {
    return blogs.filter(blog => {
      const matchesTopic = selectedTopic === 'all' || 
        (blog.tag_list && blog.tag_list.includes(selectedTopic));
      
      const matchesTitle = searchTitle === '' || 
        blog.title.toLowerCase().includes(searchTitle.toLowerCase());
      
      return matchesTopic && matchesTitle;
    });
  }, [blogs, selectedTopic, searchTitle]);

  // FIX: Use useEffect instead of useState to call onFilterChange
  useEffect(() => {
    onFilterChange(filteredBlogs);
  }, [filteredBlogs, onFilterChange]);

  const handleResetFilters = () => {
    setSelectedTopic('all');
    setSearchTitle('');
  };

  const activeFiltersCount = (selectedTopic !== 'all' ? 1 : 0) + (searchTitle !== '' ? 1 : 0);

  return (
    <div className="pt-12 max-w-4xl mx-auto px-4">
      <div className="flex flex-wrap items-center gap-4 w-full bg-[#1a1443] p-4 rounded-lg">
      <div className="flex-1 relative min-w-[250px]">
          <input
            type="text"
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
            placeholder="Search blog posts..."
            className="w-full h-[52px] px-5 py-4 bg-[#2c2466] text-white font-medium text-base rounded-lg border border-transparent focus:outline-none focus:ring-0 placeholder-gray-400"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        <div className="flex-1 relative min-w-[250px]">
          <select
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value)}
            className="w-full h-[52px] px-5 py-4 bg-[#2c2466] text-white font-medium text-base rounded-lg border border-transparent focus:outline-none focus:ring-0 cursor-pointer appearance-none"
          >
            <option value="all" className="text-white font-medium">All Topics</option>
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
  );
}

export default BlogFilter;
import React, { useMemo } from 'react';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';
import LabGrid from './LabGrid';
import { CATEGORIES } from '../data/labs';

export default function ResearchLabs({
  labs,
  searchQuery,
  onSearchChange,
  selectedCategory,
  onSelectCategory,
  onReset
}) {
  // Calculate category lab counts
  const categoryCounts = useMemo(() => {
    const counts = { All: labs.length };
    CATEGORIES.forEach(cat => {
      if (cat !== 'All') {
        counts[cat] = labs.filter(l => l.category === cat).length;
      }
    });
    return counts;
  }, [labs]);

  // Filter laboratories based on search query and category
  const filteredLabs = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    
    return labs.filter(lab => {
      const matchesCategory =
        selectedCategory === 'All' || lab.category === selectedCategory;

      if (!matchesCategory) return false;

      if (!query) return true;

      const matchesName = lab.name.toLowerCase().includes(query);
      const matchesShort = lab.shortName.toLowerCase().includes(query);
      const matchesCat = lab.category.toLowerCase().includes(query);
      const matchesDesc = lab.description.toLowerCase().includes(query);

      return matchesName || matchesShort || matchesCat || matchesDesc;
    });
  }, [labs, searchQuery, selectedCategory]);

  return (
    <section id="research-labs" className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amrita-50 dark:bg-amrita-950/70 text-amrita-700 dark:text-rose-400 border border-amrita-200/60 dark:border-amrita-800/60">
          CENTRAL DIRECTORY
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Research Labs & Centres
        </h2>
        <p className="text-base text-slate-600 dark:text-slate-300 font-normal">
          Explore the research laboratories and centres at Amrita Vishwa Vidyapeetham, Chennai Campus.
        </p>
      </div>

      {/* Search & Filter Controls */}
      <div className="space-y-6 mb-10">
        <SearchBar
          value={searchQuery}
          onChange={onSearchChange}
          onClear={() => onSearchChange('')}
          totalMatches={filteredLabs.length}
          totalLabs={labs.length}
        />

        <CategoryFilter
          categories={CATEGORIES}
          selectedCategory={selectedCategory}
          onSelectCategory={onSelectCategory}
          categoryCounts={categoryCounts}
        />
      </div>

      {/* Grid of Laboratories */}
      <LabGrid labs={filteredLabs} onReset={onReset} />

    </section>
  );
}

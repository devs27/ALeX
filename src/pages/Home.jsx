import React, { useState, useCallback } from 'react';
import Hero from '../components/Hero';
import CampusIdentity from '../components/CampusIdentity';
import ResearchStats from '../components/ResearchStats';
import ResearchLabs from '../components/ResearchLabs';
import ResearchAreas from '../components/ResearchAreas';
import CampusSection from '../components/CampusSection';
import AboutSection from '../components/AboutSection';
import { LABS_DATA } from '../data/labs';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleSelectArea = useCallback((category) => {
    setSelectedCategory(category);
    scrollToSection('research-labs');
  }, []);

  const handleReset = useCallback(() => {
    setSearchQuery('');
    setSelectedCategory('All');
  }, []);

  return (
    <main className="w-full">
      <Hero
        onExploreLabs={() => scrollToSection('research-labs')}
        onExploreAreas={() => scrollToSection('research-areas')}
      />

      <CampusIdentity />

      <ResearchStats />

      <ResearchLabs
        labs={LABS_DATA}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        onReset={handleReset}
      />

      <ResearchAreas onSelectArea={handleSelectArea} />

      <CampusSection />

      <AboutSection />
    </main>
  );
}

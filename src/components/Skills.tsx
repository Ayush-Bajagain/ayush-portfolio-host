import { useState } from 'react';
import { Skill } from '../types';
import { SkillCard } from './SkillCard';
import { CategoryFilter } from './CategoryFilter';
import { skillsData } from '../data/skills';

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<Skill['category'] | 'All'>('All');

  const categories = ['All', ...new Set(skillsData.map(skill => skill.category))];
  const filteredSkills = selectedCategory === 'All' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          My Skills
        </h2>

        <CategoryFilter 
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
import { Skill } from '../types';

interface SkillCardProps {
  skill: Skill;
}

export function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {skill.name}
        </h3>
        <span className="text-blue-600 dark:text-blue-400 font-medium">
          {skill.proficiency}%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
        <div
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
          style={{ width: `${skill.proficiency}%` }}
        />
      </div>
    </div>
  );
}
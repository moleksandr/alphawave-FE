// Dependencies
import React from 'react';

// Components
import { MainLayout } from '../../../components/layouts/MainLayout';
import { Section } from '../../../components/Section';

// Contexts
import { useProjectContext } from '../../../contexts/ProjectContext';

// Export page
const ProjectsPage = () => {
  const { sections, addSection } = useProjectContext();

  return (
    <MainLayout>
      {sections.map(section => (
        <Section key={section.id} id={section.id} />
      ))}
      <div className="w-full h-px border border-indigo-500 relative">
        <button className='absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-40 h-9 bg-indigo-500 rounded-3xl text-white' onClick={addSection}>+ Add Section</button>
      </div>
    </MainLayout>
  );
};

export default ProjectsPage;

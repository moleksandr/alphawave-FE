// Dependencies
import React, { useState, createContext, useContext, FC, Dispatch, SetStateAction } from 'react';
import { v4 as uuidv4 } from "uuid";

// Types
import { TOOL_TYPE } from '../components/ToolBar/types';
type Area = {
  id: string;
  order: number;
  componentTypes: TOOL_TYPE[];
}

type Section = {
  id: string;
  title: string;
  areas: Area[];
}

interface ProjectContextProps {
  sections: Section[];
  addSection: () => void;
  updateSection: (section: Section) => void;
  addArea: (sectionId: string, dir: 'left' | 'right') => void;
  removeArea: (sectionId: string, areaId: string) => void;
  addComponent: (sectionId: string, areaId: string, type: TOOL_TYPE) => void;
}

const initialValues = {
  sections: [{
    id: uuidv4(),
    title: 'New Section',
    areas: []
  }],
  addSection: () => {},
  updateSection: () => {},
  addArea: () => {},
  removeArea: () => {},
  addComponent: () => {},
}

const ProjectContext = createContext<ProjectContextProps>(initialValues);

export const ProjectProvider: FC<any> = ({ children }) => {
  const [sections, setSections] = useState<Section[]>(initialValues.sections);
  
  const addSection = () => {
    const newSection = {
      id: uuidv4(),
      title: 'New Section',
      areas: []
    };
    
    setSections(prevSections => [...prevSections, newSection]);
  };
  
  const updateSection = (section: Section) => {
    setSections(prevSections => prevSections.map((oldSection) => oldSection.id === section.id ? section : oldSection));
  }
  
  const addArea = (sectionId: string, dir: 'left' | 'right') => {
    const section = sections.find((sec) => sec.id === sectionId);
    
    const newArea = {
      id: uuidv4(),
      componentTypes: [],
      order: (section?.areas?.length ?? 0) + 1
    };
    
    setSections(prevSections => prevSections.map((section) => section.id === sectionId ? ({
      ...section,
      areas: dir === 'left' ? [newArea, ...section.areas] : [...section.areas, newArea],
    }) : section))
  };
  
  const removeArea = (sectionId: string, areaId: string) => {
    setSections(prevSections => prevSections.map(section => section.id === sectionId ? ({
      ...section,
      areas: section.areas.filter(area => area.id !== areaId)
    }) : section))
  };
  
  const addComponent = (sectionId: string, areaId: string, componentType: TOOL_TYPE) => {
    setSections(prevSections => prevSections.map(section => section.id === sectionId ? ({
      ...section,
      areas: section.areas.map((area) => area.id === areaId ? ({
        ...area,
        componentTypes: [...area.componentTypes, componentType]
      }) : area)
    }) : section))
  };
  
  const value = {
    sections,
    addSection,
    updateSection,
    addArea,
    removeArea,
    addComponent,
  }

  return (
    <ProjectContext.Provider value={value}>
      {children}
    </ProjectContext.Provider>
  );
}

export const useProjectContext = () => {
  return useContext(ProjectContext);
}

// Dependencies
import React, { useState, createContext, useContext, FC, Dispatch, SetStateAction } from 'react';
import { v4 as uuidv4 } from "uuid";
import { TOOL_TYPE } from '../components/ToolBar/types';
// Types
type Widget = {
  id: string
  i: string
  x: number
  y: number
  w: number
  h: number
  minW: number,
  minH: number,
  maxW: number,
  maxH: number,
  isResizable: boolean,
  type: string;
}

type Section = {
  id: string;
  title: string;
  widgets: Widget[];
}

interface ProjectContextProps {
  sections: Section[];
  addSection: () => void;
  updateSection: (section: Section) => void;
  addWidget: (sectionId: string, type: string) => void;
  removeWidget: (sectionId: string, widgetId: string) => void;
  removeSection: (sectionId: string) => void
}

const initialValues = {
  sections: [{
    id: uuidv4(),
    title: 'New Section',
    widgets: []
  }],
  addSection: () => {},
  updateSection: () => {},
  addWidget: () => {},
  removeWidget: () => {},
  removeSection: () => {}
}

const ProjectContext = createContext<ProjectContextProps>(initialValues);
// Export Component
export const ProjectProvider: FC<any> = ({ children }) => {
  const [sections, setSections] = useState<Section[]>(initialValues.sections);
  
  const addSection = () => {
    const newSection = {
      id: uuidv4(),
      title: 'New Section',
      widgets: []
    };
    
    setSections(prevSections => [...prevSections, newSection]);
  };
  
  const updateSection = (section: Section) => {
    setSections(prevSections => prevSections.map((oldSection) => oldSection.id === section.id ? section : oldSection));
  }
  
  const addWidget = (sectionId: string, type: string) => {
    setSections((prevSections) =>
    prevSections.map((section) => {
      if (section.id === sectionId) {
        const maxRow = section?.widgets?.length !== 0 ? section?.widgets[section?.widgets.length - 1].y : 0;
      
        const newWidget = {
          id: uuidv4(),
          i: uuidv4(),
          x: 1,
          y: maxRow,
          w: 13,
          h: 7,
          minW: 5,
          minH: 5,
          maxH: 10,
          maxW: 300,
          isResizable: true,
          type: type,
        };

        switch (type) {
          case TOOL_TYPE.CHART_BAR:
            newWidget.w = 100;
            newWidget.h = 8;
            newWidget.isResizable = false
            break;
          case TOOL_TYPE.CHART_LINE:
            newWidget.w = 100;
            newWidget.h = 11;
            newWidget.isResizable = false
            break;
          case TOOL_TYPE.TABLE_STATUS:
            newWidget.maxH = 300
            newWidget.minW = 10
            newWidget.h = 16
            break
          case TOOL_TYPE.IMAGE_SINGLE:
            newWidget.maxH = 40
            break
          case TOOL_TYPE.VIDEO_YOUTUBE:
            newWidget.h = 20
            
            newWidget.maxH = 25
            }

        return {
          ...section,
          widgets: [...section.widgets, newWidget],
        };
      }
      return section;
    })
  );
  };

  const removeWidget = (sectionId: string, widgetI: string) => {
    setSections(prevSections => prevSections.map(section => section.id === sectionId ? ({
      ...section,
      widgets: section.widgets.filter(widget => widget.i !== widgetI)
    }) : section))
  };
  
  const removeSection = (sectionId: string) => {
    setSections(sections.filter(section => section.id !== sectionId))
  };
  
  const value = {
    sections,
    addSection,
    updateSection,
    addWidget,
    removeWidget,
    removeSection,
 
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

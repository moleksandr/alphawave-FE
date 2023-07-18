// Dependencies
import React, {FC, useCallback, useMemo, useState} from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

// Types
import { SectionProps } from './types';

// Components
import { ToolBar } from '../ToolBar';
import { Area } from './Area';
import {useProjectContext} from "../../contexts/ProjectContext";

// Export component
export const Section: FC<SectionProps> = (props) => {
  const { id } = props;
  const { sections, updateSection, addArea } = useProjectContext();
  
  const [isEditing, setIsEditing] = useState(false);
  const [showaddLayoutbtn, setAddLayoutBtn] = useState(false);
  
  const sectionData = useMemo(() => sections.find((section) => section.id === id), [sections, id])
  
  const handleDoubleClick = () => {
    setIsEditing(true);
  };
  
  const handleBlur = () => {
    setIsEditing(false);
  };
  
  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      setIsEditing(false);
    }
  };
  
  const handleChange = useCallback((event: any) => {
    if (sectionData) {
      updateSection({
        ...sectionData,
        title: event.target.value,
      });
    }
  }, [sectionData, updateSection]);
  
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="container py-[11px]  px-[100px] relative">
        <div className="w-full  py-2 bg-gradient-to-r from-cyan-600 to-slate-500 justify-center items-center gap-2.5 inline-flex rounded-t-xl">
          <div className="text-center  text-4xl font-bold" > {isEditing ? (
            <input
              type="text"
              className='text-center outline-none'
              value={sectionData?.title}
              onChange={(e) => handleChange(e)}
              onBlur={() => handleBlur()}
              onKeyDown={(e) => handleKeyDown(e)}
              autoFocus
            />
          ) : (
            <h2 onDoubleClick={() => handleDoubleClick()} className='text-white'>{sectionData?.title}</h2>
          )}</div>
        </div>
        <div className="w-full  flex h-[50vh] bg-white p-4 rounded-b-xl" onMouseEnter={() => setAddLayoutBtn(true)} onMouseLeave={() => setAddLayoutBtn(false)}>
          <div className='bg-green-500 min-w-full bg-opacity-10 border-[3px] border-dashed border-green-500 rounded-lg relative'>
            <div className='w-full h-full flex p-10 gap-4'>
              {!sectionData?.areas?.length ? (
                <p className="text-center text-white text-5xl font-medium m-auto">Add Items Here</p>
              ) : (
                sectionData?.areas?.map((area) => (
                  <Area key={area.id} id={area.id} order={area.order} components={area.componentTypes} sectionId={id} />
                ))
              )}
            
            </div>
            {
              showaddLayoutbtn && <>
                <div className="cursor-pointer w-11 h-[90%] flex items-center bg-green-600 bg-opacity-10 rounded border-[1px] border-dashed border-green-500 absolute left-2 top-1/2 translate-y-[-50%]" onClick={() => addArea(id, 'left')}>
                  <div className="w-full h-6 relative text-green-500 text-center">
                    <span className='text-center'>New</span>
                    <button className='flex justify-center rounded-full text-2xl text-white bg-green-500 w-8 h-8 ml-1' > +</button>
                    Area
                  </div>
                </div>
                <div className="cursor-pointer w-11 h-[90%] flex items-center bg-green-600 bg-opacity-10 rounded border-[1px] border-dashed border-green-500 absolute right-2 top-1/2 translate-y-[-50%]" onClick={() => addArea(id, 'right')}>
                  <div className="w-full h-6 relative text-green-500 text-center">
                    <span className='text-center'>New</span>
                    <button className='flex justify-center rounded-full text-2xl text-white bg-green-500 w-8 h-8 ml-1' > +</button>
                    Area
                  </div>
                </div>
              </>
            }
          </div>
          
          <ToolBar />
        </div>
      </div>
    </DndProvider>
  );
};

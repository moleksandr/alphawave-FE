// Dependencies
import React, {FC} from 'react';
import {useDrop} from 'react-dnd'

// Types
import {AreaProps} from './types';
import {TOOL_TYPE} from '../../ToolBar/types';

// Contexts
import {useProjectContext} from '../../../contexts/ProjectContext';
import {StandardTable} from "../../tools/tables/StandardTable";

// Export component
export const Area: FC<AreaProps> = (props) => {
  const { id, order, sectionId, components } = props;
  
  const { removeArea } = useProjectContext();
  
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: [
      TOOL_TYPE.TEMPLATES,
      TOOL_TYPE.SECTION_ONE,
      TOOL_TYPE.SECTION_TWO_ONE,
      TOOL_TYPE.SECTION_TWO_TWO,
      TOOL_TYPE.SECTION_TWO_THREE,
      TOOL_TYPE.SECTION_THREE,
      TOOL_TYPE.TEXT_BOX,
      TOOL_TYPE.TEXT_SHORT_ANSWER,
      TOOL_TYPE.TEXT_PARAGRAPH,
      TOOL_TYPE.TEXT_MULTIPLE_CHOICE,
      TOOL_TYPE.TEXT_CHECKBOXES,
      TOOL_TYPE.TEXT_DROPDOWN,
      TOOL_TYPE.TEXT_DATE,
      TOOL_TYPE.TABLE_STANDARD,
      TOOL_TYPE.TABLE_STATUS,
      TOOL_TYPE.TABLE_REQUIREMENT,
      TOOL_TYPE.IMAGE_SINGLE,
      TOOL_TYPE.IMAGE_CAROUSEL,
      TOOL_TYPE.VIDEO_STANDARD,
      TOOL_TYPE.VIDEO_YOUTUBE,
      TOOL_TYPE.SMART_TIMELINE,
      TOOL_TYPE.SMART_FILE_UPLOAD,
      TOOL_TYPE.SMART_ACTION,
      TOOL_TYPE.CHART_BAR,
      TOOL_TYPE.CHART_LINE,
      TOOL_TYPE.CHART_SCATTER,
      TOOL_TYPE.CHART_PIE,
      TOOL_TYPE.CHART_DONUT,
      TOOL_TYPE.CHART_BUBBLE,
      TOOL_TYPE.CHART_CRITICAL_PLOT,
      TOOL_TYPE.CHART_BOX_PLOT,
      TOOL_TYPE.CHART_RADAR,
    ],
    drop: () => ({ areaId: id, sectionId }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));
  const isActive = canDrop && isOver;
  let backgroundColor = '#d3f5e1'
  if (isActive) {
    backgroundColor = '#d3f5e1'
  } else if (canDrop) {
    backgroundColor = '#d3f5e180'
  }
  
  const renderComponent = (componentType: TOOL_TYPE) => {
    switch (componentType) {
      case TOOL_TYPE.TABLE_STANDARD:
        return <StandardTable />;
      default:
        return <div className="flex items-center justify-center">{componentType}</div>
    }
  }
  
  return (
    <div ref={drop} className='w-full h-full border-[2px] border-dashed border-green-500 rounded-lg relative' style={{ backgroundColor }}>
      {!components?.length ? (
        <div className='flex h-full items-center justify-center'>
          <h1 className='text-black font-bold text-xl text-center m-auto '>Div{order}</h1>
        </div>
      ) : (
        <div className='flex h-full'>
          {components.map((componentType, index) => (
            <div key={`${sectionId}-${id}-${index}`} className={'flex-1 flex items-center justify-center m-4 rounded-[12px] bg-white p-4'}>{renderComponent(componentType)}</div>
          ))}
        </div>
      )}
      <button className='absolute right-4 top-4 rounded-full text-2xl text-white bg-green-900 w-8 h-8' onClick={() => removeArea(sectionId, id)}>×</button>
    </div>
  )
};

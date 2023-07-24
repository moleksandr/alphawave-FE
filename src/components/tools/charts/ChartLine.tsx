import {FC} from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, LineSeries } from '@syncfusion/ej2-react-charts';
import { ChartLineProps } from './types';
const ChartLine: FC<ChartLineProps> = (props) => {
  const {id} = props
  const data = [{ x: 2005, y: 28, color: 'red' }, { x: 2006, y: 25, color: 'green' },
  { x: 2007, y: 26, color: '#ff0097' }, { x: 2008, y: 27, color: 'crimson' },
  { x: 2009, y: 32, color: 'blue' }, { x: 2010, y: 35, color: 'darkorange' }];
  return (
  <ChartComponent className='h-full w-full mr-4' id={`chart-line-${id}`}>
    <Inject services={[LineSeries, Legend, Tooltip, DataLabel, Category]}/>
    <SeriesCollectionDirective>
      <SeriesDirective dataSource={data} xName='x' yName='y' width={2} name='USA' type='Line'>
      </SeriesDirective>
    </SeriesCollectionDirective>
  </ChartComponent>
  )
}


export default ChartLine

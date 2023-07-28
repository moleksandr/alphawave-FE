import { FC, useEffect, useState } from "react";
import 'react-data-grid/lib/styles.css';
import './index.css'
import DataGrid, { textEditor } from 'react-data-grid'
const columns = [
  { key: 'chrome', name: 'Chrome', renderEditCell: textEditor, color: 'red' },
  { key: 'uc-browser', name: 'UC Browser', renderEditCell: textEditor },
  { key: 'oper', name: 'Opera', renderEditCell: textEditor },
  { key: 'sogou explorer', name: 'Sogou Explorer', renderEditCell: textEditor },
  { key: 'qq', name: 'QQ', renderEditCell: textEditor },
  { key: 'safari', name: 'Safari', renderEditCell: textEditor },
  { key: 'internet-explorer', name: 'Internet Explorer', renderEditCell: textEditor },
  { key: 'edge', name: 'Edge', renderEditCell: textEditor },
];

const rowsData = [
  { id: 0, title: 'Example' },
  { id: 1, title: 'Demo' },
  { id: 2, title: 'Example' },
  { id: 3, title: 'Demo' },
  { id: 4, title: 'Example' },
  { id: 5, title: 'Demo' },
  { id: 6, title: 'Example' },
  { id: 7, title: 'Demo' },
  { id: 8, title: 'Example' },
  { id: 9, title: 'Demo' },
  { id: 10, title: 'Example' },
  { id: 11, title: 'Demo' },
  { id: 12, title: 'Example' },
  { id: 13, title: 'Demo' },
  { id: 14, title: 'Example' },
  { id: 15, title: 'Demo' }
];
export const WidgetEditingTable: FC = () => {
  const [rows, setRows] = useState(rowsData)
  useEffect(() => {
    setRows(rowsData)
  }, [])
  return (
    <div className='rounded-2xl'>
      <DataGrid columns={columns} rows={rows} className="fill-grid"
        defaultColumnOptions={{
          sortable: true,
          resizable: false,
          maxWidth: 175,
          minWidth: 175
        }}

      />
    </div>
  )
}

// function getColumns(
//   countries: readonly string[],
//   direction: Direction
// ): readonly Column<Row, SummaryRow>[] {
//   return [
//     SelectColumn,
//     {
//       key: 'id',
//       name: 'ID',
//       frozen: true,
//       resizable: false,
//       renderSummaryCell() {
//         return <strong>Total</strong>;
//       }
//     },
//     {
//       key: 'title',
//       name: 'Task',
//       frozen: true,
//       renderEditCell: textEditor,
//       renderSummaryCell({ row }) {
//         return `${row.totalCount} records`;
//       }
//     },
//     {
//       key: 'client',
//       name: 'Client',
//       width: 'max-content',
//       renderEditCell: textEditor
//     },
//     {
//       key: 'area',
//       name: 'Area',
//       renderEditCell: textEditor
//     },
//     {
//       key: 'country',
//       name: 'Country',
//       renderEditCell: (p) => (
//         <select
//           autoFocus
//           className={textEditorClassname}
//           value={p.row.country}
//           onChange={(e) => p.onRowChange({ ...p.row, country: e.target.value }, true)}
//         >
//           {countries.map((country) => (
//             <option key={country}>{country}</option>
//           ))}
//         </select>
//       )
//     },
//     {
//       key: 'contact',
//       name: 'Contact',
//       renderEditCell: textEditor
//     },
//     {
//       key: 'assignee',
//       name: 'Assignee',
//       renderEditCell: textEditor
//     },
//     {
//       key: 'progress',
//       name: 'Completion',
//       renderCell(props) {
//         const value = props.row.progress;
//         return (
//           <>
//             <progress max={100} value={value} style={{ inlineSize: 50 }} /> {Math.round(value)}%
//           </>
//         );
//       },
//       renderEditCell({ row, onRowChange, onClose }) {
//         return createPortal(
//           <div
//             dir={direction}
//             className={dialogContainerClassname}
//             onKeyDown={(event) => {
//               if (event.key === 'Escape') {
//                 onClose();
//               }
//             }}
//           >
//             <dialog open>
//               <input
//                 autoFocus
//                 type="range"
//                 min="0"
//                 max="100"
//                 value={row.progress}
//                 onChange={(e) => onRowChange({ ...row, progress: e.target.valueAsNumber })}
//               />
//               <menu>
//                 <button type="button" onClick={() => onClose()}>
//                   Cancel
//                 </button>
//                 <button type="button" onClick={() => onClose(true)}>
//                   Save
//                 </button>
//               </menu>
//             </dialog>
//           </div>,
//           document.body
//         );
//       },
//       editorOptions: {
//         displayCellContent: true
//       }
//     },
//     {
//       key: 'startTimestamp',
//       name: 'Start date',
//       renderCell(props) {
//         return dateFormatter.format(props.row.startTimestamp);
//       }
//     },
//     {
//       key: 'endTimestamp',
//       name: 'Deadline',
//       renderCell(props) {
//         return dateFormatter.format(props.row.endTimestamp);
//       }
//     },
//     {
//       key: 'budget',
//       name: 'Budget',
//       renderCell(props) {
//         return currencyFormatter.format(props.row.budget);
//       }
//     },
//     {
//       key: 'transaction',
//       name: 'Transaction type'
//     },
//     {
//       key: 'account',
//       name: 'Account'
//     },
//     {
//       key: 'version',
//       name: 'Version',
//       renderEditCell: textEditor
//     },
//     {
//       key: 'available',
//       name: 'Available',
//       renderCell({ row, onRowChange, tabIndex }) {
//         return (
//           <SelectCellFormatter
//             value={row.available}
//             onChange={() => {
//               onRowChange({ ...row, available: !row.available });
//             }}
//             tabIndex={tabIndex}
//           />
//         );
//       },
//       renderSummaryCell({ row: { yesCount, totalCount } }) {
//         return `${Math.floor((100 * yesCount) / totalCount)}% ✔️`;
//       }
//     }
//   ];
// }

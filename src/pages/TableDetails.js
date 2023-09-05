import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { Box, Button, Link } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import './TableDetails.css';
// import { ExportToCsv } from 'export-to-csv'; //or use your library of choice here
import axios from 'axios';
import {

  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  MenuItem,
  Stack,
  TextField,
  Tooltip,
} from '@mui/material';
import Icon from '@mui/material/Icon';
import { Delete, Edit, SanitizerTwoTone } from '@mui/icons-material';
import CreateNewAccountModal from '../components/dialog/CreateNewAccountModal ';
import ProgressBar from "@ramonak/react-progress-bar";
import Chip from '@mui/material/Chip';
import CreateNewPreferences from '../components/dialog/CreateNewPreferences';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import SankeyChart from '../components/SankeyChart';
import { isNumber, isString } from '@amcharts/amcharts4/core';
import VerticalStepper from '../components/VerticalStepper';
// import CreateNewPreferences from '../components/dialog/CreateNewPreferences';




const TableDetails = () => {
  const [data,setData] =useState( [
    {
      // id:1,
      name: {
        firstName: 'Johnaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        lastName: 'Doe',
      },
      address: '261 Erdman Ford',
      city: 'East Daphne',
      state: 'Kentucky',
      completed: 100,
      status: 100,
      subRows: [
        {
          name: {
            firstName: 'new ',
            lastName: 'Data',
          },
          address: '3/123 Main St',
          city: 'ssss',
          state: 'tn',
          completed: 90,
          status: 90,
        },
      ],
    },
    {
      // id:2,
      name: {
        firstName: 'Jane',
        lastName: 'Doe',
      },
      address: '769 Dominic Grove',
      city: 'Columbus',
      state: 'Ohio',
      completed: 80,
      status: 80
    },
    {
      // id:3,
      name: {
        firstName: 'Joe',
        lastName: 'Doe',
      },
      address: '566 Brakus Inlet',
      city: 'South Linda',
      state: 'West Virginia',
      completed: 90,
      status: 90
    },
    {
      // id:4,
      name: {
        firstName: 'Kevin',
        lastName: 'Vandy',
      },
      address: '722 Emie Stream',
      city: 'Lincoln',
      state: 'Nebraska',
      completed: 34,
      status: 34
    },
    {
      // id:5,
      name: {
        firstName: 'Joshua',
        lastName: 'Rolluffs',
      },
      address: '32188 Larkin Turnpike',
      city: 'Charleston',
      state: 'South Carolina',
      completed: 55,
      status: 55
    },
  ]
  )
  
  const [isInitial, setIsInitial] = useState(false);
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const [tableData, setTableData] = useState(() => data);
  const [validationErrors, setValidationErrors] = useState({});
  const [columnFilters,setColumnFilters]=useState(false)

  useEffect(() => { 
    setData();
  }, [tableData])

  // const [editing,setEditing]=useState(false);
  console.log("actionhide..",createModalOpen)
  const columns = useMemo(
    () =>{
      const baseColumns = [
      {
        accessorKey: 'name.firstName', //access nested data with dot notation
        header: 'First Name',
        size: 210,
        className: 'table-cell-truncate',
        muiTableHeadCellProps: {
          align: 'center',
        },
        Cell: ({ renderedCellValue, row }) => {
          return (
            <Tooltip title={renderedCellValue}>{renderedCellValue}</Tooltip>

          )
        }

      },
      {
        accessorKey: 'name.lastName',
        header: 'Last Name',
        size: 200,
        muiTableHeadCellProps: {
          align: 'center',
        },
      },
      {
        accessorKey: 'address', //normal accessorKey
        header: 'Address',
        size: 210,
        muiTableHeadCellProps: {
          align: 'center',
        },
      },
      {
        accessorKey: 'city',
        header: 'City',
        size: 150,
        muiTableHeadCellProps: {
          align: 'center',
        },
      },
      {
        accessorKey: 'state',
        header: 'State',
        size: 150,
        muiTableHeadCellProps: {
          align: 'center',
        },
      },
      {
        accessorKey: 'completed',
        header: 'Completed',
        size: 200,
        muiTableBodyCellProps: {
          align: 'center',
        },
        muiTableHeadCellProps: {
          align: 'center',
        },
        
        Cell: ({ renderedCellValue, row }) => {

          if (Number(renderedCellValue) < 35) {
            return (
              <ProgressBar completed={Number(renderedCellValue)} width="80px" maxCompleted={100} bgColor="#D32F2F" labelSize='10px' labelAlignment='center' className='progressBar'/>
            )
          }
          else if (Number(renderedCellValue) < 60) {
            return (
              <ProgressBar completed={Number(renderedCellValue)} width="80px" maxCompleted={100} bgColor="#f77500" labelSize='10px' labelAlignment='center' className='progressBar'/>
            )
          }
          else if (Number(renderedCellValue) < 99) {
            return (
              <ProgressBar completed={Number(renderedCellValue)} width="80px" maxCompleted={100} bgColor=" #8ee100" labelSize='10px' labelAlignment='center' className='progressBar'/>
            )
          }
          else {
            return (
              <ProgressBar completed={Number(renderedCellValue)} width="80px" maxCompleted={100} bgColor="green" labelSize='10px' labelAlignment='center' className='progressBar'/>
            )
          }
        }
      },
      {
        accessorKey: 'status',
        header: 'Status',
        size: 200,
        muiTableHeadCellProps: {
          align: 'center',
        },
        muiTableBodyCellProps: {
          align: 'center',
        },
        Cell: ({ renderedCellValue, row }) => {
          // console.log('renderedCellValue',renderedCellValue)
          if (Number(renderedCellValue) === 100) {
            return (
              <Chip label="success" color="success" sx={{
                height: '20px',
                width: '80px',
                fontSize: '0.875rem',
                fontWeight: '400'
              }} />
            )
          }
          else {
            return (
              <Chip label="ongoing" color="primary" sx={{
                height: '20px',
                width: '80px',
                fontSize: '0.875rem',
                fontWeight: '400'
              }} />
            )
          }
        }
      },
      {
        accessorKey: 'actions',
        header: 'Actions',
        enableColumnActions: false,
        enableColumnFilter:false,
        muiTableHeadCellProps: {
          align: 'center',
        },
        muiTableBodyCellProps: {
          align: 'center',
        },
        enableGrouping:false,
        
        Cell:({ row, table }) => {
          
          
          // if (editing) {
          //   return row._valuesCache.actions=null; // Hide the actions when the row is in editing mode
          // }
          return(
        // const filteredFields = row.filter((field) => field.original !== 'status');
        <Box sx={{ display: 'flex', gap: '0.2rem' }} >
          <Tooltip arrow placement="left" title="Edit">
            <IconButton onClick={
              (event) => {
              // const filteredFields = row.filter((field) => field.original !== 'status');
              // if(!row._valuesCache.actions){
                // setEditing(true);
                handleEditClick(row.original,row.index);
               // table.setEditingRow(row)
                // setEditing(false);
                
    console.log("eventt:", row.original);
    
              // showDatas(row);
              
            }}>
              <Edit />
            </IconButton>
          </Tooltip>
          <Tooltip arrow placement="right" title="Delete">
            <IconButton color="error" onClick={() => handleDeleteRow(row)}>
              <Delete />
            </IconButton>

          </Tooltip>

        </Box>
          )
          },
      width: 150,
      
    },
       ]
    
    
    return baseColumns;
  },
    [createModalOpen],
  );
  const csvOptions = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalSeparator: '.',
    showLabels: true,
    useBom: true,
    useKeysAsHeaders: false,
    headers: columns.map((c) => c.header),
  };
  //   const csvExporter = new ExportToCsv(csvOptions);

  //   const handleExportRows = (rows) => {
  //     csvExporter.generateCsv(rows.map((row) => row.original));
  //   };

  //   const handleExportData = () => {
  //     csvExporter.generateCsv(data);
  //   };

  const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {
    let value = {
      name: {
        firstName: values['name.firstName'],
        lastName: values['name.lastName'],
      }, address: values.address,
      city: values.city,
      state: values.state,
      completed: Number(values.completed),
      status: Number(values.status),
    }
    // if (!Object.keys(validationErrors).length) {
    //   tableData[row.index] = value;


    //   //send/receive api updates here, then refetch or update local table data for re-render
    //   setTableData([...tableData]);
    //   exitEditingMode(); //required to exit editing mode and close modal
    // }
  };

  const handleCancelRowEdits = () => {
    setValidationErrors({});
  };
  
  const handleDeleteRow = useCallback(
    (row) => {
      // if (
      //  (`Are you sure you want to delete ${row.getValue('firstName')}`)
      // ) {
      //   return;
      // }
      //send api delete request here, then refetch or update local table data for re-render
      tableData.splice(row.index, 1);
      setTableData([...tableData]);
    },
    [tableData],
  );
  const handleCreateNewRow = (values) => {
    tableData.push(values);
    setTableData([...tableData]);
  };
  const [inputData, setInputData] = useState([]);
  

  const fetchData = async () => {
    try {
      const response = (await axios.get('http://localhost:4000/api/get/group'));

      // console.log("response...", response.data.map(item => item.datas).flat());
      let value = response.data.map(item => item.datas).flat()
      // setInputData(value)
      setInputData(value)
      // console.log('ressss',response.data[0].datas)
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const [filter,setFilter]=useState([]);

  useEffect(() => { 
    if(filter.length>0){
      console.log('trueee')
      setColumnFilters(true)
    }
    
    
  }, [filter])

  console.log("inputt...", filter)
  const fetchFilter = async () => {
    try {
      const response = (await axios.get('http://localhost:4000/api/get/filter'));
  
      // console.log("response.....", response.data);
      let value =  response.data.map(item => item.filters).flat()
      // if(value.length !==[]){
        setFilterValues(value)
       
      // }
      // console.log('ressss',value)
    } catch (error) {
      console.error('Error:', error);
    }
  };
  // let val=inputData.map(value=>value.firstName || value.lastName)
  // console.log('inputdataaaa',val)

  // const handleCreatePreferences = (values) => {

  //   if(values==='First Name'){
  //     axios.post(`http://localhost:4000/api/content/details/group`,{'firstName':'name.firstName'})
  //     // setInputData([])
  //     // setInputData(prevData => [...prevData, 'name.firstName']) 
  //   }
  //   else if(values==='Last Name'){
  //     axios.post(`http://localhost:4000/api/content/details/group`,{'lastName':'name.lastName'})
  //     // setInputData([])
  //     // setInputData(prevData => [...prevData, 'name.lastName']) 
  //   }


  // }
 
  
  const [groupedColumns, setGroupedColumns] = useState([]);
  console.log("grouped===", groupedColumns)

  ////////////////////////////useEffect

  useEffect(() => {
    if (isInitial) {
      if(groupedColumns&&groupedColumns.length>=0){
        axios.post('http://localhost:4000/api/content/details/group', { 'datas': groupedColumns })
        .then((response)=>{setInputData(response?.data[0]?.datas)})
        // fetchData();
      }
      // else{
      //   axios.post('http://localhost:4000/api/content/details/group', { 'datas':[] })
      //   .then((response)=>{setInputData(response?.data[0]?.datas)})
        
      // }
    } else {
      setIsInitial(true);
    }    

  }, [groupedColumns])
 
  // useEffect(() => { 
  //   fetchData();
  // }, [])
  // useEffect(() => {
  //   if (isPosted) {
  //     axios.post('http://localhost:4000/api/content/details/group', { 'datas': [...new Set(inputData.concat(groupedColumns))] })
  //   console.log('=-=-', [...new Set(inputData.concat(groupedColumns))]);
  //   setIsPosted(true)
  //   }
    
  // }, [isPosted])

  const handleGroupingChange = (eventData) => {

    setGroupedColumns(eventData);
    
  };
  const [filterValues,setFilterValues]=useState([]);

const [isInitialFilter,setIsInitialFilter]=useState(false);
console.log("values...++",filter)

////////////////////////////useEffect
useEffect(() => {
  console.log("useEffect");
  if (isInitialFilter) {
    // console.log("initial filter",filterValues)
    if(filterValues&& filterValues.length>=0){
    
       axios.post('http://localhost:4000/api/content/details/filter', { 'filters': filterValues })
      .then((response)=>{
        setFilter(response?.data[0]?.filters)
      })
    
    }
      //   else{   
      //   axios.post('http://localhost:4000/api/content/details/filter', { 'filters': [] })
      // .then((response)=>{
      //   setFilter(response.data[0].filters)
      // })
      //   }
  } else {
    setIsInitialFilter(true);
  }  
}, [filterValues])


const handleFilterChange=(values)=>{
  setFilterValues(values)
}
useEffect(() => { 
  fetchFilter();
  fetchData();
  
}, [])
  // useEffect(() => {

  // }, [groupedColumns]);
  const resetGrouping= async () =>{
    await axios.delete(`http://localhost:4000/api/content/details/delete`)
    fetchData();
    setGroupedColumns([])
    setInputData([])
    setEditedValue('')
    setEditingRowId('')
  }

  const [isDialogOpen, setDialogOpen] = useState(false);
  const [editedValue, setEditedValue] = useState('');
  const [editingRowId, setEditingRowId] = useState('');
// console.log('editedvalllll',editingRowId) 
  const handleEditClick = (data,index) => {
    setDialogOpen(true);
    setEditedValue(data);
    // console.log('editedvalllll',data) 
    setEditingRowId(index)
    // You can also pre-fill the editedValue here with the current value from the row
  };

//   const handleCloseDialog = () => {
//     setDialogOpen(false);
//     setEditedValue('');
//     setEditingRowId('');
//     setEditing(false);

//   };

//   const handleSaveEdit = () => {
//     // console.log(`Save edited value ${editedValue} for row with ID: ${editingRowId}`);
//     // Implement your save logic here
//     setTableData( tableData.map((item, currentIndex) =>currentIndex === editingRowId ? editedValue : item))
//     //  console.log('resdatas',data.map((item, currentIndex) =>currentIndex === editingRowId ? editedValue : item))
//     handleCloseDialog();
//     setEditing(false)
//     setEditingRowId('');

//   };
//   const handleInputChange = ( value) => {
//     // console.log('fielddd',field.name.firstName)
//     console.log('valueee....',value)
//     console.log('editedvalue',editedValue)
//     setEditedValue(value);
//   };

const handleColumnFilterChange =(event)=>{
  setColumnFilters(event)
}
// let ques='a1b2c13';
// const num=[];
// const str=[];
// let prevNum=false;
// let result="";
// for(let i=0; i<ques.length; i++){
//   if((ques[i]==='1'||ques[i]==='2'||ques[i]==='3'||ques[i]==='4'||ques[i]==='5'||ques[i]==='6'||ques[i]==='7'||ques[i]==='8'||ques[i]==='9'||ques[i]==='0')&&prevNum){
//     num[num.length-1]=num[num.length-1]+ques[i];
//     prevNum=true
//   }
//   else if(ques[i]==='1'||ques[i]==='2'||ques[i]==='3'||ques[i]==='4'||ques[i]==='5'||ques[i]==='6'||ques[i]==='7'||ques[i]==='8'||ques[i]==='9'||ques[i]==='0'){
//     num.push(Number(ques[i]))
//     prevNum=true
//   }
//   else{
//     str.push(ques[i])
//     prevNum=false
//   }
// }
// for(let i=0;i<num.length;i++){
//   for(let j=0;j<num[i];j++){
//     result+=str[i]
//   }
// }
// console.log("respro", result)

  return (
    <>
      <MaterialReactTable
        columns={columns}
        data={tableData}
        editingMode="modal" //default
        // enableColumnOrdering
        enablePinning

        // enableExpanding
        // enableExpandAll={false}
        enableGrouping
        onGroupingChange={handleGroupingChange}
        // groupedColumnMode={inputData}

        enableRowSelection={false}
        muiTableProps={{//fixed columns
          sx: {
            tableLayout: 'fixed',
          },
        }}
        // muiToolbarAlertBannerChipProps={{ color: 'primary' }}
        muiTableContainerProps={{ sx: { maxHeight: 700 } }}
        onEditingRowSave={handleSaveRowEdits}
        onEditingRowCancel={handleCancelRowEdits}
        // enableRowActions
        // renderRowActions={({ row, table }) => (
        //   // const filteredFields = row.filter((field) => field.original !== 'status');
        //   <Box sx={{ display: 'flex', gap: '0.2rem' }} >
        //     <Tooltip arrow placement="left" title="Edit">
        //       <IconButton onClick={() => {
        //         // const filteredFields = row.filter((field) => field.original !== 'status');
        //         table.setEditingRow(row)

        //         showDatas(row);
        //       }}>
        //         <Edit />
        //       </IconButton>
        //     </Tooltip>
        //     <Tooltip arrow placement="right" title="Delete">
        //       <IconButton color="error" onClick={() => handleDeleteRow(row)}>
        //         <Delete />
        //       </IconButton>

        //     </Tooltip>

        //   </Box>

        // )}

        onColumnFiltersChange={handleFilterChange}
        onShowColumnFiltersChange={handleColumnFilterChange }
        initialState={{
          density: 'compact',
          expanded: false, //expand all groups by default
          // grouping: inputData,
          //an array of columns to group by by default (can be multiple)
          // pagination: { pageIndex: 0, pageSize: 20 },
          // sorting: [{ id: 'state', desc: false }], //sort by state by default
          
          columnPinning: { left: ['name.firstName'], right: ['actions'], }
        }}
        state={{grouping:inputData,
          showColumnFilters: columnFilters,
          columnFilters:filter,
        }}

        positionActionsColumn="last"
        renderTopToolbarCustomActions={() => (

          
          <div style={{width:"100%", display:"flex", justifyContent:"end" ,marginTop:'auto',marginBottom:'auto'}}>
            {/* <Button
              color="success"
              style={{color:"#fff"}}
              onClick={() => setCreateModalOpen(true)}
              variant="contained"
            >
              Create New Account
            </Button> */}
            <Tooltip title="Create New Account" arrow>
            <AddCircleIcon
             color="success"
             style={{marginRight:"10px"}}
             onClick={() => setCreateModalOpen(true)}
             
            />
            </Tooltip>
            <Tooltip title="Reset Grouping" arrow>
            <RestartAltIcon
            color="#fff"
            style={{marginRight:"2px"}}
            onClick={resetGrouping}
            />
            </Tooltip>
            {/* <Button
              // color="red"
              style={{color:"#fff", backgroundColor:"#D32F2F"}}
              onClick={resetGrouping}
              variant="contained"
            >
              Reset Grouping
            </Button> */}
            
            {/* <span>List of tables <Link style={{ cursor: "pointer" }} onClick={() => setPreferencesOpen(true)}>Preferences</Link></span> */}
          </div>
        )}
      />
      <CreateNewAccountModal
        columns={columns}
        open={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
        onSubmit={handleCreateNewRow}
      />
      {/* edit */}
      <CreateNewPreferences
        open={isDialogOpen}
        setDialogOpen={setDialogOpen}
        // handleCloseDialog={() => handleCloseDialog()}
        // setEditedValue={(value)=>handleInputChange(value)}
        value={editedValue}
        // handleSaveEdit={handleSaveEdit}
        id={editingRowId}
        // onSubmit={handleCreatePreferences}
        


        setTableData={setTableData}
        // handleEditClick={handleEditClick(data,index)}
        tableData={tableData}
      />

      <SankeyChart/>
      <VerticalStepper/>
    </>

  )
}

export default TableDetails

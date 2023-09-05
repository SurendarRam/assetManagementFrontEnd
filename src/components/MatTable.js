import React, { useEffect } from 'react'
import { useState } from 'react';
import MaterialTable from 'material-table';
import './MatTable.css';
import Data from '../JSON-data/Data';
import axios from 'axios';
import { useCallback } from 'react';



import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DialogEdit from './dialog/DialogEdit';
import DialogAdd from './dialog/DialogAdd';
import { id } from 'date-fns/locale';
import DialogView from './dialog/DialogView';
import DialogDelete from './dialog/DialogDelete';
import { color, style } from '@mui/system';
import { Button } from '@material-ui/core';


const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

const MatTable = () => {

    
    const columns = [
        { title: 'Name', field: 'name' ,align: 'center' },
        { title: 'Type', field: 'type',align: 'center' },
        { title: 'Issue Date', field: 'issueDate' },
      ];

     
     

const [sourceData, setSourceData] = useState([]);

      //DialogEdit.........................................

      const [openEdit, setOpenEdit] = React.useState(false);
     const [listData, setListData] = useState("");
    //   const [objId, setObjId] = useState(0);
      const handleEditClickOpen = (rowData) => {
        
        setOpenEdit(true);
        setListData(rowData);
        console.log("rowdata::::",rowData)

        // setObjId(id);
        // console.log(rowData);
      };
      
    
      const handleEditClose = () => {
        setOpenEdit(false);
      };

      //DialogAdd..........................................
      const [openAdd, setOpenAdd] = React.useState(false);


      const handleAddClickOpen = (event,rowData) => {
        setOpenAdd(true);
      };
    
      const handleAddClose = () => {
        setOpenAdd(false);
      };

      //DialogVisible..........................................
      const [openVisible, setOpenVisible] = React.useState(false);
      const [dataVisible, setDataVisible] = useState('');


      const handleVisibleClickOpen = (rowData) => {
        setOpenVisible(true);
        setDataVisible(rowData);
      };
    
      const handleVisibleClose = () => {
        setOpenVisible(false);
      };

      //DialogDelete........................................

      const [openDelete, setOpenDelete] = React.useState(false);
      const [dataDelete, setDataDelete] = useState('');


      const handleDeleteClickOpen = (rowData) => {
        setOpenDelete(true);
        setDataDelete(rowData);
      };
    
      const handleDeleteClose = () => {
        setOpenDelete(false);
      };
      console.log("data..................",sourceData)
      
      // const fetchHandler = useCallback(async () => {
      //       try {
      //   //       const response = await fetch('http://localhost:4000/api/get');
      //         if (!response.ok) {
      //           throw new Error('error');
      //         }
      //         const materialTableDatas = await response.data;
      //         // console.log(materialDatas);
      //   //       const materialTableData = materialTableDatas.Data;
      //         // const userRequiredData = [];
      //   //       const userRequiredData = [];
      //   //       materialTableData.filter((data) => {
      //   //         // const userRequiredData = [];
      //   //         if (data.userObjectId === window.sessionStorage.getItem('userObjectId')) {
      //   //           console.log(data);
      //   //           userRequiredData.push(data);
      //   //         }
      //   //         // userRequiredData.push(materialData);
      //   //         return console.log(userRequiredData);
      //   //       });
      //         console.log(materialTableDatas);
      //         setSourceData(materialTableDatas);
      //         
        
      //       } catch (err) {
      //         console.log(err);
      //       }
      //     }, []);
        
      //     useEffect(() => {
      //       fetchHandler();
      //     }, [fetchHandler]);
      const [temp, setTemp] = useState([]);
      useEffect(()=>{
        // var item_value = sessionStorage.getItem("item_key");
        // if (item_value){
        //     setSourceData(JSON.parse(item_value));
        // } else {
        //     setSourceData([])
        // }
        fetchData();
    },[temp])
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/get');
        setSourceData(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    

  return (
    <div  className='tableDiv'>
        <MaterialTable
         icons={tableIcons}
      
      columns={columns}
      data={sourceData}
      options={
        { showTitle: false,search: false,actionsColumnIndex:-1,headerStyle: {
            backgroundColor: '#01579b',
            color: '#FFF'
          },
          
        }
      }
      actions={[
        {
            icon: VisibilityIcon ,
            iconProps:{style:{color: 'white'}},
            tooltip: 'View User',
            onClick: (event, rowData) => {handleVisibleClickOpen(rowData)},
          },
        {
          icon: Edit,
          tooltip: 'Edit User',
          onClick: (event,rowData)=>{handleEditClickOpen(rowData)}
        },
        rowData => ({
          icon: DeleteOutline,
          iconProps: {  color: "green" },
          tooltip: 'Delete User',
          onClick: (event, rowData) =>{handleDeleteClickOpen(rowData)}
          
        }),
        {
            icon: AddBox,
            tooltip: 'Add User',
            isFreeAction: true,
            onClick: (event,rowData) => {handleAddClickOpen(event,rowData);
            }
          }
      ]}
    />
    <div className='detailsDiv'>
      <Button className='detailsBtn' style={{backgroundColor:"#01579b",color:"white"}} href='/content/details'>Details</Button>
    </div>

<DialogEdit open={openEdit} handleClose={handleEditClose} objId={id} setData={setTemp} listData={listData}/>
<DialogAdd open={openAdd} handleClose={handleAddClose } setData={setTemp}/>
<DialogView open={openVisible} handleClose={handleVisibleClose } setData={setSourceData} dataVisible={dataVisible}/>
<DialogDelete open={openDelete} handleClose={handleDeleteClose} setData={setTemp} dataDelete={dataDelete}/>
    </div>
    
  );
};
export default MatTable;

import { useEffect, useState } from "react";
import axios from '../api/axios'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import NavBar from "../reusable/navbar";

const Employees = () => {

    const empColumns = [
        { field: 'id', headerName: 'ID', width: 50 },
        {
          field: 'first_name',
          headerName: 'First name',
          width: 200,
          editable: true,
        },
        {
          field: 'last_name',
          headerName: 'Last name',
          width: 200,
          editable: true,
        },
        {
          field: 'fullName',
          headerName: 'Full name',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 250,
          valueGetter: (params) =>
            `${params.row.first_name || ''} ${params.row.last_name || ''}`,
        },
      ];
      
    const [emp, setEmp] = useState([])

    const getEmployees = async () => {
        const res = await axios.get('/employee')
        setEmp(res.data.emp)
    }

    console.log(emp)

    useEffect(() => {
        getEmployees()
    }, [])

    emp.map((par, index) => {
        par["id"] = index + 1;
      });

    return ( 
      <>
      <NavBar/>
        <div className="text-white h-[calc(100vh-80px)] flex justify-center items-center flex-col mt-10">
            <p className="py-4 text-2xl">Employees</p>
            <Box sx={{ height: "70vh", width: "50%", color:"white" }}>
            <DataGrid 
            sx={{color:"white"}}
              rows={emp}
              columns={empColumns}
              pageSize={7}
              rowsPerPageOptions={[5]}
              // checkboxSelection
              disableSelectionOnClick  
              // getRowId={(row) => row._id}
            />
          </Box>
        </div> 
        </>
    );
}
 
export default Employees;
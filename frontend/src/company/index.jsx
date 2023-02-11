import { useState, useEffect } from "react";
import NavBar from "../reusable/navbar";
import axios from "../api/axios";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';


const Company = () => {

    const compColumns = [
        { field: 'id', headerName: 'ID', width: 25 },
        {
          field: 'name',
          headerName: 'Name',
          width: 200,
          editable: true,
        },
        {
          field: 'email',
          headerName: 'Email',
          width: 200,
          editable: true,
        },
        {
          field: 'website',
          headerName: 'Website',
          sortable: false,
          width: 200,
        },
    ]
        
    const [company, setCompany] = useState([])

    const getCompany = async () => {
        const res = await axios.get('/company')
        setCompany(res.data.company)
    }
    console.log(company, "hhhhhhhhhhhhhhhh")
    useEffect(() => {
        getCompany()
    }, [])

    company.map((com, ind) => {
        com["id"] = ind + 1
    })

    return ( 
        <>
        <NavBar/>
        <div className="text-white mt-10 h-[calc(100vh-80px)] flex flex-col justify-center items-center">
        <p className="py-4 text-2xl">Companies</p>
        <Box sx={{ height: "70vh", width: "50%", color:"white" }}>
            <DataGrid 
            sx={{color:"white"}}
              rows={company}
              columns={compColumns}
              pageSize={7}
              rowsPerPageOptions={[5]}
              checkboxSelection
              disableSelectionOnClick  
              getRowId={(row) => row._id}
            />
          </Box>
        </div>
        </>
     );
}
 
export default Company;
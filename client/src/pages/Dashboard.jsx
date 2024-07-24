// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Plotly from 'plotly.js-dist';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'intensity', headerName: 'Intensity', type: 'number', width: 70 },
    { field: 'sector', headerName: 'Sector', width: 130 },
    { field: 'topic', headerName: 'Topic', width: 90},
    { field: 'insight',
        headerName: 'Insight',
        description: 'This column has a value getter and is not sortable.',
        width: 160,
    },
    {
        field: 'url',
        headerName: 'Url',
        description: 'This column has a value getter and is not sortable.',
        width: 160,
    },
    {
        field: 'region',
        headerName: 'Region',
        description: 'This column has a value getter and is not sortable.',
        width: 160,
    },
    {
        field: 'title',
        headerName: 'Title',
        width: 160,
    },
    {
        field: 'country',
        headerName: 'Country',
        width: 160,
    },
    {
        field: 'pestle',
        headerName: 'Pestle',
        width: 160,
    },
    {
        field: 'source',
        headerName: 'Source',
        width: 160,
    },
    {
        field: 'added',
        headerName: 'Added',
        width: 160,
    },
    {
        field: 'published',
        headerName: 'Published',
        width: 160,
    },
];

const Dashboard = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/data');
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data', error);
        }
    };

    return (
        <div className="h-full w-[80vw] bg-slate-100 dark:bg-slate-900 ml-[20vw] mt-[10vh] p-10 overflow-y-scroll">
            <h1 className="text-2xl font-bold mb-4 dark:text-white">Dashboard</h1>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={data}
                    columns={columns}
                    getRowId={(data) => data._id}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                    className={`bg-white`}
                />
            </div>
        </div>
    );
};

export default Dashboard;

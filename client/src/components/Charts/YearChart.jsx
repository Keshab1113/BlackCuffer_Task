import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import axios from 'axios';

const YearChart = ({data}) => {

    return (
        <div className="">
            <Plot
                data={[
                    {
                        x: data.map(item => item.end_year),
                        y: data.map(item => item.start_year), // Adjust property name based on your data structure
                        type: 'bar',
                        marker: { color: 'purple' },
                        name: 'Year',
                    },
                ]}
                layout={{ width: 400, height: '400px', title: 'Year Chart' }}
            />
        </div>
    );
};

export default YearChart;

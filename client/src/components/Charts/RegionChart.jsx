import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import axios from 'axios';

const RegionChart = ({data}) => {
    

    return (
        <div className="">
            <Plot
                data={[
                    {
                        x: data.map(item => item.topic),
                        y: data.map(item => item.region),
                        type: 'bar',
                        marker: { color: 'yellow' },
                        name: 'Region',
                    },
                ]}
                layout={{ width: '100%', height: '400px', title: 'Region VS Topic' }}
            />
        </div>
    );
};

export default RegionChart;

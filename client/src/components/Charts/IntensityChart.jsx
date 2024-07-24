import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import axios from 'axios';

const IntensityChart = ({ data }) => {

    return (
        <div className="">
            <Plot
                data={[
                    {
                        x: data.map(item => item.relevance),
                        y: data.map(item => item.intensity),
                        type: 'scatter',
                        mode: 'markers',
                        marker: { color: 'blue' },
                        name: 'Intensity',
                    },
                ]}
                layout={{ width: 400, height: '400px', title: 'Intensity VS Relevance' }}
            />
        </div>
    );
};

export default IntensityChart;

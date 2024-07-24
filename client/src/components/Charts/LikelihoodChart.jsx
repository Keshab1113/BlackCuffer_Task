import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import axios from 'axios';

const LikelihoodChart = ({ data }) => {

    return (
        <div className="">
            <Plot
                data={[
                    {
                        x: data.map(item => item.topic),
                        y: data.map(item => item.likelihood),
                        type: 'scatter',
                        mode: 'markers',
                        marker: { color: 'green' },
                        name: 'Likelihood',
                    },
                ]}
                layout={{ width: 600, height: '400px', title: 'Likelihood VS Topic' }}
            />
        </div>
    );
};

export default LikelihoodChart;

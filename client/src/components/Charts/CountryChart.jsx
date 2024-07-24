import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import axios from 'axios';

const CountryChart = ({data}) => {

    return (
        <div className="">
            <Plot
                data={[
                    {
                        type: 'pie',
                        labels: data.map(item => item.country),
                        values: data.map(item => item.likelihood),
                        marker: { colorscale: 'Viridis' },
                    },
                ]}
                layout={{ width: 600, height: '400px', title: 'Country VS Intensity' }}
            />
        </div>
    );
};

export default CountryChart;

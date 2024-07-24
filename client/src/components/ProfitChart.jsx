import React from 'react';
import Plot from 'react-plotly.js';

const ProfitChart = () => {
    // Sample data for demo
    const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const profits = [200, 300, 400, 350, 500]; // Replace with your actual profit data

    // Data for the bar chart
    const data = [{
        x: weekDays,
        y: profits,
        type: 'bar',
        marker: { color: 'blue' }
    }];

    // Layout for the chart
    const layout = {
        title: 'Profit This Week',
        xaxis: { title: 'Week Days' },
        yaxis: { title: 'Profit ($)' },
        height: 400,    // Set height to 400 pixels
        width: 220,
        margin: { t: 50, b: 50, l: 50, r: 50 },  // Adjust margins as needed
        paper_bgcolor: 'white',  // Background color of the chart area
        plot_bgcolor: 'white'   // Background color of the plot area
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <Plot
                data={data}
                layout={layout}
            />
        </div>
    );
};

export default ProfitChart;

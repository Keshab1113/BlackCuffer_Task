import React from 'react';
import Plot from 'react-plotly.js';

const VisitorsAnalytics = () => {
    // Sample data for demo
    const categories = ['Organic Search', 'Direct', 'Referral', 'Social Media'];
    const visitorsCount = [350, 200, 150, 100]; // Replace with your actual visitor data

    // Data for the pie chart
    const data = [{
        labels: categories,
        values: visitorsCount,
        type: 'pie',
        marker: {
            colors: ['#2ca02c', '#1f77b4', '#ff7f0e', '#d62728']  // Custom colors for each category
        }
    }];

    // Layout for the chart
    const layout = {
        title: 'Visitors Analytics',
        height: 400,    // Set height to 400 pixels
        width: 400,  // Set the height here
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

export default VisitorsAnalytics;

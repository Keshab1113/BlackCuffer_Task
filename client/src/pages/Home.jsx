import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import axios from 'axios';
import { IoEyeOutline } from "react-icons/io5";
import { FaArrowUp } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import { HiOutlineUsers } from "react-icons/hi2";
import ProfitChart from "../components/ProfitChart"
import VisitorsAnalystics from "../components/VisitorsAnalytics"

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3000/api/data')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center text-2xl p-4">Loading...</div>;
  }

  const topics = data.map(d => d.topic);
  const intensities = data.map(d => d.intensity);
  const likelihoods = data.map(d => d.likelihood);
  const sectors = data.map(d => d.sector);
  

  return (
    <div className="h-full w-[80vw] bg-slate-100 dark:bg-slate-900 ml-[20vw] mt-[10vh] px-10 overflow-y-scroll overflow-x-hidden">
      <div className=' h-[40vh] w-full grid grid-cols-4 gap-4 justify-center items-center'>
        <div className=' bg-white h-[30vh] shadow-md p-6 flex flex-col justify-center gap-4'>
            <IoEyeOutline size={42} className=' text-4xl rounded-full bg-slate-100 p-2 text-blue-800'/>
          <div>
            <h1 className=' text-2xl font-bold'>$3.456K</h1>
            <h1 className=' flex justify-between font-semibold text-slate-600'>Total views<span className=' flex text-green-500 justify-center items-center'>0.43%<FaArrowUp /></span></h1>
          </div>
        </div>
        <div className=' bg-white h-[30vh] shadow-md p-6 flex flex-col justify-center gap-4'>
          <CiShoppingCart size={42} className=' text-4xl rounded-full bg-slate-100 p-2 text-blue-800'/>
          <div>
            <h1 className=' text-2xl font-bold'>$45,2K</h1>
            <h1 className=' flex justify-between font-semibold text-slate-600'>Total Profit<span className=' flex text-green-500 justify-center items-center'>4.35%<FaArrowUp /></span></h1>
          </div>
        </div>
        <div className=' bg-white h-[30vh] shadow-md p-6 flex flex-col justify-center gap-4'>
          <FiShoppingBag size={42} className=' text-4xl rounded-full bg-slate-100 p-2 text-blue-800'/>
          <div>
            <h1 className=' text-2xl font-bold'>2.450K</h1>
            <h1 className=' flex justify-between font-semibold text-slate-600'>Total Product<span className=' flex text-green-500 justify-center items-center'>2.59%<FaArrowUp /></span></h1>
          </div>
        </div>
        <div className=' bg-white h-[30vh] shadow-md p-6 flex flex-col justify-center gap-4'>
          <HiOutlineUsers size={42} className=' text-4xl rounded-full bg-slate-100 p-2 text-blue-800'/>
          <div>
            <h1 className=' text-2xl font-bold'>3.456K</h1>
            <h1 className=' flex justify-between font-semibold text-slate-600'>Total Users<span className=' flex text-green-500 justify-center items-center'>0.93%<FaArrowUp /></span></h1>
          </div>
        </div>
        
      </div>
      <div className="flex flex-col gap-4 justify-center items-start mb-20">
        <div className=' w-full h-max flex gap-4'>
        <div className="bg-white p-4 rounded-lg shadow-md w-max h-max">
          <Plot
            data={[
              {
                x: topics,
                y: intensities,
                type: 'bar',
                marker: { color: 'blue' }
              }
            ]}
            layout={{ title: 'Intensity by Topic', xaxis: { title: 'Topic' }, yaxis: { title: 'Intensity' } }}
          />
          </div>
          <ProfitChart />
        </div>
        <div className=' w-full h-max flex gap-4'>
          <VisitorsAnalystics />
        <div className="bg-white p-4 rounded-lg shadow-md">
          <Plot
            data={[
              {
                x: topics,
                y: likelihoods,
                type: 'line',
                marker: { color: 'orange' }
              }
            ]}
            layout={{ title: 'Likelihood by Topic', xaxis: { title: 'Topic' }, yaxis: { title: 'Likelihood' }, width:520 }}
          />
          </div>
        </div>
        <div className=' w-full h-max flex gap-4'>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <Plot
            data={[
              {
                labels: sectors,
                values: intensities,
                type: 'pie'
              }
            ]}
            layout={{ title: 'Intensity by Sector', width:500 }}
          />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <Plot
            data={[
              {
                x: intensities,
                y: likelihoods,
                mode: 'markers',
                marker: { size: 12 }
              }
            ]}
              layout={{ title: 'Scatter Plot of Intensity vs Likelihood', xaxis: { title: 'Intensity' }, yaxis: { title: 'Likelihood' },width: 420 }}
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import IntensityChart from '../components/Charts/IntensityChart';
import LikelihoodChart from '../components/Charts/LikelihoodChart';
import YearChart from '../components/Charts/YearChart';
import CountryChart from '../components/Charts/CountryChart';
import RegionChart from '../components/Charts/RegionChart';

const Charts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);


  return (
    <div className="h-full w-[80vw] bg-slate-100 dark:bg-slate-900 ml-[20vw] mt-[10vh] px-10 overflow-y-scroll overflow-x-hidden flex flex-col gap-4 pb-20">
      <div className=' flex flex-row mt-4 gap-4'>
      <IntensityChart data={data} />
        <LikelihoodChart data={data} />
      </div>
      <div className=' flex flex-row gap-4'>
      <CountryChart data={data} />
      <YearChart data={data} />
      </div>
      <RegionChart data={data}/>
    </div>
  )
}

export default Charts

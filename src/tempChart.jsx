import React, { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const TempChart = () => {
  const [temperature, setTemperature] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTemperature();
  }, [])

  const fetchTemperature = async () => {
    const response = await fetch(`http://localhost:5000/temperature`)
    response.json().then(res => {
      let arr = [];
      for (let key in res) {
        const temp = new Object();
        temp['time'] = key;
        temp['value'] = res[key];
        arr.push(temp);
      }
      console.log(arr);
      setTemperature(arr);
    });
  }

  return (
    <ResponsiveContainer width="95%" height={400}>
      <LineChart width='80%' height={300} data={temperature}
      margin={{top: 5, right: 30, left: 20, bottom: 5, }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis dataKey="value"  domain={[0, 50]}/>
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default TempChart;
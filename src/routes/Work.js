import React,{useState} from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Work.module.css';
import {BarChart,Bar,XAxis} from 'recharts';

function Work() {
    
  const data = [
    {name: '월',
      uv: 4000,},
    {name: '화',
      uv: 3000,},
    {name: '수',
      uv: 2000,},
    {name: '목',
      uv: 2780,},
    {name: '금',
      uv: 1890,},
    {name: '토',
      uv: 2390,},
    {name: '일',
      uv: 3490,},
  ];
  const [percentage,setPercentage] = useState(30);
  return (
    <div className='container'>
      <div style={{flex:1}}>
      <h1> 근태 관리 </h1>
      </div>
    <div className='middle'>
      
      {/*주간*/}
      <div className='week_container'>
      <div><p>주간업무</p><div style={{textAlign:'right'}}>금주잔여시간</div></div>
        <BarChart width={400} height={300} data={data}>
          <Bar dataKey="uv" fill ="#8884d8" stroke="#8884d8"/>
          <XAxis dataKey="name" />
        </BarChart>
      </div>

      {/*일일*/}
      <div className="day_container">
        <div className='day_header'>금일업무</div>
        <div className="day_progress">
          <CircularProgressbar className="circle" value={percentage} text={`${percentage}%`} />
        </div>
        <p>출근시간</p>
        <div className='day_footer'>
          <button className='button1'>출근하기</button>
          <button className='button1'>퇴근하기</button>
        </div>
      </div>


    </div>
      <div className='bottom'>
        뭐넣지
      </div>
    </div>
  );

}

export default Work;

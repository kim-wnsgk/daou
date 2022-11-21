import React, { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Work.css';
import { BarChart, Bar, XAxis } from 'recharts';
import {db} from '../firebase'
import { collection, query, onSnapshot, addDoc, getDocs,where} from "firebase/firestore"; 
import moment from 'moment';
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
  const nowDate = moment().format('YY-MM-DD');
  const nowTime = moment().format('HH:mm');
  const [lodaing,setLoading] = useState(false);
  const [tasks,setTasks] = useState([])
  const [percentage, setPercentage] = useState(30);
  //const day = String(date.getDay());

  const startWork = async () => {
    try {
        await addDoc(collection(db, "work"), {
          email: "qwer",
          day :nowDate,
          start : nowTime,
          end : "",
        });
      } catch (e) {
        console.error("Error adding document: ", e);
      }
  }
  useEffect(()=>{
    const q = query(collection(db,"work"),where('name','==','qwer'));
    const unsub = onSnapshot(collection(db,"work"),(querySnapshot)=>{
      const items = [];
      querySnapshot.forEach((doc)=>{
        items.push(doc.data());
      });
      setTasks(items);
    });
    return () =>{
      unsub();
    };
  },[]);
  function timeSpend(time1, time2){
      var time1_hour = Number(time1.substr(0,2));
      var time1_minute = Number(time1.substr(3,4));
      var time2_hour = Number(time2.substr(0,2));
      var time2_minute = Number(time2.substr(3,4));

      if(time1_minute>=time2_minute){
        return String(time1_hour-time2_hour)+":"+String(time1_minute-time2_minute)}
      else{
        return String(time1_hour-time2_hour-1)+":"+String(time1_minute-time2_minute+60)
      }
    }
  
  return (
    <div className='container'>
      <div className='header'>
      </div>
      <div className='middle'>

        {/*주간*/}
        <div className='week_container'>
          <div><p>주간업무</p><div style={{ textAlign: 'right' }}>금주잔여시간</div></div>
          <BarChart width={400} height={300} data={data}>
            <Bar dataKey="uv" fill="#8884d8" stroke="#8884d8" />
            <XAxis dataKey="name"/>
          </BarChart>
        </div>

        {/*일일*/}
        <div className="day_container">
          <div className="day_progress">
            <CircularProgressbar className="circle" value={percentage} text={'${percentage}%'} />
          </div>
          {tasks.map((task)=>(
            <div>{timeSpend(String(nowTime),String(task.start))}</div>
          )

          )}
          <div className='day_footer'>
            <button onClick={startWork} className='button1'>출근하기</button>
            <button className='button1'>퇴근하기</button>
          </div>
        </div>
      </div>
      <div className='bottom'>
      </div>
    </div>
  );

}

export default Work;

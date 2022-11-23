import React, { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Work.css';
import { BarChart, Bar, XAxis } from 'recharts';
import { db } from '../firebase'
import { doc, collection, query, onSnapshot, addDoc, getDocs, where, updateDoc, orderBy } from "firebase/firestore";
import moment from 'moment';
import { getAuth } from "firebase/auth";
function Work() {

  const data = [
    {
      name: '월',
      uv: 850,
    },
    {
      name: '화',
      uv: 800,
    },
    {
      name: '수',
      uv: 750,
    },
    {
      name: '목',
      uv: 800,
    },
    {
      name: '금',
      uv: 800,
    },
    {
      name: '토',
      uv: 0,
    },
    {
      name: '일',
      uv: 300,
    },
  ];
  const nowDate = moment().format('YY-MM-DD');
  const nowTime = moment().format('HH:mm');
  const [lodaing, setLoading] = useState(false);
  const [tasks, setTasks] = useState([])
  const [percentage, setPercentage] = useState(30);
  const [uid,setUid] = useState("");

  const updateWork = async()=>{
    updateDoc(doc(db, "work", uid), {
      end: nowTime,
      work: timeSpend(String(nowTime), String(tasks[0].start))
    })
    alert("퇴근 처리가 완료 되었습니다.")
  }
  const endWork = async () => {
    if (tasks[0].day == nowDate) {
      
      const q = query(collection(db, "work"), where('email', '==',getAuth().currentUser.email),orderBy('day','asc'));
      const unsub = onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setUid(doc.id);
        });})
        return () => {
          unsub();
        };
    }
    else {
      alert("먼저 출근 하십시오!")
    }
  }
  const startWork = async () => {
    if (tasks[0].day == nowDate) {
      alert('이미 출근 했습니다!')
    }
    else {
      try {
        await addDoc(collection(db, "work"), {
          email: getAuth().currentUser.email,
          day: nowDate,
          start: nowTime,
          end: "",
          work: ""
        });
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  }
  useEffect(() => {
    const q = query(collection(db, "work"), where('email', '==', 'qwer'),orderBy("day","asc"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setTasks(items);

    });
    return () => {
      unsub();
    };
  }, []);

  function timePercent(time){
    var time_hour = Number(time.substr(0,2));
    var time_minute = Number(time.substr(3,4));
    return (String(Math.floor((time_hour + time_minute*(5/300))*100/8)));
  }
  function timeSpend(time1, time2) {
    var time1_hour = Number(time1.substr(0, 2));
    var time1_minute = Number(time1.substr(3, 4));
    var time2_hour = Number(time2.substr(0, 2));
    var time2_minute = Number(time2.substr(3, 4));

    if (time1_minute >= time2_minute) {
      return 0+String(time1_hour - time2_hour) + ":" + String(time1_minute - time2_minute)
    }
    else {
      return 0+String(time1_hour - time2_hour - 1) + ":" + String(time1_minute - time2_minute + 60)
    }
  }

  return (
    <div className='container'>
      <div className='header'>
        <h1>근태관리</h1>
      </div>
      <div className='middle'>
        {/*주간*/}
        <div className='week_container'>
          <div><h2>주간업무</h2><div style={{ textAlign: 'right' }}></div></div>
          <BarChart width={400} height={300} data={data}>
            <Bar dataKey="uv" fill="#8884d8" stroke="#8884d8" />
            <XAxis dataKey="name" />
          </BarChart>
        </div>

        {/*일일*/}
        <div className="day_container">
          <h2 className='cent'>금일업무</h2>
          {tasks.map((task) => (
            task.day == nowDate ?
            <>
          <div className="day_progress">
            <CircularProgressbar className="circle" value={timePercent(timeSpend(String(nowTime), String(task.start)))} text={`${timePercent(timeSpend(String(nowTime), String(task.start)))}%`} />
          </div>
          
              <div>금일 업무시간  {timeSpend(String(nowTime), String(task.start))}</div>
              </>
              : <></>
          )

          )}
          <div className='day_footer'>
            <button onClick={startWork} className='button1'>출근하기</button>
            <button onClick={() =>{
              endWork()
            updateWork()}} className='button1'>퇴근하기</button>
          </div>
        </div>
      </div>
      <div className='bottom'>
        
      </div>
    </div>
  );

}

export default Work;

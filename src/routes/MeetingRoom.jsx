import './MeetingRoom.css'
import Calendar from 'react-calendar';
import React,{useState} from 'react';

import 'react-calendar/dist/Calendar.css';
function MeetingRoom() {
    const [value,onChange] = useState(new Date());
    return (

        <div className='container'>
            <div className='head'>
                <h1 className='title'>회의실 예약</h1>
            </div>
            <div className='body'>
                <div className='element'>
                    <div className='cont'>
                        <img className='imagee' src={require('./room1.jpg')}></img>
                        <h2 className='name'>회의실1</h2>
                    </div>
                    <div className='calendar'>
                        <Calendar onChange={onChange} value={value}/>
                    </div>
                    <div>
                        <button className='bu'>예약하기</button>
                    </div>
                </div>
                <div className='element'>
                    <div className='cont'>
                        <img className='imagee' src={require('./room2.jpg')}></img>
                        <h2 className='name'>회의실2</h2>
                    </div>
                    <div className='calendar'>
                        <Calendar onChange={onChange} showWeekNumber value={value}/>
                    </div>
                    <div>
                        <button className='bu'>예약하기</button>
                    </div>
                </div>
                <div className='element'>
                    <div className='cont'>
                        <img className='imagee' src={require('./room3.jpg')}></img>
                        <h2 className='name'>회의실3</h2>
                    </div>
                    <div className='calendar'>
                        <Calendar onChange={onChange} value={value}/>
                    </div>
                    <div>
                        <button className='bu'>예약하기</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default MeetingRoom;

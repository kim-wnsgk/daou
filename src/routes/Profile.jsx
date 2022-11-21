import React,{useEffect,useState} from 'react';
import './Profile.css';
import { db } from '../firebase'
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, query, where, onSnapshot } from "firebase/firestore"
import "../components/App"
import userEvent from '../../node_modules/@testing-library/user-event/dist/index';

function Profile() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
    const q = query(collection(db, "post"), where('selector', 'in', ['part','notice']));
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

  return (
    <div className='container'>
        <div className='top'>
            <div className='picture'>
                <div className='image_envelope'>
                    <img className='image' src={require('./default.png')}/>
                </div>
            </div>
            <div className='personal'>
                <h3>{/*name*/}{/*position*/}님 안녕하세요.</h3>
                <h3>{/*department*/}</h3>
                <h3>금주 근무시간 : {/*spendTime*/}</h3>
            </div>
            <div className='plan'>
                <p>일정</p>
            </div>
        </div>
        <div className='bottom'>
        
            <div className='board1'>
                <h3 style={{textAlign:'center'}}>공지사항</h3>
                <table className='post'>
                    <thead>
                        <td style={{width:200}} className='inner'>제목</td>
                        <td style={{width:200}} className='inner'>내용</td>
                        <td style={{width:100}} className='inner'>날짜</td>
                    </thead>
            {tasks.map((task) => (
                task.selector=='notice'?
                        <tbody>
                            <td className='inner'>{task.title}</td>
                            <td className='inner'>{task.content}</td>
                            <td className='inner'>{task.date}</td>
                            </tbody>
                        :<></>
                    ))}
            </table>
            </div>
            <div className='board2'><h3 style={{textAlign:'center'}}>부서별게시판</h3>
                <table className='post'>
                    <thead>
                        <td style={{width:200}} className='inner'>제목</td>
                        <td style={{width:200}} className='inner'>내용</td>
                        <td style={{width:100}} className='inner'>날짜</td>
                    </thead>
            {tasks.map((task) => (
                task.selector=='part'?
                        <tbody>
                            <td className='inner'>{task.title}</td>
                            <td className='inner'>{task.content}</td>
                            <td className='inner'>{task.date}</td>
                            </tbody>
                        :<></>
                    ))}
            </table>
            </div>
        </div>
    </div>
  );

}

export default Profile

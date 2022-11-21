import React, { useEffect, useState } from 'react';
import './Profile.css';
import { db } from '../firebase'
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, query, where, onSnapshot } from "firebase/firestore"
import "../components/App"
import moment from 'moment';
import Schedule from './Schedule';
import { getAuth } from "firebase/auth";

function Profile() {
    const nowDate = moment().format('YY-MM-DD');
    const [tasks, setTasks] = useState([]);
    const [tas, setTas] = useState([]);

    useEffect(() => {
        const q = query(collection(db, "post"), where('selector', 'in', ['part', 'notice']));
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
    useEffect(() => {
        const q = query(collection(db, "work"), where('email', '==', 'qwer'));
        const unsub = onSnapshot(q, (querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            setTas(items);

        });
        return () => {
            unsub();
        };
    }, []);

    return (
        <div className='container'>
            <div className='top'>
                <div className='profile'>
                    <div className='picture'>
                        <div className='image_envelope'>
                            <img className='image' src={require('./default.png')} />
                        </div>
                    </div>
                    <div className='personal'>
                        <h1>프로필</h1>
                        <h3>{/*name*/}{/*position*/}이름 : 김OO</h3>
                        <h3>{/*name*/}{/*position*/}전화번호 : 010-1234-5678</h3>
                        <h3>{/*department*/}이메일 : {getAuth().currentUser.email}</h3>
                        {tas.map((ta) => (
                            ta.day == nowDate ?
                                <h3>금일 근무시간 : {ta.work}</h3>
                                : <></>
                        ))}
                    </div>
                </div>
                <div className='plan'>
                    <h2>일정</h2>
                    <table style={{ margin: '30px' }}>
                        <thead>
                            <td>이름</td>
                            <td>시간</td>
                            <td>장소</td>
                        </thead>
                        <tbody>
                            <td className='inner'>공부하기</td>
                            <td className='inner'>11.22</td>
                            <td className='inner'>집</td>
                        </tbody>
                        <tbody>
                            <td className='inner'>과제하기</td>
                            <td className='inner'>11.31</td>
                            <td className='inner'>단국대학교 도서관</td>
                        </tbody>
                        <tbody>
                            <td className='inner'>토익 시험</td>
                            <td className='inner'>12.06</td>
                            <td className='inner'>대지고등학교</td>
                        </tbody>
                        <tbody>
                            <td className='inner'>수영하기</td>
                            <td className='inner'>11.21</td>
                            <td className='inner'>아르피아 스포츠센터</td>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='bottom'>

                <div className='board1'>
                    <h3 style={{ textAlign: 'center' }}>공지사항</h3>
                    <table className='post'>
                        <thead>
                            <td style={{ width: 100 }} className='inner'>날짜</td>
                            <td style={{ width: 200 }} className='inner'>제목</td>
                            <td style={{ width: 200 }} className='inner'>내용</td>
                            <td style={{ width: 100 }} className='inner'>이메일</td>
                        </thead>
                        {tasks.map((task) => (
                            task.selector == 'notice' ?
                                <tbody>
                                    <td className='inner'>{task.date}</td>
                                    <td className='inner'>{task.title}</td>
                                    <td className='inner'>{task.content}</td>
                                    <td className='inner'>{task.email}</td>
                                </tbody>
                                : <></>
                        ))}
                    </table>
                </div>
                <div className='board2'><h3 style={{ textAlign: 'center' }}>부서별게시판</h3>
                    <table className='post'>
                        <thead>
                            <td style={{ width: 100 }} className='inner'>날짜</td>
                            <td style={{ width: 200 }} className='inner'>제목</td>
                            <td style={{ width: 200 }} className='inner'>내용</td>
                            <td style={{ width: 100 }} className='inner'>이메일</td>
                        </thead>
                        {tasks.map((task) => (
                            task.selector == 'part' ?
                                <tbody>
                                    <td className='inner'>{task.date}</td>
                                    <td className='inner'>{task.title}</td>
                                    <td className='inner'>{task.content}</td>
                                    <td className='inner'>{task.email}</td>
                                </tbody>
                                : <></>
                        ))}
                    </table>
                </div>
            </div>
        </div>
    );

}

export default Profile

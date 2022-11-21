import styles from "./Board.module.css"
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

import {db} from '../firebase'
import {collection, getDocs, addDoc, updateDoc, deleteDoc, doc, query, where, onSnapshot} from "firebase/firestore"


function Board() {
    const [selector, setSelector] = useState('notice');
    const [post, setPost] = useState("");
    const [tasks, setTasks] = useState([]);
    const [lodaing, setLoading] = useState(false);
    
    useEffect(()=>{
        const q = query(collection(db,"post"),where('selector','==',selector));
        const unsub = onSnapshot(q,(querySnapshot)=>{
          const items = [];
          querySnapshot.forEach((doc)=>{
            items.push(doc.data());
          });
          setTasks(items);
        });
        return () =>{
          unsub();
        };
      },[selector]);

    return (
        <div className={styles.contents}>
            <div className={styles.normal}>
                <div className={styles.title}>
                    {selector === 'notice' ? <span>공지사항</span> : selector === 'free' ? <span>자유게시판</span> : selector === 'part' ? <span>부서별게시판</span> : null}
                </div>
                <ul className={styles.posts}>
                    <li className={styles.post}>
                        <span style={{ flex: 0.5 }}>19:08</span>
                        <span style={{ flex: 3 }}>제목</span>
                        <span style={{ flex: 1, color: 'red', fontWeight: 'bold', textAlign: 'center' }}>긴급</span>
                    </li>
                    {tasks.map((task)=>(
                        <li className={styles.post}>
                        <span style={{ flex: 0.5 }}>{task.date}</span>
                        <span style={{ flex: 3 }}>{task.title}</span>
                        <span style={{ flex: 1, color: 'red', fontWeight: 'bold', textAlign: 'center' }}>{task.content}</span>
                        
                    </li>
                    ))}
                </ul>
            </div>
            <div className={styles.sideBanner}>
                <div className={styles.selector}>
                    {selector === 'notice' ? (
                        <div className={styles.selectedButton}>
                            공지
                        </div>) :
                        <div className={styles.selectButton}
                            onClick={() => setSelector('notice')}>
                            공지
                        </div>}
                    {selector === 'free' ? (
                        <div className={styles.selectedButton}>
                            자유
                        </div>) :
                        <div className={styles.selectButton}
                            onClick={() => setSelector('free')}>
                            자유
                        </div>}
                    {selector === 'part' ? (
                        <div className={styles.selectedButton}>
                            부서
                        </div>) :
                        <div className={styles.selectButton}
                            onClick={() => setSelector('part')}>
                            부서
                        </div>}
                </div>
                <div className={styles.write}>
                    <Link to={`/board/write/${selector}`} style={{ textDecoration: 'none' }}>글 작성</Link>
                </div>
            </div>

        </div>
    );
}

export default Board;
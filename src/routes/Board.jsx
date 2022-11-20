import styles from "./Board.module.css"
import { useState } from 'react'
import { Link } from "react-router-dom";

import {db} from '../firebase'
import { collection, query, where, addDoc, getDocs } from "firebase/firestore"; 

function Board() {
    const [selector, setSelector] = useState('notice');

    const getPosts = async () => {
        const q = query(collection(db, "post"), where("selector", "==", selector));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      })}

    return (
        <div className={styles.contents}>
            <button onClick={() => {getPosts()}}>asd</button>
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
                    <li className={styles.post}>제목</li>
                    <li className={styles.post}>제목</li>
                    <li className={styles.post}>제목</li>
                    <li className={styles.post}>제목</li>
                    <li className={styles.post}>제목</li>
                    <li className={styles.post}>제목</li>
                    <li className={styles.post}>제목</li>
                    <li className={styles.post}>제목</li>
                    <li className={styles.post}>제목</li>
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
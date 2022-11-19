import styles from "./Board.module.css"
import { useState } from 'react'
import { Link } from "react-router-dom";

function Board() {
    const [selector, setSelector] = useState('notice');

    return (
        <div className={styles.container}>
            <div className={styles.banner}>
                logo
            </div>
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
                    {selector === 'notice' ? (
                        <div className={styles.selectedButton}>
                            공지사항
                        </div>) :
                        <div className={styles.selectButton}
                            onClick={() => setSelector('notice')}>
                            공지사항
                        </div>}
                    {selector === 'free' ? (
                        <div className={styles.selectedButton}>
                            자유게시판
                        </div>) :
                        <div className={styles.selectButton}
                            onClick={() => setSelector('free')}>
                            자유게시판
                        </div>}
                    {selector === 'part' ? (
                        <div className={styles.selectedButton}>
                            부서별게시판
                        </div>) :
                        <div className={styles.selectButton}
                            onClick={() => setSelector('part')}>
                            부서별게시판
                        </div>}
                </div>
                <div className={styles.write}>
                    <Link to={`/board/write/${selector}`}>글 작성</Link>

                </div>
            </div>
        </div >
    );
}

export default Board;
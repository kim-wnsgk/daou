import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css'
import Work from './Work';
import Lunch from './Lunch';

function Home() {
    
    const [page,setPage] = useState("<Lunch>");
    
    return (
        <div className={styles.container}>
            <div className={styles.banner}>
                logo
            </div>
            <div className={styles.contents}>
                <div className={styles.inside}>
                <div className={styles.menus}>
                    <div  className={styles.menu_left_top}>
                    <button className={styles.button}>MeetingRoom</button>
                        <Link style={{color : 'black',textDecoration : 'none'}} to="/meetingroom"></Link>
                    </div>
                    <div className={styles.menu}>
                        <button className={styles.button}>Profile</button>
                        <Link style={{color : 'black',textDecoration : 'none'}} to="{?}"></Link>
                    </div>
                    <div className={styles.menu}>
                    <button className={styles.button}>menu3</button>
                        <Link style={{color : 'black',textDecoration : 'none'}} to="{?}"></Link>
                    </div>
                    <div className={styles.menu}>
                    <button className={styles.button}>Schedule</button>
                        <Link style={{color : 'black',textDecoration : 'none'}} to="/schedule"></Link>
                    </div>
                    <div className={styles.menu}>
                    <button className={styles.button}>Work</button>
                        <Link style={{color : 'black',textDecoration : 'none'}} to="/work"></Link>
                    </div>
                    <div className={styles.menu}>
                    <button className={styles.button}>Board</button>
                        <Link style={{color : 'black',textDecoration : 'none'}} to="/board"></Link>
                    </div>
                    <div className={styles.menu_left_bottom}>
                    <button className={styles.button}>Lunch</button>
                        <Link style={{color : 'black',textDecoration : 'none'}} to="/lunch"></Link>
                    </div>

                    
                </div>
                <div className={styles.profile}>
                    <Lunch/>
                </div>
                    
                    {/* <ul>
                        <li>
                            <Link to="/schedule">일정 작성</Link>
                        </li>
                        <li>
                            <Link to="/work">출퇴근 관리</Link>
                        </li>
                        <li>
                            <Link to="/board">게시판</Link>
                        </li>
                        <li>
                            <Link to="/lunch">점심메뉴추천</Link>
                        </li>
                    </ul> */}
                
            </div>
            </div>
        </div>
    );
}

export default Home;
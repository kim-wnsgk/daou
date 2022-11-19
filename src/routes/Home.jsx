import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css'
import Work from './Work';
import Lunch from './Lunch';
import Board from './Board';
import Schedule from './Schedule';
import MeetingRoom from './MeetingRoom';
import Profile from './Profile';
import Mafia from './Mafia'
function Home() {
    
    let [page,setPage] = useState(0);
    
    return (
        <div className={styles.container}>
            <div className={styles.banner}>
                logo
            </div>
            <div className={styles.contents}>
                <div className={styles.inside}>
                <div className={styles.menus}>

                    <div style={page==0?{backgroundColor: 'white'}:{backgroundColor:'aqua'}} className={styles.menu_left_top}>
                        <button onClick={()=>{setPage(0)}} className={styles.button}>Profile</button>
                    </div>

                    <div style={page==1?{backgroundColor: 'white'}:{backgroundColor:'aqua'}} className={styles.menu}>
                        <button  onClick={()=>{setPage(1); console.log("hi")}} className={styles.button}>MeetingRoom</button>
                    </div>

                    <div style={page==2?{backgroundColor: 'white'}:{backgroundColor:'aqua'}} className={styles.menu}>
                    <button  onClick={()=>{setPage(2)}} className={styles.button}>Schedule</button>
                    </div>

                    <div style={page==3?{backgroundColor: 'white'}:{backgroundColor:'aqua'}} className={styles.menu}>
                    <button  onClick={()=>{setPage(3)}} className={styles.button}>Work</button>
                    </div>

                    <div style={page==4?{backgroundColor: 'white'}:{backgroundColor:'aqua'}} className={styles.menu}>
                    <button  onClick={()=>{setPage(4)}} className={styles.button}>Board</button>
                    </div>

                    <div style={page==5?{backgroundColor: 'white'}:{backgroundColor:'aqua'}} className={styles.menu}>
                    <button onClick={()=>{setPage(5)}} className={styles.button}>menu3</button>   
                    </div>

                    <div style={page==6?{backgroundColor: 'white'}:{backgroundColor:'aqua'}} className={styles.menu_left_bottom}>
                    <button onClick={()=>{setPage(6)}} className={styles.button}>Lunch</button>  
                    </div>
                    
                </div>
                <div className={styles.profile}>
                    {/*페이지 추가하고 나서 하자!*/}
                    {page==0? (<Profile />): page==1?(<MeetingRoom/>):page==2?(<Schedule/>):page==3?(<Work/>):page==4?(<Board/>):page==5?(<Mafia/>):(<Lunch/>)}
                </div>
                
            </div>
            </div>
            <Link style={{color : 'black',textDecoration : 'none'}} to="/meetingroom">미팅</Link>
            <Link style={{color : 'black',textDecoration : 'none'}} to="{?}"></Link>
            <Link style={{color : 'black',textDecoration : 'none'}} to="{?}"></Link>
            <Link style={{color : 'black',textDecoration : 'none'}} to="/schedule"></Link>
            <Link style={{color : 'black',textDecoration : 'none'}} to="/work"></Link>
            <Link style={{color : 'black',textDecoration : 'none'}} to="/board"></Link>
            <Link style={{color : 'black',textDecoration : 'none'}} to="/lunch"></Link>
        </div>
    );
}

export default Home;
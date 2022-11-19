import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css'
import Work from './Work';
import Lunch from './Lunch';

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
                    <div  style={page==0?{backgroundColor: 'white'}:{backgroundColor:'aqua'}} className={styles.menu_left_top}>
                        <button  onClick={()=>{setPage(0); console.log("hi")}} className={styles.button}>MeetingRoom</button>
                        <Link style={{color : 'black',textDecoration : 'none'}} to="/meetingroom"></Link>
                    </div>
                    <div style={page==1?{backgroundColor: 'white'}:{backgroundColor:'aqua'}} className={styles.menu}>
                        <button onClick={()=>{setPage(1)}} className={styles.button}>Profile</button>
                        <Link style={{color : 'black',textDecoration : 'none'}} to="{?}"></Link>
                    </div>
                    <div style={page==2?{backgroundColor: 'white'}:{backgroundColor:'aqua'}} className={styles.menu}>
                    <button onClick={()=>{setPage(2)}} className={styles.button}>menu3</button>
                        <Link style={{color : 'black',textDecoration : 'none'}} to="{?}"></Link>
                    </div>
                    <div style={page==3?{backgroundColor: 'white'}:{backgroundColor:'aqua'}} className={styles.menu}>
                    <button  onClick={()=>{setPage(3)}} className={styles.button}>Schedule</button>
                        <Link style={{color : 'black',textDecoration : 'none'}} to="/schedule"></Link>
                    </div>
                    <div style={page==4?{backgroundColor: 'white'}:{backgroundColor:'aqua'}} className={styles.menu}>
                    <button  onClick={()=>{setPage(4)}} className={styles.button}>Work</button>
                        <Link style={{color : 'black',textDecoration : 'none'}} to="/work"></Link>
                    </div>
                    <div style={page==5?{backgroundColor: 'white'}:{backgroundColor:'aqua'}} className={styles.menu}>
                    <button  onClick={()=>{setPage(5)}} className={styles.button}>Board</button>
                        <Link style={{color : 'black',textDecoration : 'none'}} to="/board"></Link>
                    </div>
                    <div style={page==6?{backgroundColor: 'white'}:{backgroundColor:'aqua'}} className={styles.menu_left_bottom}>
                    <button onClick={()=>{setPage(6)}} className={styles.button}>Lunch</button>
                        <Link style={{color : 'black',textDecoration : 'none'}} to="/lunch"></Link>
                    </div>

                    
                </div>
                <div className={styles.profile}>
                    {/*페이지 추가하고 나서 하자!*/}
                    {page==0? (<Lunch />): (<Work />)}
                </div>
                
            </div>
            </div>
        </div>
    );
}

export default Home;
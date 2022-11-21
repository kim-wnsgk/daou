import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css'
import Work from './Work';
import Lunch from './Lunch';
import Board from './Board';
import Schedule from './Schedule';
import MeetingRoom from './MeetingRoom';
import Profile from './Profile';
import Mafia from './Mafia'
import { authService } from '../firebase';

function Home() {

    let [page, setPage] = useState(0);

    return (

        <div className={styles.container}>

            <div className={styles.banner}>
                <img src="officeLogo.png" alt="logo" className={styles.logo} />
                <div
                    className={styles.logoutBt}
                    value="logout" onClick={() => {
                        authService.signOut()
                    }
                    }>로그아웃</div>
            </div>
            <div className={styles.contents}>
                <div className={styles.inside}>
                    <div className={styles.menus}>

                        <div style={page === 0 ? { backgroundColor: 'white', boxShadow: '0px 4px 25px 4px rgb(0 0 0 / 20%)' } : { backgroundColor: 'aliceblue', opacity: '0.5' }} className={styles.menu}>
                            <button onClick={() => { setPage(0) }} className={styles.button}>Profile</button>
                        </div>

                        <div style={page === 1 ? { backgroundColor: 'white', boxShadow: '4px 4px 25px 4px rgb(0 0 0 / 20%)' } : { backgroundColor: 'aliceblue', opacity: '0.5' }} className={styles.menu}>
                            <button onClick={() => { setPage(1); console.log("hi") }} className={styles.button}>MeetingRoom</button>
                        </div>

                        <div style={page === 2 ? { backgroundColor: 'white', boxShadow: '0px 4px 25px 4px rgb(0 0 0 / 20%)' } : { backgroundColor: 'aliceblue', opacity: '0.5' }} className={styles.menu}>
                            <button onClick={() => { setPage(2) }} className={styles.button}>Schedule</button>
                        </div>

                        <div style={page === 3 ? { backgroundColor: 'white', boxShadow: '0px 4px 25px 4px rgb(0 0 0 / 20%)' } : { backgroundColor: 'aliceblue', opacity: '0.5' }} className={styles.menu}>
                            <button onClick={() => { setPage(3) }} className={styles.button}>Work</button>
                        </div>

                        <div style={page === 4 ? { backgroundColor: 'white', boxShadow: '0px 4px 25px 4px rgb(0 0 0 / 20%)' } : { backgroundColor: 'aliceblue', opacity: '0.5' }} className={styles.menu}>
                            <button onClick={() => { setPage(4) }} className={styles.button}>Board</button>
                        </div>

                        <div style={page === 5 ? { backgroundColor: 'white', boxShadow: '0px 4px 25px 4px rgb(0 0 0 / 20%)' } : { backgroundColor: 'aliceblue', opacity: '0.5' }} className={styles.menu}>
                            <button onClick={() => { setPage(5) }} className={styles.button}>Mafia</button>
                        </div>

                        <div style={page === 6 ? { backgroundColor: 'white', boxShadow: '0px 4px 25px 4px rgb(0 0 0 / 20%)' } : { backgroundColor: 'aliceblue', opacity: '0.5' }} className={styles.menu}>
                            <button onClick={() => { setPage(6) }} className={styles.button}>Lunch</button>
                        </div>

                    </div>
                    <div className={styles.profile}>
                        {/*페이지 추가하고 나서 하자!*/}
                        {page === 0 ? (<Profile />) : page === 1 ? (<MeetingRoom />) : page === 2 ? (<Schedule />) : page === 3 ? (<Work />) : page === 4 ? (<Board />) : page === 5 ? (<Mafia />) : (<Lunch />)}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Home;
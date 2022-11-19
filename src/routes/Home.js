import { Link } from 'react-router-dom';
import styles from './Home.module.css'

function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.banner}>
                logo
            </div>
            <div className={styles.contents}>
                <div className={styles.menus}>
                    <ul>
                        <li>
                            <Link to="/meetingroom">회의실</Link>
                        </li>
                        <li>
                            menu2
                        </li>
                        <li>
                            menu3
                        </li>
                    </ul>
                </div>
                <div className={styles.profile}>
                    profile
                </div>
                <div className={styles.menus}>
                    <ul>
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
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Home;
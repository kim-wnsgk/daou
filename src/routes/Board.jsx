import styles from "./Board.module.css"

function Board() {
    return (
        <div className={styles.container}>
            <div className={styles.banner}>
                logo
            </div>
            <div className={styles.contents}>
                <div className={styles.normalBoard}>
                    <div className={styles.normal}>
                        <div className={styles.title}>공지사항</div>
                    </div>
                    <div className={styles.normal}>
                        <div className={styles.title}>자유게시판</div>
                    </div>
                </div>
                <div className={styles.partBoard}>
                    <div className={styles.title}>부서별 게시판</div>
                </div>
                <div className={styles.sideBanner}>
                    sb
                </div>
            </div>
        </div>
    );
}

export default Board;
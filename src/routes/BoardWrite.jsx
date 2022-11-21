import styles from "./BoardWrite.module.css"
import { useState } from 'react'
import { Link, useParams } from "react-router-dom";

import { db } from '../firebase'
import { collection, addDoc } from "firebase/firestore";
import moment from "moment"
import { getAuth } from "firebase/auth";
import userEvent from "../../node_modules/@testing-library/user-event/dist/index";


function BoardWrite() {
    const { selector } = useParams();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const nowDate = moment().format('MM-DD');

    const addPost = async () => {
        try {
            await addDoc(collection(db, "post"), {
                content: content,
                date: nowDate,
                selector: selector,
                title: title,
                email: getAuth().currentUser.email
            });
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.banner}>
                logo
            </div>
            <div className={styles.contents}>
                <div className={styles.normal}>
                    <div className={styles.title}>
                        <textarea
                            type="text"
                            className={styles.box}
                            placeholder="제목을 입력하시오."
                            value={title}
                            onChange={(event) => {
                                setTitle(event.target.value);
                            }}
                        />
                    </div>
                    <div className={styles.content}>
                        <textarea
                            type="text"
                            className={styles.box}
                            placeholder="내용을 입력하시오."
                            value={content}
                            onChange={(event) => {
                                setContent(event.target.value);
                            }}
                        />
                    </div>
                </div>
                <div className={styles.write}>
                    <Link
                        to="/"
                        onClick={addPost}
                    >글 작성</Link>

                </div>
            </div>
        </div>
    );
}

export default BoardWrite;
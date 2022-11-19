import { firebase, firebaseApp, db } from "./firebase";

function firebasefunc() {
  //테이블에 데이터 추가 (테이블 없으면 생성)
  const addDoc = async (colId, data) => {
    try {
      await db.collection(colId).add(data);
      console.log('add : good!');
    } catch (e) {
      alert('add : err!');
    }
  }
  //select 
  const getDoc = async (colId, docId) => {
    try {
      const doc = await db.collection(colId).doc(docId).get()
      if (doc.exists) {
        console.log(doc.data());
      } else {
        console.log('해당 document 없음!');
      }
      console.log('get : good!');
    } catch (e) {
      alert('get : err!');
    }
  }

  const updateDoc = async (colId, docId, data) => {
    try {
      await db.collection(colId).doc(docId).update(data);
      console.log('update : good!');
    } catch (e) {
      alert('update : err!');
    }
  }
  //테이블 명이랑 문서 id로 삭제
  const deleteDoc = async (colId, docId) => {
    try {
      await db.collection(colId).doc(docId).delete();
      console.log('delete document : good!');
    } catch (e) {
      alert('delete document : err!');
    }
  };

}
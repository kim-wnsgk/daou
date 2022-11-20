import {db} from '../firebase'
import { collection, query, where, addDoc, getDocs } from "firebase/firestore"; 

const bdagssf = async () => {
    try {
        const docRef = await addDoc(collection(db, "usersss"), {
          first: "Adaaaaa",
          last: "Lovelace",
          born: 1815
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}
const asdsada = async () => {
  const q = query(collection(db, "usersss"), where("first", "==", "Adaaaaa"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});
}

function Mafia() {
    
    return (
        <div>
            <button onClick={() => bdagssf()}>djk</button>
            <button onClick={() => asdsada()}>djk</button>
        </div>
    );
}

export default Mafia;
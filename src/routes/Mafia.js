import {db} from '../firebase'
import { collection, addDoc } from "firebase/firestore"; 

const bdagssf = async () => {
    try {
        const docRef = await addDoc(collection(db, "userss"), {
          first: "Ada",
          last: "Lovelace",
          born: 1815
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

function Mafia() {
    
    return (
        <div>
            <button onClick={() => bdagssf()}>djk</button>
        </div>
    );
}

export default Mafia;
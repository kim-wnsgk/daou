import {db} from '../firebase'
import { collection, query, where, addDoc, getDocs } from "firebase/firestore"; 
import { useEffect } from 'react';
import moment from "moment";
import './Mafia.css';
function Mafia() {
  var now = new Date();
  var sec = now.getSeconds();

    
    return (
      <div className='container'>
      {sec>57?
      <div className='innerCon'>
        <div className='head'>
          <h1 className='para'>당신은 마피아 입니다.</h1>
        </div>
        <div className='body'>
          <div className='circle'>
            <img className='img' src={require('./mafia.png')}></img>
          </div>
        </div>
        <div className='leg'>
          <h2 className='content'>퇴근 전까지 본인이 마피아인것을 숨기세요!</h2>
        </div>
      </div>
      :
      <div className='innerCon'>
      <div className='head'>
        <h1 className='para'>당신은 시민 입니다.</h1>
      </div>
      <div className='body'>
        <div className='circle'>
          <img className='img' src={require('./normal.png')}></img>
        </div>
      </div>
      <div className='leg'>
        <h2 className='content'>퇴근 전까지 마피아가 누구인지 밝히세요!</h2>
      </div>
    </div>
    }
      <div>
      </div>
      </div>
    );
}

export default Mafia;
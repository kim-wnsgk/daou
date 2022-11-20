import React from 'react';
import './Profile.css';

function Profile() {

  return (
    <div className='container'>
        <div className='top'>
            <div className='picture'>
                <div className='image_envelope'>
                    <img className='image' src={require('./default.png')}/>
                </div>
            </div>
            <div className='personal'>
                <h3>{/*name*/}{/*position*/}님 안녕하세요.</h3>
                <h3>{/*department*/}</h3>
                <h3>금주 근무시간 : {/*spendTime*/}</h3>
            </div>
            <div className='plan'>
                <p>일정</p>
            </div>
        </div>
        <div className='bottom'>
            <div className='board1'>게시판1</div>
            <div className='board2'>게시판2</div>
        </div>
    </div>
  );

}

export default Profile

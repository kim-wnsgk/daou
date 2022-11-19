import React from 'react';
import './Profile.css';

function Profile() {

  return (
    <div className='container'>
        <div className='top'>
            <div className='picture'>
                <div className='image_envelope'>
                    <img className='image' src={require('./favicon.ico')}/>
                </div>
            </div>
            <div className='personal'>
                        이름 : {/*name*/}
                        나이 : {/*age*/}
                        부서 : {/*department*/}
                        금주 근무시간 : {/*spendTime*/}
            </div>
            <div className='plan'>
                <p>일정</p>
            </div>
        </div>
        <div className='bottom'>
            게시판 공지랑 부서게시판
        </div>
    </div>
  );

}

export default Profile

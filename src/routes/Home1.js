import React from 'react';
import { authService } from '../firebase';

const Home1 = () => {
    
    return (
        <div>
            home!!
            <button value="logout" onClick={()=>{
                authService.signOut()
            }
            }></button>
        </div>
    );
};

export default Home1;
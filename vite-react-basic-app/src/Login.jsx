import React, {useState} from 'react';
function Login(){
    const [isLoggedIn,setIsLoggedIn]=useSatte(false);
    const handleLogin=()=>{
        setIsLoggedIn(true);
    };
    const handleLogout=()=>{
        setIsLoggedIn(false);
    };
    return (
        <div>
            {isLoggedIn ? (
                <div><h1>Hurray! You are logged In</h1>
                
                    <button className='text-red bg-slate-400' onClick={handleLogout}>Logout</button>
                </div>
            ):(
                <div>
                    <h1>Hurray! You logged out.</h1>
                    <button className='text-red bg-slate-400' onClick={handleLogin}>Login</button>
                </div>
                
            )}
        </div>
    )
}
export default Login;
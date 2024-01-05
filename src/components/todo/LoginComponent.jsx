import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./security/AuthContext";

export default function LoginComponent(){

    const [username,setUsername] = useState('erald')
    const [password,setPassword] = useState()
    const [errorMessage,setErrorMessage] = useState(false);
    const navigate = useNavigate();
    const authContex = useAuth();

    console.log(authContex);
   
    function handleUsernameChange(event){
       setUsername(event.target.value);
    }

    function handlePasswordChange(event){
        setPassword(event.target.value);
     }

     function handleSubmit(){
       if(authContex.login(username,password)){
        navigate(`/welcome/${username}`);
       }else{
        setErrorMessage(true);
        navigate('/login');
       }
     }
   
    return(
        <div className="Login">
           
            {errorMessage &&  <div className='ErrorMessage'>
               Authentication Failed. Please check your credentials.
               </div> }
           
            <div className="LoginForm">
                <div>
                    <label>Username</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange}></input>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange}></input>
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>Login</button>
                </div>
            </div>

        </div>

    );
}

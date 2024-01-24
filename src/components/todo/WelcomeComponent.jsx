import axios from "axios";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { executeBasicAuthenticationService, retrieveHelloWorld, retrieveHelloWorldPathVariable } from "./api/HelloWorldService";
import { useAuth } from "./security/AuthContext";


export default function WelcomeComponent(){

    const{username} = useParams();

    const context = useAuth();

    const[message,setMessage] = useState(null);
    
    function callHelloWorldRestApi(){

        
  /*   retrieveHelloWorld()
    .then((response) => successResponse(response))
    .catch((error) => errorResponse(error))
    .finally(()=> console.log('cleanUp'))
    ;  */


     retrieveHelloWorldPathVariable(username)
    .then((response) => successResponse(response))
    .catch((error) => errorResponse(error))
    .finally(()=> console.log('cleanUp')) 

    
    
}
   
    function successResponse(response){
        setMessage(response.data.message);
    }

    function errorResponse(error){
        console.log(error)
     }
     
  
    return(
        <div className="WelcomeComponent">
            <h1>Welcome {username}!</h1>
            <div>
                Manage your todos -<Link to={'/todos'}>Go Here</Link>
            </div>
            <div>
                <button type="button" className="btn btn-primary m-5" onClick={callHelloWorldRestApi}>Go To Hello World</button>
            </div>
            <div className="text-info">{message}</div>
        </div>

    );
}
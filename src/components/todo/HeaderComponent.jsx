
import { Link } from "react-router-dom";
import {useAuth } from "./security/AuthContext";

export default function HeaderComponent(){
     
    const authContex = useAuth();
    const isAuthenticated = authContex.isAuthenticated;

    function logout(){
        authContex.logout()
    }
  
    return(
        <header className="border-bottom border-light border-5 mb-5 p-2">
         <div className='container'>
            <div className='row'>
            <nav className='navbar navbar-expand-lg'>
                <a className='navbar-brand ms-2 fs-2 fw-bold text-black' href='https://www.linkedin.com/in/erald-skura-017465293/'> Erald Profile</a>
                <div className='collapse navbar-collapse'>
                <ul className='navbar-nav'>
                   <li className='nav-item fs-5'>
                    {isAuthenticated && <Link className='nav-link' to='/welcome/erald'>Home</Link>}
                    </li>
                  <li className='nav-item fs-5'>
                   {isAuthenticated && <Link className='nav-link' to='/todos'>Todos</Link>}
                   </li>
               </ul>
                </div>
                <div>
                  <ul className='navbar-nav'>
                    <li className='nav-item fs-5'>
                    {isAuthenticated && <Link className='nav-link' to='/logout' onClick={logout}>Logout</Link> }
                     </li>
                    <li className='nav-item fs-5'>
                    {!isAuthenticated && <Link className='nav-link' to='/'>Login</Link>}
                    </li>
                  </ul>
               </div>
            </nav>
               
             </div>
         </div>
        </header>
     );
}


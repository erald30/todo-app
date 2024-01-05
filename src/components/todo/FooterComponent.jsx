import { useContext } from "react";
import { AuthContext } from "./security/AuthContext";

export default function FooterComponent(){
    const authContex = useContext(AuthContext);
  //  console.log(`Footer Component-${authContex.number}`);
    return(
        <footer className="FooterComponent">
            <div className='container'>
            Footer
            </div>
        </footer>
     );
}
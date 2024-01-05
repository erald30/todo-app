import { useState } from 'react';
import './counter.css';
import CounterButton from './CounterButton';

export default function Counter(){
    
    const [count,setCount] = useState(0);
  
    function incrementByParent(by){
        setCount(count+by);
    }

    function decrementByParent(by){
        setCount(count-by)
    }
    function resetCountParent(){
        setCount(0);
    }

    return(
        <div>
            <CounterButton by={1} incrementParentMethod = {incrementByParent} 
            decrementParentMethod={decrementByParent}/>
             <CounterButton by={2} incrementParentMethod = {incrementByParent} 
            decrementParentMethod={decrementByParent}/>
             <CounterButton by={5} incrementParentMethod = {incrementByParent} 
            decrementParentMethod={decrementByParent}/>
             <span className="totalCount">{count}</span>
             <ResetButton reset={resetCountParent}/>

        </div>
    )

}

export function ResetButton({reset}){

   
    return(
        <div>
            <button className='resetButton' onClick={()=>reset()}>Reset</button>
        </div>
    )

}







export default function CounterButton({by,incrementParentMethod,decrementParentMethod}){
   
    return(
        <div className="Counter">
                <div>
            <button className="counterButton" onClick={()=>incrementParentMethod(by)}>+{by}</button>
            <button className="counterButton" onClick={()=>decrementParentMethod(by)} >-{by}</button>
                </div>
    
        </div>
    );
}
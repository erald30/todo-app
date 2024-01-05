export default function ListTodosComponent(){


    const today = new Date();
    const targetDate = new Date(today.getFullYear()+12,today.getMonth(),today.getDay());

    const todos =[
        {id:1,description:'Learn Java',isDone:false,targetDate:targetDate},
        {id:2,description:'Learn Python',isDone:false,targetDate:targetDate},
        {id:3,description:'Learn DevOps',isDone:false,targetDate:targetDate}
    ] ;

    return(
        <div className="container">
          <h1>Things you Want To Do !</h1>
           <div>
            <table className='table'>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Description</td>
                        <td>Is Done?</td>
                        <td>Target Date</td>
                    </tr>
                </thead>
                <tbody>
               
                { todos.map(todo=>(
                   <tr key={todo.id}>
                   <td>{todo.id}</td>
                   <td>{todo.description}</td>
                   <td>{todo.isDone.toString()}</td>
                   <td>{todo.targetDate.toDateString()}</td>
               </tr>
                   )
                 )
            }

                </tbody>
            </table>
           </div>
        </div>

    );
}


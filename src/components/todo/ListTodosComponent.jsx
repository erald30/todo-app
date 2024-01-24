import { useEffect, useState } from "react";
import { deleteTodoById, retrieveAllTodos, retrieveTodoById, retrieveTodosPathVariable } from "./api/TodoApiService";
import { useAuth } from "./security/AuthContext";
import { useNavigate } from "react-router-dom";


export default function ListTodosComponent(){


   const[todos,setTodos] = useState([])

   const[message,setMessage] = useState(null)

   const authContext = useAuth();

   const username = authContext.username;

   useEffect( () => getAllTodos ,[]  )

   const navigate = useNavigate();


   function getAllTodos(){
    retrieveAllTodos()
    .then(
        response => {
            setTodos(response.data)
        }
    )
   }
   
   function getTodos(){
    retrieveTodosPathVariable(username)
    .then(
        response => {
            setTodos(response.data)
        }
    )
   }

   function getTodoById(){
    retrieveTodoById()
    .then(
        response => {
            console.log(response)
         //   setTodos(response.data)
        }
    )
   }

   function updateTodo(id){

    console.log('clicked'+ id)
    navigate(`/todo/${id}`)
    
 }

 function createTodo(){

    navigate(`/todo/-1`)
    
 }

   function deleteTodo(id){

      deleteTodoById(id)
      .then(()=>{
        getAllTodos()
        setMessage('Todo deleted')
    } )
   }
   

   
   
   
    // const todos =[
    //     {id:1,description:'Learn Java',isDone:false,targetDate:targetDate},
    //     {id:2,description:'Learn Python',isDone:false,targetDate:targetDate},
    //     {id:3,description:'Learn DevOps',isDone:false,targetDate:targetDate}
    // ] ;

    return(
        <div className="container">
          <h1>Things you Want To Do !</h1>
         
          {message &&  <div className="alert alert-warning">{message}</div>}
         
           <div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Is Done?</th>
                        <th>Target Date</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
               
                { todos.map(todo=>(
                   <tr key={todo.id}>
                   <td>{todo.description}</td>
                   <td>{todo.done.toString()}</td>
                   <td>{todo.targetDate}</td>
                  <td><button type="button" class="btn btn-warning"
                   onClick={()=> updateTodo(todo.id)} >Update</button></td> 
                   <td><button type="button" class="btn btn-danger" 
                   onClick={()=> deleteTodo(todo.id)}>Delete</button></td> 
                 </tr>
                   )
                 )
            }

                </tbody>
            </table>
           </div>
           <div className="btn btn-success m-5" onClick={()=>createTodo()}>Add New Todo</div>
        </div>

    );
}


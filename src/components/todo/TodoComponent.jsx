import { useNavigate, useParams } from "react-router-dom"
import { createTodoApi, retrieveTodoById, updateTodo, updateTodoApi } from "./api/TodoApiService"
import { useEffect, useState } from "react";
import { Formik,Form, Field, ErrorMessage } from "formik";
import { useAuth } from "./security/AuthContext";


export default function TodoComponent(){

    const{id} = useParams();
    const authContext = useAuth();

   const username = authContext.username;

   const navigate = useNavigate();

    const[description,setDescription] = useState();
    const[targetDate,setTargetDate] = useState();

    useEffect(
       () => getTodoById(),[id]
    )
  
    function getTodoById(){
       if(id != -1){
        retrieveTodoById(id)
        .then(
            response => {
               setDescription(response.data.description)
               setTargetDate(response.data.targetDate)
            }
        )
       }
        
       }

       function handleSaveButton(values){

        const todo ={
            id:id,
            username: username,
            description: values.description,
            targetDate: values.targetDate,
            done: false

        }

        if(id == -1){
            createTodoApi(todo)
            .then(response => {
                navigate('/todos')
            })
        }else{
            console.log(todo)
            updateTodoApi(todo)
            .then(response =>{
                navigate('/todos')
            })
        }
        

       }

       function validate(values){
        let errors = {
            
        }
        if(values.description.length < 5){
            errors.description = 'Enter at least 5 characters'
        }
        if(values.targetDate == null){
            errors.targetDate = 'Enter a target Date'
        }
        return errors
       }
  
  
    return(
    <div className="container">
        <h1>Enter ToDo Details!</h1>
        <div>
            <Formik initialValues={{description,targetDate}}
             enableReinitialize = {true}
             onSubmit={handleSaveButton}
             validate={validate} >
                {
                    (props)=>(
                        <Form>
                            <ErrorMessage 
                            name="description" 
                            component="div"
                            className="alert alert-warning"
                            />
                             <ErrorMessage 
                            name="targetDate" 
                            component="div"
                            className="alert alert-warning"
                            />
                            <fieldset className="form-group">
                                <label>Desription</label>
                                <Field type="text" className="form-control" name="description"/>
                            </fieldset>
                            <fieldset className="form-group">
                            <label>Target Date</label>
                                <Field type="date" className="form-control" name="targetDate"/>
                            </fieldset>
                            <div>
                                <button className="btn btn-success m-5" type="submit">Save</button>
                            </div>
                        </Form>
                    )
                }
            </Formik>
           </div>
    </div>
  )  
}
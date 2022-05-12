import React, { useState } from 'react'
import EditTask from './EditTask'
import { useDispatch } from 'react-redux'
import { asyncRemoveItem } from './../reduxFiles/actions/tasksAction'


const TaskItem = (props) =>{
    const { id, status, title } = props

    const dispatch = useDispatch()

    const [ toggle, setToggle ] = useState(false)

    const handleToggle = () =>{
        setToggle(!toggle)
    }

    const handleRemove =(id) =>{
        dispatch(asyncRemoveItem(id))
    }

    return (

        <div>
            { toggle ? (
                <div>
                    <EditTask 
                        id={id}
                        status={status}
                        title={title}
                        handleToggle={handleToggle}
                    />

                    <button onClick={handleToggle} > cancel </button>
                    <hr />
                </div>
                ) : (
                    <div>
                        { status ? <h3 style={{color: "green"}} > {title} </h3> : <h3 style={{color: "red"}}> {title} </h3> }
                        <button onClick={ handleToggle } className="btn-secondary" > edit </button>

                        <button onClick={ () => {
                            handleRemove(id)
                        } } className="btn-danger" style={{position: "absolute", right: "650px" }} > remove </button>
                        <hr />
                    </div>
                )
            }
        </div>
    )
}

export default TaskItem
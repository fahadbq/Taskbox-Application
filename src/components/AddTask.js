import React, { useState } from 'react'
import TaskForm from './TaskFrom'
import { useDispatch } from 'react-redux'
import { asyncAddTask } from './../reduxFiles/actions/tasksAction'

const AddTask = (props) => {
    const [isSaved, setisSaved] = useState(false)

    //dispatching
    const disptach = useDispatch()

    const checkIsSaved = () => {
        setisSaved(true)
    }

    const formSubmission = (formData) => {

        disptach(asyncAddTask(formData, checkIsSaved))
    }

    return (
        <div style={{position: "fixed", top: "85px", left: "700px", width: "200px"}} >
            <h2> Add Task </h2>
            <TaskForm
                formSubmission={formSubmission}
                isSaved={isSaved}
            />
        </div>
    )
}

export default AddTask
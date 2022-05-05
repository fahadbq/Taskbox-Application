import React from 'react'
import TaskForm from './TaskFrom'
import { useDispatch } from 'react-redux'
import { asyncEditTask } from './../reduxFiles/actions/tasksAction'

const EditTask = (props) => {
    const { id, status, title, handleToggle } = props

    const disptach = useDispatch()

    const formSubmission = (data) => {

        disptach(asyncEditTask(data, handleToggle))
    }

    return (
        <div>
            <TaskForm
                id={id}
                status={status}
                title={title}
                formSubmission={formSubmission}
            />

        </div>
    )
}

export default EditTask
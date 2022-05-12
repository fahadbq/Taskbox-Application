import React, { useEffect } from 'react'
import { asyncGetTasks } from './../reduxFiles/actions/tasksAction'
import { useDispatch } from 'react-redux'

import TasksList from './TasksList'
import AddTask from './AddTask'

const TasksContainer = (props) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(asyncGetTasks())
    }, [dispatch])

    return (
        <div className="container">
            <h1 style={{marginTop: "20px"}} >Task box</h1> <br />

            <TasksList />

            <AddTask />
        </div>
    )
}

export default TasksContainer
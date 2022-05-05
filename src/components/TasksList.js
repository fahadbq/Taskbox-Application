import React from 'react'
import { useSelector } from 'react-redux'
import TaskItem from './TaskItem'

const TasksList = (props) => {

    const { tasks } = useSelector((state) => state)

    return (
        <div style={{width: "500px"}}>
            {tasks.loading ? (<h2> loading </h2>
            ) : (
                <div>
                    <h2> My Tasks - {tasks.data.length} </h2> <hr />
                    {
                        tasks.data.map((task) => {
                            return (
                                <TaskItem key={task.id} {...task} />
                            )
                        })
                    }
                </div>
            )
            }
        </div>
    )
}

export default TasksList
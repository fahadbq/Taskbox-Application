import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

const TaskForm = (props) => {
    const { formSubmission, isSaved, id: slNo, title: taskTitle, status: taskStatus } = props

    const [id, setId] = useState(slNo ? slNo : uuidv4())
    const [title, setTitle] = useState(taskTitle ? taskTitle : '')
    const [status, setStatus] = useState(taskStatus ? taskStatus : false)

    useEffect(() => {
        if (isSaved) {
            setId(uuidv4())
            setTitle('')
            setStatus(false)
        }
    }, [isSaved])

    //handleChange event
    const handleChange = (e) => {
        const readNames = e.target.name
        if (readNames === 'text') {
            setTitle(e.target.value)
        } else if (readNames === 'checkbox') {
            setStatus(e.target.checked)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = {
            id,
            title,
            status
        }
        formSubmission(formData)
    }

    return (
        <div >

            <form onSubmit={handleSubmit}>
                <label> Title </label> <br />
                <input
                    type='text'
                    value={title}
                    onChange={handleChange}
                    name='text'
                    className='form-control'
                /> <br />

                <input
                    type='checkbox'
                    checked={status}
                    onChange={handleChange}
                    name='checkbox'
                    className='form-checkbox'
                />
                <label> completed </label>
                <br />

                <input type='submit' value='save' className='btn-success'/>
            </form>

        </div>
    )
}

export default TaskForm
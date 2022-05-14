import axios from "axios"

//caseStrings
export const C = {
    ADD_: 'ADD_TASK',
    GET_: 'GET_TASK',
    TOGGLE_LOADING: 'TOGGLE_LOADING',
    EDIT_: 'EDIT_TASK',
    REMOVE_: 'REMOVE_TASK'
}

//action functions 

export const asyncGetTasks = () =>{

    return (dispatch) =>{
        axios.get(`https://localhost:3033/api/tasks`)
            .then((res) =>{
                const taskArr = res.data
                dispatch(getTasks(taskArr))
                dispatch(toggleloading())
            }) // success
            .catch((err) =>{
                alert(err.message)
            }) // error
    }
}

export const asyncAddTask = (formData, checkIsSaved) => {
    
    return (dispatch) =>{
        axios.post(`https://localhost:3033/api/tasks`, formData)
            .then( (res) =>{
                const taskObj = res.data
                dispatch(addTask(taskObj))
                console.log(taskObj)
                checkIsSaved()
            })
            .catch( (err) =>{
                alert(err.message)
            })
    }
}

export const asyncEditTask = (formData, handleToggle) =>{
    
    return (dispatch) =>{
        axios.put(`https://localhost:3033/api/tasks/${formData.id}`, formData)
            .then((res) =>{
                const result = res.data
                dispatch(editTask(result))
                handleToggle()
            })
            .catch((err) =>{
                alert(err.message)
            })
    }
}

export const asyncRemoveItem = (id) =>{

    return (dispatch) =>{
        const confirmRemove = window.confirm('Are you sure ?')
        if(confirmRemove) {
            axios.delete(`https://localhost:3033/api/tasks/${id}`)
                .then((res) =>{
                    dispatch(removeItem(res.data.id))
                })
                .catch((err) => alert(err.message) )
        }
    }
}

//actual action creators

const getTasks = (taskArr) =>{

    return {
        type: C.GET_, payload: taskArr
    }
}

const toggleloading = () =>{

    return {
        type: C.TOGGLE_LOADING
    }
}

const addTask = (addData) =>{

    return {
        type: C.ADD_ , payload: addData
    }
}

const editTask = (taskObj) =>{

    return {
        type: C.EDIT_, payload: taskObj
    }
}

const removeItem = (taskId) =>{
    
    return { 
        type: C.REMOVE_, payload: taskId
    }
}

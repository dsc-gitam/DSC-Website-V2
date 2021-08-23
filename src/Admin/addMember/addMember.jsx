import React, {useState} from 'react'
import {firestore} from '../../Firebase/FirebaseConfig'
function AddMember() {
    const [name,setName] = useState("")
    const [position,setPosition] = useState("")
    const [zval,setZval] = useState("")
    const [linkedin,setLinkedin] = useState("")

    const handleChange = (e) =>{
        const {name,value} = e.target;
        if(name === 'name') setName(value)
        if(name === 'position') setPosition(value)
        if(name === 'zval') setZval(value)
        if(name === 'linkedin') setLinkedin(value)
    }
    const addMember = (e) =>{
        e.preventDefault();
        firestore.collection('CoreTeam').add({name,position,zval,linkedin})
        setName('')
        setPosition('')
        setLinkedin('')
        setZval('')
    }
    return (
        <div>
            <form onSubmit={addMember}>
                <lable for='name'>name</lable>
                <input value={name} name='name' onChange={handleChange} />

                <lable for='position'>position</lable>
                <input value={position} name='position' onChange={handleChange} />

                <lable for='linkedin'>linkedin</lable>
                <input value={linkedin} name='linkedin' onChange={handleChange} />
                <button type='submit'>
                    Add
                </button>
            </form>
        </div>
    )
}

export default AddMember

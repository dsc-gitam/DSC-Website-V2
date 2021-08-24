import React, {useState} from 'react'
import {firestore} from '../../Firebase/FirebaseConfig';
import './addMember.style.css'
// import addMembersFun from './addUtils';


function AddMember() {
    // addMembersFun()
    const [name,setName] = useState("")
    const [position,setPosition] = useState("")
    const [zval,setZval] = useState("")
    const [linkedin,setLinkedin] = useState("")
    const [insta,setInsta] = useState("")
    const [github,setGithub] = useState("")


    const handleChange = (e) =>{
        const {name,value} = e.target;
        if(name === 'name') setName(value)
        if(name === 'position') setPosition(value)
        if(name === 'zval') setZval(value)
        if(name === 'linkedin') setLinkedin(value)
        if(name === 'insta') setInsta(value)
        if(name === 'github') setGithub(value)


    }
    const addMember = (e) =>{
        e.preventDefault();
        firestore.collection('CoreTeam/memberlist/members').add({name,position,zval,linkedin})
        setName('')
        setPosition('')
        setLinkedin('')
        setZval('')
        setInsta('')
        setGithub('')
    }
    return (
        <div>
            <form className='addMember-form' onSubmit={addMember}>
                <div className='member-details'>

                <div>
                <lable htmlFor='name'>name</lable>
                <input className='form-control' value={name} name='name' onChange={handleChange} />
                </div>

                <div>
                <lable htmlFor='position'>position</lable>
                <input className='form-control' value={position} name='position' onChange={handleChange} />
                </div>

                <div>
                <lable htmlFor='linkedin'>linkedin</lable>
                <input className='form-control' value={linkedin} name='linkedin' onChange={handleChange} />
                </div>

                <div>
                <lable htmlFor='insta'>insta</lable>
                <input className='form-control' value={insta} name='insta' onChange={handleChange} />
                </div>

                <div>
                <lable htmlFor='github'>github</lable>
                <input className='form-control' value={github} name='github' onChange={handleChange} />
                </div>
                </div>
                
                <button className='addMember-btn' type='submit'>
                    Add
                </button>
            </form>
        </div>
    )
}

export default AddMember

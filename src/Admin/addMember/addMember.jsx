import React, {useState} from 'react'
import {firestore,storage} from '../../Firebase/FirebaseConfig';
import 'firebase/storage';
import './addMember.style.css'
// import './addUtils';


function AddMember() {
    const [name,setName] = useState("")
    const [position,setPosition] = useState("")
    const [zval,setZval] = useState("")
    const [linkedin,setLinkedin] = useState("")
    const [insta,setInsta] = useState("")
    const [github,setGithub] = useState("")
    const [rollNo,setRollNo] = useState("")
    const [twitter,setTwitter] = useState("")

    const handleChange = (e) =>{
        const {name,value} = e.target;
        if(name === 'name') setName(value)
        if(name === 'position') setPosition(value)
        if(name === 'zval') setZval(value)
        if(name === 'linkedin') setLinkedin(value)
        if(name === 'insta') setInsta(value)
        if(name === 'github') setGithub(value)
        if(name === 'twitter') setTwitter(value)
        if(name === 'rollNo') setRollNo(value)


    }
    const addMember = (e) =>{
        e.preventDefault();
        firestore.collection('CoreTeam/memberlist/members').add({name,position,zval,linkedin,insta,github,rollNo,twitter})
        // storage.add('')
        alert("DONE!")
        setName('')
        setPosition('')
        setLinkedin('')
        setZval('')
        setInsta('')
        setGithub('')
        setTwitter('')
        setRollNo('')
    }
    return (
        <div>
            <form className='addMember-form' onSubmit={addMember}>
                <div className='member-details'>

                <div>
                <lable htmlFor='name'>Name</lable>
                <input placeholder="Please Enter Your Name" className='form-control' value={name} name='name' onChange={handleChange} />
                </div>

                <div>
                <lable htmlFor='position'>Position</lable>
                <input placeholder="Your Position in GDSC" className='form-control' value={position} name='position' onChange={handleChange} />
                </div>

                <div>
                <lable htmlFor='linkedin'>Linkedin</lable>
                <input placeholder="Your Linkedin Prifile Link" className='form-control' value={linkedin} name='linkedin' onChange={handleChange} />
                </div>

                <div>
                <lable htmlFor='insta'>Instagram</lable>
                <input placeholder="Your Instagram Prifile Link" className='form-control' value={insta} name='insta' onChange={handleChange} />
                </div>

                <div>
                <lable htmlFor='github'>GitHub</lable>
                <input placeholder="Your GitHub Prifile Link" className='form-control' value={github} name='github' onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="twitter">Twitter</label>
                    <input placeholder="Your Twitter Prifile Link" className='form-control' value={twitter} name='twitter' onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="rollNo">Roll Number</label>
                    <input placeholder="Enter Your Full Roll Number" className='form-control' value={rollNo} name='rollNo' onChange={handleChange} />
                </div>
                </div>
                <div className="adminPageButton">
                <button className='addMember-btn' type='submit'>
                    Add
                </button>
                </div>
            </form>
        </div>
    )
}

export default AddMember

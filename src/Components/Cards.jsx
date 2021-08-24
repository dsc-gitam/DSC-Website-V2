import React, {useState,useEffect} from 'react'
import CardUI from "./CardUI";
import { firestore } from '../Firebase/FirebaseConfig';

const Cards = () => {
    const [members,setMembers] = useState([])
    useEffect(() =>{
        firestore.collection('CoreTeam/memberlist/members').get()
        .then(items=>{
            const arr =[]
            items.docs.forEach(item=>arr.push(item.data()))
            setMembers(arr)
        })
    },[])
    return (
        <div className="team">
            <div className="container-team mt-5 pt-5 mb-4">
            <h2 className="text-primary text-center mb-3">Our Team</h2>
            <div class='cards-container'>
            {members.map(member=>
            <CardUI src="/Images/Guru.jpg" title={member.name} position={member.position}
                    twitter={member.twitter}
                    github={member.github}
                    linkedin={member.linkedIn}
                    insta={member.instagram}
                    />
                    )}
            </div>
            </div>
        </div>
           
    )
}

export default Cards;
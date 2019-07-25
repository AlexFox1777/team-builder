import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "./components/Form";
import Members from "./components/Members";

function App() {
    const [listOfMembers, setListOfMembers] = useState( [] );
    const addToListOfMembers = member => {
        setListOfMembers( [...listOfMembers, member] );

    };

    const [ editedMember, setEditedMember] = useState({});
  /*  const editMember = (member) => {
        setEditedMember( member );
    };*/
    const editMember = (member) => {
        setEditedMember( member );
    };
    function modifyTeam(changedMember) {
        const members = listOfMembers.map(member => {
            if (member === editedMember) {
                return (changedMember);
            } else {
                return member;
            }
        })
        setListOfMembers(members);
    }
  return (
    <div className="App">
        {console.log("list of members - ",listOfMembers)}
      <Form addToListOfMembers={addToListOfMembers} memberToEdit={editedMember} setMember={modifyTeam}/>
      <Members member={listOfMembers}  memberToEdit={editMember} />
    </div>
  );
}

export default App;

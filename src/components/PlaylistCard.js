import React from 'react'
import firebase from '../firebase';
import { useHistory } from "react-router-dom";
function PlaylistCard({user, id}) {
    const history = useHistory();
    
    const handleClick=(e)=>{
   firebase.firestore().collection('users').doc(id).delete();
   history.push('/');
  };
    return (
        <div>
        <div className="playlist-detail" >
        <img  src={user.Poster}></img>
        <p>{user.Title}</p>
        <p> {user.Year}</p>
        <button className="playlist-card-button" onClick={handleClick}>Remove</button>
        </div>
        </div>
    )
}

export default PlaylistCard



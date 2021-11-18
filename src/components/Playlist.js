import React from 'react';
import { useEffect, useState} from 'react';
import MovieCard from './MovieCard';
import firebase from '../firebase';
import { useAuth } from "../contexts/AuthContext";
import '../styles/Playlist.css';
import PlaylistCard from './PlaylistCard';
function Playlist() {
    const [users, setUsers] = useState([]);
    const [ids,setIds]=useState([]);
    const { currentUser } = useAuth()
useEffect(() => {
    firebase.firestore().collection('users').get().then((snapshot =>{
     setUsers(snapshot.docs.map(doc=>doc.data())); 
     setIds(snapshot.docs.map(doc=> doc.id))
    }))
   }, []);
  console.log(users);
return (
    <div className="playlist-card">
      {users && users.map((user, i)=>{
        if(user.User===currentUser.email)
        return <PlaylistCard key={i} user={user} id={ids[i]} />
      })}
    </div>
)
}

export default Playlist

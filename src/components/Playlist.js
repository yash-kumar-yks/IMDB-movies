import React from 'react'

function Playlist() {
    useEffect(() => {
        firebase.firestore().collection('users').get().then((snapshot =>{
         console.log(snapshot.docs.map(doc=>doc.data())); 
        }))
       }, [])
    return (
        <div>
            
        </div>
    )
}

export default Playlist

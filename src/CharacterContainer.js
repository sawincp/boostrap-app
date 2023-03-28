import React, {useState, useEffect} from "react"

import CharacterCard from "./CharacterCard"

const CharacterContainer =() =>{

    const min =1, max=42

    const randomNum = Math.floor(Math.random()*(max-min +1))+min


    const [characters, setCharactes]=useState()

    useEffect(()=>{
        fetch(`https://rickandmortyapi.com/api/character?page=${randomNum}`)
            .then(r => r.json())
            .then(data => setCharactes(data.results))
        
    }, [])
    if(!characters) return <p>loading..</p>

    // console.log(characters)


    return(

        <div className="CharacterContainer"> 
            <CharacterCard characters={characters}/>
   
        </div>

        

    )
}

export default CharacterContainer
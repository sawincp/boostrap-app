import React, {useState, useEffect} from "react";

const CharacterContainer =() =>{

    const [characters, setCharactes]=useState([])

    useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/character')
            .then(r => r.json())
            .then(data => setCharactes(data))
    }, [])


    return(
        <div className="CharacterContainer"> 

            <CharacterList characters={characters}/>
        
        </div>

        

    )
}

export default CharacterContainer
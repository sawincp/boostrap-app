import React, {useState, useEffect} from "react";
import CharacterList from "./CharacterList"

const CharacterContainer =() =>{

    const [characters, setCharactes]=useState([])

    useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/character')
            .then(r => r.json())
            .then(data => setCharactes(data.results))
    }, [])


    return(
        <div className="CharacterContainer"> 

            <CharacterList characters={characters}/>
        
        </div>

        

    )
}

export default CharacterContainer
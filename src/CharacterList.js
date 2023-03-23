import React from "react";
import CharacterCard from "./CharacterCard";

const CharacterList=({ characters })=>{

    const characterInfo = characters.map((character)=>{
        return(
            <CharacterCard
                key={character.id}
                character={character}
            />
        )
    })

    return(
        <div></div>

    )
}
export default CharacterList
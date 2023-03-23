import React from "react";

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
        <div>{characterInfo}</div>

    )
}
export default CharacterList
import React from "react";
import CharacterCard from "./CharacterCard";

const CharacterList=({ characters })=>{

    const firstCharacterSetInfo = characters.slice(0,3).map((firstSet=>{
        return(
            <CharacterCard
                key={firstSet.id}
                firstSet={firstSet}
                
            />
        )
        

    }))

    // const secondCharacterSetInfo = characters.slice(3,6).map((secondSet=>{
    //     return(
    //         <CharacterCard
    //             key={secondSet.id}
    //             secondSet={secondSet} />
    //     )

    // }))


    return(
       <div>
        {firstCharacterSetInfo}
        {/* {secondCharacterSetInfo} */}
       </div>

    )
}
export default CharacterList
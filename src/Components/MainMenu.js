
import React ,{useContext}from "react";
import { QuizContext } from "../Helpers/Contexts";
import "../App.css"; 

export default function MainMenu(){

    const{gameState,setgameState}=useContext(QuizContext)

return(
    <div className="Menu">

        <button 
        onClick ={() => {
            setgameState("quiz");
        }}
        > start quiz </button>
    </div>


);
}
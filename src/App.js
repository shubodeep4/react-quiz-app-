
import React, { useState , useContext } from 'react';
import './App.css';
import MainMenu from "./Components/MainMenu"
import Quiz from "./Components/Quiz"
import EndScreen from "./Components/EndScreen"
import {QuizContext} from "./Helpers/Contexts"
function App() {
const[gameState,setgameState]=useState("menu");

const[score,setScore]=useState(0);

  return (
    <div className="App">
     <h1>QUIZ TIME...!</h1> 
      
      
      <QuizContext.Provider value={{gameState,setgameState,score,setScore}}>
      {gameState === "menu" && < MainMenu/>}
      {gameState === "quiz" && < Quiz/>}
      {gameState === "endScreen" && <EndScreen/>}
      </QuizContext.Provider>
    </div>
  );
}
export default App;

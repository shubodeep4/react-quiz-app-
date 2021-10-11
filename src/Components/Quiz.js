import React ,{useState,useContext} from "react";
import { QuizContext } from "../Helpers/Contexts";
import {Questions} from "../Helpers/QuestionBank"
import EndScreen from "./EndScreen";

export default function Quiz(){

    

    const[currQuestion,setcurrQuestion]=useState(0);
    const[optionChoose,setoptionChoose]=useState("")

    const{score,setScore,setgameState }=useContext(QuizContext)

    const nextQuestion = () => {
        if(Questions[currQuestion].answer===optionChoose){
            setScore(score+1);
        }
        setcurrQuestion(currQuestion+1);
    };

    const FinishQuiz = () => {
        if(Questions[currQuestion].answer === optionChoose){
            setScore(score+1);
        }

        setgameState("endScreen");
    };


    return(
    <div className= "Quiz">
        <h1>{Questions[currQuestion].prompt}</h1>
        <div className="options">
            <button onClick={()=> setoptionChoose("C")}> {Questions[currQuestion].optionC}</button>
            <button onClick={()=> setoptionChoose("A")}> {Questions[currQuestion].optionA}</button>
            <button onClick={()=> setoptionChoose("D")}> {Questions[currQuestion].optionD}</button>
            <button onClick={()=> setoptionChoose("B")}> {Questions[currQuestion].optionB}</button>
        </div>

        {currQuestion === Questions.length - 1 ?(
            <button onClick={FinishQuiz}>Finish Quiz</button>
        ):(
            <button onClick={nextQuestion}>Next Questions</button>
            )}





            
            </div>

    );
} 


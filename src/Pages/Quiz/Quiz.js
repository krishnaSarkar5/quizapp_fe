import React, { useEffect,useState } from 'react'
import { CircularProgress } from '@material-ui/core';

const Quiz = ({name,questions,score,setScore,setQuestions}) => {

  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);

  const handleShuffle = (opt)=>{
    return opt.sort(()=> Math.random()-0.5);
  }
console.log("options ",options);

  useEffect(()=>{
    console.log("+++ inside useeffect quiz.js : ",questions);
  //   console.log(questions[currQues]?.correct_answer)
  //  const a= questions[currQues]?.incorrect_answers
  //   console.log(a)
  //   console.log([questions[currQues]?.correct_answer].concat(questions[currQues]?.incorrect_answers))
  //   const arr= handleShuffle([
  //                       questions[currQues]?.correct_answer,
  //                       a,
  //                   ]) 
    setOptions(
      (questions && handleShuffle([questions[currQues]?.correct_answer].concat(questions[currQues]?.incorrect_answers)) )
    )
  },[questions]);

  return (
    <div>
      <span className='subtitle'> Welcome,{name} </span>
      {questions ? (<></>):(
        <CircularProgress style={{margin:"auto",display:"flex",justifyContent:"center"}}
                          color='inherit'
                          size={150}
                          thickness={1}/>
      )}
    </div>
  )
}

export default Quiz
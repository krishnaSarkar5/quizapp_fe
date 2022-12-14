
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import Home from './Pages/Home/Home';
import Quiz from './Pages/Quiz/Quiz';
import Result from './Pages/Result/Result';
import {useState} from "react";
import axios from 'axios';

function App() {
const [name, setName] = useState("");
const [questions, setQuestions] = useState([]);
const [score, setScore] = useState(0);


  const fetchQuestions =  (category="",difficulty="")=>{
    // const {data} = await axios.get(
    //   `https://opentdb.com/api.php?amount=10${category && `&category=${category}`}${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    // )


      axios.get(`https://opentdb.com/api.php?amount=10${category && `&category=${category}`}${difficulty && `&difficulty=${difficulty}`}&type=multiple`)
      .then((response)=>{
        setQuestions(response.data.results)
      })


    // console.log(data.results);
    // setQuestions(data.results);
    // console.log(questions);
  };
  let allQuestions = questions;
  console.log(allQuestions);
  return (
    <BrowserRouter>
     <div className='app' style={{backgroundImage:"url(./backgroundImage.png)"}}>
        <Header/>
        <Routes>
          <Route path='/' element={<Home name={name}
                                         setName={setName}
                                         fetchQuestions={fetchQuestions} />}/>
          <Route path='/quiz' element={<Quiz 
                                             name={name} 
                                             questions={questions}
                                             score={score}
                                             setScore={setScore}
                                             setQuestions={setQuestions}/>}/>
          <Route path='/result' element={<Result/>}/>
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

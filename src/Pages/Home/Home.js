import { Button, MenuItem, TextField } from '@material-ui/core'
import React from 'react'
import './Home.css'
import Categories, {} from '../../Data/Category'
import {useState} from "react"
import { useNavigate } from 'react-router'
import ErrorMessage from '../../components/ErrorMessages/ErrorMessage'

const Home = ({name,setName,fetchQuestions}) => {

   const [category, setCategory] = useState("");
   const [dificulty, setDificulty] = useState("");
   const [error, setError] = useState(false);
   const navigate = useNavigate();


   const handleSubmit=()=>{
    if(!category||!dificulty||!name){
      setError(true);
      return;
    }
    else{
      setError(false);
      fetchQuestions(category,dificulty);
      navigate('/quiz');
    }
   }

  return (
    <div className='content'>
      <div className='settings'>
        <span style={{fontSize:30}}>Quiz Settings</span>
        {error && <ErrorMessage>Please fill all the fields</ErrorMessage>}
        <div className='settings_select'>
          <TextField style={{marginBottom:25}} 
                    label='Enter Your Name' 
                    variant='outlined'
                    onChange={(e)=>{setName(e.target.value)}}/>
          <TextField style={{marginBottom:30}} 
                      select label='select Category' 
                      variant='outlined'
                      onChange={(e)=>{setCategory(e.target.value)}}
                      value={category}>
            
            {
          
            Categories.map((cat)=>(
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))
            }          
          </TextField>
          <TextField style={{marginBottom:30}} 
                     select label='Select Dificulty' 
                     variant='outlined'
                     onChange={(e)=>{setDificulty(e.target.value)}}
                     value={dificulty}>
            <MenuItem key='Easy' value='easy'>Easy</MenuItem>
            <MenuItem key='Medium' value='medium'>Medium</MenuItem>
            <MenuItem key='Hard' value='hard'>Hard</MenuItem>
          </TextField>

            <Button variant='contained' 
                    color='primary' 
                    size='large'
                    onClick={handleSubmit}>
              Start Quiz
            </Button>

        </div>
      </div>

      <img src='/quiz.svg' className='banner' alt='quiz img'/>
      
      

    </div>
  )
}

export default Home
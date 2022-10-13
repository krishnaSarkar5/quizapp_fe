import { MenuItem, TextField } from '@material-ui/core'
import React from 'react'
import './Home.css'
import Categories, {} from '../../Data/Category'

const Home = () => {
  return (
    <div className='content'>
      <div className='settings'>
        <span style={{fontSize:30}}>Quiz Settings</span>

        <div className='settings_select'>
          <TextField style={{marginBottom:25}} label='Enter Your Name' variant='outlined'/>
          <TextField style={{marginBottom:30}} select label='select Category' variant='outlined'>
            
            {
          
            Categories.map((cat)=>(
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))
            }          
          </TextField>
          <TextField style={{marginBottom:30}} select label='Select Dificulty' variant='outlined'>
            <MenuItem key='Easy' value='easy'>Easy</MenuItem>
            <MenuItem key='Medium' value='medium'>Medium</MenuItem>
            <MenuItem key='Hard' value='hard'>Hard</MenuItem>
          </TextField>


        </div>
      </div>

      <img src='/quiz.svg' className='banner' alt='quiz img'/>
      
      

    </div>
  )
}

export default Home
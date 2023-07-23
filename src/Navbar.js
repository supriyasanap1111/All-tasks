import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <ul className='links'>
            <Link to="/" style={{marginLeft:"0px"}}>Task2A</Link>
            <Link to="/task2">Task2B</Link>
            <Link to="/task3">Task3</Link>
            <Link to="/task4">Task4</Link>
        </ul>
    </div>
  )
}

export default Navbar
import React, { useState } from 'react'
import axios from 'axios'
import Card from './card'
import './style.css'
import bg2 from '../images/bg2.png'
function AppMain() {
    const [search , setSearch] = useState('')
    const [bookData , setBookData] = useState([])

    const bookSearch = (ev)=>{
        if(ev.key === 'Enter'){
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyCcUmgnzoc3JkpkckfB_F0SG5zHiJtT_j0&maxResults=40`)
            .then(res=>setBookData(res.data.items))
            .catch(err=>console.log(err))
        }
    }
    return (
        <section>
            <div className='header'>
                <div className='row1'>
                    <h1>Room without books like <br/>Body without soul</h1>
                </div>
                <div className='row2'>
                    <h2>Find Your Book</h2>
                    <div className='search'>
                        <input type='input' placeholder='Enter Your Book name' value={search} onChange={e => setSearch(e.target.value)} onKeyPress={bookSearch}/>
                        <button><i className='fas fa-search'></i></button>
                    </div>
                    <img src={bg2} alt='header img'/>
                </div>
            </div>
            <div className='container'>
                <Card books={bookData} />
            </div>
        </section>
    )
}

export default AppMain

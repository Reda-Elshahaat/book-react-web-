import React from 'react'
import img from '../images/book.jpg'

const Modal = ({showModal, setShowModal, bookItem}) =>  {
    if(!showModal){
        return null
    }else {
        return (
            <>
                <div className='overlay'>
                    <div className='overlay-inner'>
                        <button className='close' onClick={() => setShowModal(false)}><i className='fas fa-times'></i></button>
                        <div className='inner-box'>
                            <img src={bookItem.volumeInfo.imageLinks.smallThumbnail} alt='book img'/>
                            <div className='info'>
                                <h1>{bookItem.volumeInfo.title}</h1>
                                <h3>{bookItem.volumeInfo.categories}</h3>
                                <h4>{bookItem.saleInfo.country} <span>{bookItem.volumeInfo.publishedDate}</span> </h4><br/>
                                <a href={   bookItem.volumeInfo.infoLink}><button>More</button></a>
                            </div>
                        </div>
                        <p className='description'>{bookItem.volumeInfo.description}</p>
                    </div>
                </div>    
            </>
        )
    }
}
export default Modal
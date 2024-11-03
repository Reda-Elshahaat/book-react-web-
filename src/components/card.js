import React ,{useState} from "react";
import Modal from "./modal";
const Card = (props) => {
    const [showModal , setShowModal] = useState(false)
    const [bookItem , setBookItem] = useState()
    return(
        <>
            {
                props.books.map((book) => {
                    let thumbnail =  book.volumeInfo.imageLinks.smallThumbnail
                    let amount = book.saleInfo.saleability
                    if(thumbnail !== undefined && amount !== undefined){
                        return(
                            // href={book.saleInfo.buyLink}
                            <>
                                <div className="card" onClick={()=> {setShowModal(true);setBookItem(book)}}>
                                    <img src={thumbnail} alt=""/>
                                    <div className="bottom">
                                        <h3 className="title">{book.volumeInfo.title}</h3>
                                        <p className="amount">&#8377;{amount}</p>
                                    </div>
                                </div>
                                <Modal showModal={showModal} setShowModal={setShowModal} bookItem={bookItem}/>
                            </>
                        )
                    }
                })
            }
        </>
    )
}
export default Card
import React, {FC, useEffect, useState} from 'react';
import {Row, Col, Container} from "react-bootstrap";
import '../../assets/styles/partials/Books.scss';
import AddBookForm from "./AddBookForm";
import { Plus} from 'react-feather';
import UpdateBookForm from "./UpdateBookForm";
import IBook from "../../interfaces/IBook";
import NoBooks from "../Books/NoBooks";
import BookListLine from "./BookListLine";

const Books: FC = () => {
    // Visibility of 'AddBook' form
    const [isVisibleBookForm, setIsVisibleBookForm] = useState<boolean>(false);
    // Visibility of 'UpdateBook' form
    const [isVisibleBookUpdateForm, setIsVisibleBookUpdateForm] = useState<boolean>(false);
    //BookList creation
    const[bookList,setBookList]=useState<IBook[]>([])
    //geting the author names
    //const [authorsList, setAuthorsList] = useState<IAuthor[]>([]);
    //Book Update
    const[bookToBeUpdate, setBookToBeUpdate] = useState<number | null>(null);

    let BookId: number = 1;

    // Set 'AddBook' form visible
    const handleClickAddBookEvent = () => {
        setIsVisibleBookForm(true);
    }
    // Set 'AddBook' form invisible
    const handleClickCloseFormEvent = () => {
        setIsVisibleBookForm(false);
    }
    // Set 'AddBookUpdate' form visible
    /*
    const handleClickBookUpdateEvent=()=>{
        setIsVisibleBookUpdateForm(true);
    }*/

    // Set 'AddBookUpdate' form invisible
    const handleClickCloseBookUpdateEvent=()=>{
        setIsVisibleBookUpdateForm(false);
    }
    // Add an 'Book'
    const handleCreateBookEvent = (event: React.FormEvent, title: string,isbn:string,authorname:string) => {

        event.preventDefault();
        const newBook: IBook = { Title: title,ISBN:isbn,AuthorName:authorname };
        const books = bookList.slice();
        books.push(newBook);
        setBookList(books);

    }

    //Delete an 'Author'
    const handleDeleteBookEventEvent = (id: number) => {
        const books: IBook[] = bookList.slice();
        books.splice(id-1, 1);
        setBookList(books);
    }

    // Update an 'Author'
    const handleUpdateBookRequestEvent = (id: number) => {
        setIsVisibleBookForm(false);
        setIsVisibleBookUpdateForm(true);
        setBookToBeUpdate(id);
    }
    useEffect(() => {
        if(bookToBeUpdate === null) {
            return;
        }

    }, [bookToBeUpdate]);

    const handleUpdateBookEvent = (event: React.FormEvent, title: string,isbn:string,authorname:string) => {
        event.preventDefault();
        if(bookToBeUpdate === null) {
            return;
        }
        const books = bookList.slice();
        const newBook: IBook = { Title: title,ISBN:isbn,AuthorName:authorname };
        books.splice(bookToBeUpdate-1, 1, newBook);
        setBookList(books);
        setBookToBeUpdate(null);
        setIsVisibleBookUpdateForm(false);

    }
    return(
        <Container fluid>
            <Row className="Books">
                <Col xs={12}>
                    <p className="title">Books</p>
                </Col>
                {/*<Col xs={12}>*/}
                {/*    <p className="no-books"><i>No books listed here</i></p>*/}
                {/*</Col>*/}

            {(bookList.length === 0) &&<NoBooks/>}
            <Col xs={12}>
                <ul className="author-list px-0">
                    {bookList.map(
                        (book: IBook) => {
                            return(
                                <BookListLine
                                    title={book.Title}
                                    id={BookId}
                                    key={BookId++}
                                    delete={handleDeleteBookEventEvent}
                                    update={handleUpdateBookRequestEvent}
                                />
                            );
                        }
                    )}
                </ul>
            </Col>
                <Col xs={12}>
                    <p className="add-book pt-3">
                        <Plus color="#034fa5" className="plus" onClick={() => handleClickAddBookEvent()} />
                        <span className="add-book-text" onClick={() => handleClickAddBookEvent()} >
                            Add Book
                        </span>
                    </p>
                </Col>
                <Col xs={12}>
                    {isVisibleBookForm && <AddBookForm
                        createBook={handleCreateBookEvent} closeForm={handleClickCloseFormEvent} />}
                    {isVisibleBookUpdateForm &&<UpdateBookForm closeForm={handleClickCloseBookUpdateEvent}
                    updateBook={handleUpdateBookEvent}/>}
                </Col>
            </Row>
        </Container>
    );
}

export default Books
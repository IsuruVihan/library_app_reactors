import React, {FC, useState} from 'react';
import {Row, Col, Container} from "react-bootstrap";
import '../../assets/styles/partials/Books.scss';
import AddBookForm from "./AddBookForm";
import { Plus } from 'react-feather';
import UpdateBookForm from './UpdateBookForm';
import BookListLine from './BookListLine';
import IBook from '../../interfaces/IBook';
import NoBooks from './NoBooks';
import IAuthor from "../../interfaces/IAuthor";
import UpdateInProgressModal from "../UpdateInProgressModal";
import CreateInProgressModal from "../CreateInProgressModal";

type BooksProps = {
    authorsAvailable: () => IAuthor[]
};

const Books: FC<BooksProps> = (props) => {
    // Book list number in the list (key)
    let bookId: number = 1;

    // Visibility of Update in progress modal
    const [isVisibleUpdateInProgressModal, setIsVisibleUpdateInProgressModal] = useState<boolean>(false);
    // Visibility of Create in progress modal
    const [isVisibleCreateInProgressModal, setIsVisibleCreateInProgressModal] = useState<boolean>(false);
    // Visibility of 'AddBook' form
    const [isVisibleBookForm, setIsVisibleBookForm] = useState<boolean>(false);
    // Visibility of 'UpdateBook' form
    const [isVisibleUpdateBookForm, setIsVisibleUpdateBookForm] = useState<boolean>(false);
    // Books
    const [booksList, setBooksList] = useState<IBook[]>([]);
    // Book to be update
    const [bookToBeUpdate, setBookToBeUpdate] = useState<number | null>(null);

    // Close update in progress modal
    const closeUpdateInProgressModal = () => {
        setIsVisibleUpdateInProgressModal(false);
    }
    // Close create in progress modal
    const closeCreateInProgressModal = () => {
        setIsVisibleCreateInProgressModal(false);
    }
    // Set 'AddBook' form visible
    const handleClickAddBookEvent = () => {
        if (isVisibleUpdateBookForm) {
            setIsVisibleUpdateInProgressModal(true);
            return;
        }
        if (isVisibleBookForm) {
            setIsVisibleCreateInProgressModal(true);
            return;
        }
        setIsVisibleBookForm(true);
    }
    // Set 'AddBook' form invisible
    const handleClickCloseFormEvent = () => {
        setIsVisibleBookForm(false);
    }
    // Set 'UpdateBook' form invisible
    const handleClickCloseUpdateFormEvent = () => {
        setIsVisibleUpdateBookForm(false);
    }
    // Add a 'Book'
    const handleCreateBookEvent = (event: React.FormEvent, title: string, isbn: string, author: string) => {
        event.preventDefault();
        const newBook: IBook = { bookTitle: title, bookIsbn: isbn, bookAuthor: author };
        const books = booksList.slice();
        books.push(newBook);
        setBooksList(books);
        setIsVisibleBookForm(false);
        setIsVisibleUpdateBookForm(false);
    }
    // Delete a 'Book'
    const handleDeleteBookEvent = (id: number) => {
        const books: IBook[] = booksList.slice();
        books.splice(id-1, 1);
        setBooksList(books);
        setIsVisibleUpdateBookForm(false);
    }
    // Update a 'Book'
    const handleUpdateBookRequestEvent = (id: number) => {
        if(isVisibleUpdateBookForm) {
            setIsVisibleUpdateInProgressModal(true);
            return;
        }
        if(isVisibleBookForm) {
            setIsVisibleCreateInProgressModal(true);
            return;
        }
        setIsVisibleBookForm(false);
        setIsVisibleUpdateBookForm(true);
        setBookToBeUpdate(id);
    }
    const handleUpdateBookEvent = (event: React.FormEvent, title: string, isbn: string, author: string) => {
        if(bookToBeUpdate === null) {
            return;
        }

        const books = booksList.slice();
        const newBook: IBook = {bookTitle: title, bookIsbn: isbn, bookAuthor: author};
        books.splice(bookToBeUpdate-1, 1, newBook);
        setBooksList(books);
        setBookToBeUpdate(null);
        setIsVisibleUpdateBookForm(false);
        event.preventDefault();
    }

    return(
        <Container fluid>
            <UpdateInProgressModal
                isVisible={isVisibleUpdateInProgressModal}
                closeModal={closeUpdateInProgressModal}
            />
            <CreateInProgressModal
                isVisible={isVisibleCreateInProgressModal}
                closeModal={closeCreateInProgressModal}
            />
            <Row className="Books">
                <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                    <p className="title">Books</p>
                </Col>
                {(booksList.length === 0) && <NoBooks />}
                <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                    <ul className="book-list px-0">
                        {booksList.map(
                            (book: IBook) => {
                                return(
                                    <BookListLine
                                        title={book.bookTitle}
                                        isbn={book.bookIsbn}
                                        author={book.bookAuthor}
                                        id={bookId++}
                                        key={bookId}
                                        delete={handleDeleteBookEvent}
                                        updateRequest={handleUpdateBookRequestEvent}
                                    />
                                );
                            }
                        )}
                    </ul>
                </Col>
                <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                    <p className="add-book pt-3">
                        <Plus color="#034fa5" className="plus" onClick={() => handleClickAddBookEvent()} />
                        <span className="add-book-text" onClick={() => handleClickAddBookEvent()} >
                            Add Book
                        </span>
                    </p>
                </Col>
                <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                    {
                        isVisibleBookForm
                            &&
                        <AddBookForm
                            closeForm={handleClickCloseFormEvent}
                            createBook={handleCreateBookEvent}
                            authors={props.authorsAvailable}
                        />
                    }
                    {
                        isVisibleUpdateBookForm
                            &&
                        <UpdateBookForm
                            currentTitle={bookToBeUpdate === null ? "" : booksList[bookToBeUpdate-1].bookTitle}
                            currentIsbn={bookToBeUpdate === null ? "" : booksList[bookToBeUpdate-1].bookIsbn}
                            currentAuthor={bookToBeUpdate === null ? "" : booksList[bookToBeUpdate-1].bookAuthor}
                            closeForm={handleClickCloseUpdateFormEvent}
                            updateBook={handleUpdateBookEvent}
                            authors={props.authorsAvailable}
                        />
                    }
                </Col>
            </Row>
        </Container>
    );
}

export default Books;
import PropTypes  from 'prop-types'
export default function BookCard({ book, toggleStatus }) {
    return (
        <div style={{maxWidth: '540px'}} className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={book.coverImage} className="img-fluid rounded-start" alt={book.title} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{book.title}</h5>
                        <h5>{book.authors}</h5>
                        <p className="card-text">{book.description}</p>
                        <div>
                            <i className={`bi ${book.haveRead ? "bi-bookmark-check" : "bi-bookmark"}`}></i>  
                            <button className="statusButton" onClick={() => {toggleStatus(book.id)}}> {book.haveRead ? 'Have read it' : "Want to read it"} </button>
                        </div>
                        <p className="card-text"><small className="text-body-secondary">{book.year}</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
  }

  BookCard.propTypes = {
    book: PropTypes.shape({
        title: PropTypes.string.isRequired,
        authors:  PropTypes.string.isRequired,
        year:  PropTypes.string.isRequired,
        description:  PropTypes.string.isRequired,
        coverImage:  PropTypes.string.isRequired,
        haveRead:  PropTypes.bool.isRequired,
        id: PropTypes.string.isRequired,
    }),
    toggleStatus: PropTypes.func.isRequired
  }
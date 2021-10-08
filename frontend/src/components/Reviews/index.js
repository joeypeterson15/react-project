import "./Reviews.css"

function Reviews ({ reviews }) {
    return (
        <>
            <div className="reviews-container">
                <div className="text">
                    Reviews
                </div>
                <form className="add-review-form">
                    <textarea id="text-submit-review" placeholder="have you slept there? Leave a review for fellow napcampers!" id="review-textbox"></textarea>
                    <button>POST</button>
                </form>
                <div className="reviews-detail-page">
                    {reviews.map((review) => (
                        <div>
                            <p className="text review-text">{review.content}</p>
                        </div>
                    ))}
                    <h2 className="line"></h2>
                </div>

            </div>
        </>
    )
}

export default Reviews;

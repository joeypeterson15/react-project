import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getSpots } from '../../store/spots';
import { getReviews } from '../../store/reviews';
import { useEffect } from 'react';
import  Reviews  from '../Reviews/index.js'
import './SpotIdPage.css'

export default function SpotIdPage () {
    const { spotId } = useParams()

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getSpots())
        dispatch(getReviews(spotId))
    }, [dispatch])


    const spot = useSelector(state => state.spots[spotId])
    const reviews = useSelector(state => Object.values(state.reviews))
    return (
        <>
            <div className="spot-detail-div">
                <img className="spot-detail-images" alt={spot?.id} src={spot?.imageUrl}></img>
                <img className="spot-detail-images" alt={spot?.id} src={spot?.imageUrl}></img>
                <img className="spot-detail-images" alt={spot?.id} src={spot?.imageUrl}></img>
            </div>
            {/* <div className="reviews-detail-page"> Reviews
                {reviews.map((review) => (
                    <p>{review.content}</p>
                ))}
            </div> */}
            <Reviews reviews={reviews}/>
        </>
    );
}

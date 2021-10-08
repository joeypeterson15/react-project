import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getSpots } from '../../store/spots';
import { useEffect } from 'react';
import './SpotIdPage.css'

export default function SpotIdPage () {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getSpots())
    }, [dispatch])

    const { spotId } = useParams()
    const spot = useSelector(state => state.spots[spotId])
    return (
        <div className="spot-detail-div">
            <img className="spot-detail-images" alt={spot.id} src={spot.imageUrl}></img>
            <img className="spot-detail-images" alt={spot.id} src={spot.imageUrl}></img>
            <img className="spot-detail-images" alt={spot.id} src={spot.imageUrl}></img>
        </div>
    );
}

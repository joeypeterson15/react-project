import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getSpots } from '../../store/spots';
import { useEffect } from 'react';

export default function SpotIdPage () {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getSpots())
    }, [dispatch])

    const { spotId } = useParams()
    const spot = useSelector(state => state.spots.list[spotId])
    return (
        <div>{spot.category}</div>
    );
}

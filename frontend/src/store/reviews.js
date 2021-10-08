const LOAD = 'reviews/LOAD'


//actions

const load = list => ({
    type: LOAD,
    list,
})

export const getReviews = (spotId) => async dispatch => {
    const response = await fetch(`/api/reviews/${spotId}`)
    console.log('HELLOOOO')

    if (response.ok) {
        const list = await response.json();
        console.log(list)
        dispatch(load(list))
    }
}

const initialState = {
    // reviews: []
}
const reviewsReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD: {
            const allReviews = {};
            action.list.forEach(review => {
                allReviews[review.id] = review
            });
            return {
                ...allReviews,
                ...state,
            }
        }
        default:
        return state;
    }
}

export default reviewsReducer;

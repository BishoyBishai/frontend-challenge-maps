export const FETCH_RESTAURANTS_REQUEST = 'FETCH_RESTAURANTS_REQUEST';
export const FETCH_RESTAURANTS_SUCCESS = 'FETCH_RESTAURANTS_SUCCESS';
export const FETCH_RESTAURANTS_FAILURE = 'FETCH_RESTAURANTS_FAILURE';

const fetchRestaurantsRequest = () => ({
    type: FETCH_RESTAURANTS_REQUEST
});

const fetchRestaurantsSuccess = (payload) => ({
    type: FETCH_RESTAURANTS_SUCCESS,
    payload
});

const fetchRestaurantsFailure = (err) => ({
    type: FETCH_RESTAURANTS_FAILURE,
    payload:err,
});

export const fetchRestaurants = (params) => {
   return (dispatch) => {
       dispatch(fetchRestaurantsRequest());
       const urlParams = new URLSearchParams(params);
       return fetch(`/-/search?${urlParams}`)
           .then(response => response.json())
           .then((res) => {               
            dispatch(fetchRestaurantsSuccess(res.businesses));
        }).catch((error) => {
            const errorMsg = error && error.messages;
            return dispatch(fetchRestaurantsFailure(errorMsg))
        })
    }
}
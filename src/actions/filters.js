export const SELECT_RESTAURANTS_FILTER = 'SELECT_RESTAURANTS_FILTER';


export const updateRestaurantsFilter = (filterBy) => ({
    type: SELECT_RESTAURANTS_FILTER,
    payload: filterBy,
});
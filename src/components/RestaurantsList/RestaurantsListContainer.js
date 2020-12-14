import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import RestaurantsList from "./RestaurantsList";
import { fetchRestaurants } from "./../../actions/restaurants";

export function mapStateToProps(state) {
  return {
    restaurants: state.restaurants.restaurants,
    loading: state.restaurants.loading,
    selectedFilter: state.filters.selectedFilter,
  };
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchRestaurants,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsList);

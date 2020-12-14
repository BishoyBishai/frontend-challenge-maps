import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import GoogleMap from "./GoogleMap";

export function mapStateToProps(state) {
  return {
    locations: state.restaurants.restaurants.map(
      (r) =>
        r &&
        r.coordinates && {
          lat: r.coordinates.latitude,
          lng: r.coordinates.longitude,
        }
    ),
  };
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GoogleMap);

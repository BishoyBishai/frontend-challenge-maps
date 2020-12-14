import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FiltersList from './FiltersList';
import { updateRestaurantsFilter  } from '../../actions/filters';

export function mapStateToProps(state) {
  return {
    filters: state.filters.filters,
    selectedFilter: state.filters.selectedFilter,
  };
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      updateRestaurantsFilter,
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FiltersList);

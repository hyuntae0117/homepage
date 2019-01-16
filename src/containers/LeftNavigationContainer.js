import LeftNavigation from '../components/LeftNavigation';
import * as actions from '../actions/ActionConfig';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
  items: state
});

const mapDispatchToProps = (dispatch) => ({
  onClick: (index) => dispatch(actions.click(index)),
  onRemove: (index) => dispatch(actions.remove(index)),
  onCreate: (index) => dispatch(actions.create())
})

const LeftNavigationContainer = connect(mapStateToProps, mapDispatchToProps)(LeftNavigation);

export default LeftNavigationContainer
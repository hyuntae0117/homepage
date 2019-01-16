import LeftNavigation from '../components/LeftNavigation';
import * as actions from '../actions/ActionConfig';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
  state: state
});

const mapDispatchToProps = (dispatch) => ({
  onClick: (id) => dispatch(actions.click(id)),
  onRemove: (index) => dispatch(actions.remove(index)),
  onModify: (index) => dispatch(actions.modify(index)),
  onCreate: () => dispatch(actions.create()),
  onEditModeChange: () => dispatch(actions.editModeChange()),
  onChangeTitle: (index, title) => dispatch(actions.changeTitle(index, title)),
  onSave: (index, title) => dispatch(actions.save(index, title))
})

const LeftNavigationContainer = connect(mapStateToProps, mapDispatchToProps)(LeftNavigation);

export default LeftNavigationContainer
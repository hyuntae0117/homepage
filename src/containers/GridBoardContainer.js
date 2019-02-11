import GridBoard from "../components/GridBoard";
import * as actions from "../actions/Board";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  state: state
});

const mapDispatchToProps = dispatch => ({
  onClick: id => dispatch(actions.click(id))
});

const GridBoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GridBoard);

export default GridBoardContainer;

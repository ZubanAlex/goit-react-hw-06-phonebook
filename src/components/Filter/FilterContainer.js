import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import * as selectors from "../../redux/selectors";
import Filter from "./Filter";

const mapStateToProps = (store) => ({
  filterValue: selectors.getSearhValue(store),
});

const mapDispatchToProps = (dispatch) => ({
  onChangeFilter: (value) => dispatch(actions.searchContact(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

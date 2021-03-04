import { bindActionCreators } from "redux";
import { connect as reduxConnect } from "react-redux";
import AddPerson from '../components/AddPerson';
import * as addPersonAction from '../actions/add-person';

const mapStateToProps = state => ({
    state: state.addPerson
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        ...addPersonAction
    }, dispatch)
});
export default reduxConnect(mapStateToProps, mapDispatchToProps)(AddPerson);
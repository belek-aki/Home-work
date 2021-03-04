import { bindActionCreators } from "redux";
import { connect as reduxConnect } from "react-redux";
import PersonList from '../components/PersonList';

const mapStateToProps = state => ({
    state: state.login
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({

    }, dispatch)
});
export default reduxConnect(mapStateToProps, mapDispatchToProps)(PersonList);
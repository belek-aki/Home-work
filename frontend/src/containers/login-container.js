import { bindActionCreators } from "redux";
import { connect as reduxConnect } from "react-redux";
import LoginPage from '../components/LoginPage';
import * as loginAction from '../actions/login-action';

const mapStateToProps = state => ({
    state: state.login
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        ...loginAction
    }, dispatch)
});
export default reduxConnect(mapStateToProps, mapDispatchToProps)(LoginPage);
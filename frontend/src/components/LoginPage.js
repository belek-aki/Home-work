import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './login.css'
import {USER_TOKEN_KEY} from "../store/storage_keys";
import {Redirect} from "react-router-dom";


export default function LoginPage({state, actions}) {

    const isLogin = () => !!localStorage.getItem(USER_TOKEN_KEY);
    console.log(state)
    const {usernameError, passwordError, isLoading, isError} = state;
    const onChange = event => {
        actions.changeLoginField(event.target.name, event.target.value)
    };
    const onSubmit = (event) => {
        event.preventDefault();
        actions.login();
    };

    const renderForm = () => (<form onSubmit={onSubmit}>
        <Box pt={3} pb={3}>
            <TextField
                onChange={onChange}
                variant="outlined"
                margin="normal"
                name="login"
                fullWidth
                label="Имя пользователя"
                error={!!usernameError}
                helperText={usernameError}
            />
            <TextField
                onChange={onChange}
                name="password"
                variant="outlined"
                margin="normal"
                fullWidth
                label="Пароль"
                type="password"
                error={!!passwordError}
                helperText={passwordError}
            />
        </Box>
        <Box pb={3}>
            <Button
                disabled={isLoading}
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
            >
                Войти
            </Button>
        </Box>
        {isError && renderError()}
    </form>);

    const renderError = () => (<Typography
        component="p"
        color="error"
        align="center"
    >Неверный пароль или логин! </Typography>);

    return (
        <div className="Login">
            {isLogin() && <Redirect to="/home" />}
            <div className="Login-content">
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                    style={{minHeight: '100vh'}}>
                    <div className="card-login">
                        <Typography component="h1" variant="h5">
                            Авторизация
                        </Typography>
                        {renderForm()}
                    </div>
                </Grid>
            </div>
        </div>
    );
}

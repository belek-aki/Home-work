import React from 'react'
import {Button, FormHelperText, TextField, Typography} from '@material-ui/core'
import './main.css'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import SideBar from "./SideBar";


export default function AddPerson({state, actions}) {
    console.log(actions)
    const {
        last_nameError,
        first_nameError,
        patronymic_nameError,
        addressError,
        phoneError,
        innError
    } = state;

    const onChange = event => {
        actions.changeAddPersonField(event.target.name, event.target.value)
    };
    const onSubmit = (event) => {
        event.preventDefault();
        actions.addPersonChange();
    };
    const renderForm = () => (<form onSubmit={onSubmit}>
        <Grid container direction='row' justify='center'>
            <div style={{paddingTop: 10}} className='main-page-row'>
                <Box pt={2}>
                    <FormHelperText id='filled-weight-helper-text'>Фамилия</FormHelperText>
                    <TextField
                        id='outlined-basic'
                        name="last_name"
                        onChange={onChange}
                        variant='outlined'
                        error={!!last_nameError}
                        helperText={last_nameError}
                    />
                </Box>
                <Box pt={2}>
                    <FormHelperText id='filled-weight-helper-text'>Имя</FormHelperText>
                    <TextField
                        id='outlined-basic'
                        name="first_name"
                        onChange={onChange}
                        variant='outlined'
                        error={!!first_nameError}
                        helperText={first_nameError}
                    />
                </Box>
                <Box pt={2}>
                    <FormHelperText id='filled-weight-helper-text'>Отчество</FormHelperText>
                    <TextField
                        id='outlined-basic'
                        name="patronymic_name"
                        onChange={onChange}
                        variant='outlined'
                        error={!!patronymic_nameError}
                        helperText={patronymic_nameError}
                    />
                </Box>
            </div>
            <div className='main-page-row'>
                <Box pt={2}>
                    <FormHelperText id='filled-weight-helper-text'>Адрес</FormHelperText>
                    <TextField
                        id='outlined-basic'
                        name="address"
                        onChange={onChange}
                        variant='outlined'
                        error={!!addressError}
                        helperText={addressError}
                    />
                </Box>
                <Box pt={2}>
                    <FormHelperText id='filled-weight-helper-text'>Тел</FormHelperText>
                    <TextField
                        id='outlined-basic'
                        type='number'
                        name="phone_number"
                        onChange={onChange}
                        variant='outlined'
                        error={!!phoneError}
                        helperText={phoneError}
                    />
                </Box>
                <Box pt={2}>
                    <FormHelperText id='filled-weight-helper-text'>ИНН номер</FormHelperText>
                    <TextField
                        id='outlined-basic'
                        type="number"
                        name="inn"
                        onChange={onChange}
                        variant='outlined'
                        error={!!innError}
                        helperText={innError}
                    />
                </Box>
            </div>
            <Grid container direction='row' justify='center' alignItems='center'>
                <Box pt={3}>
                    <Button
                        variant='contained'
                        style={{marginBottom: 10}}
                        color='primary'
                        type="submit"
                    >Добавить
                    </Button>
                </Box>
            </Grid>
        </Grid>
    </form>)

    return (
        <div className='main-page-card'>
            <SideBar />
            <Typography style={{marginTop: 20}} variant='h4' className='main-page-typography' gutterBottom>
                Добавить персональные данные
            </Typography>
            {renderForm()}
        </div>
    )
}
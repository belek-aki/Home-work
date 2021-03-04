import {Container, FormHelperText, Typography} from "@material-ui/core";
import Card from '@material-ui/core/Card';
import {PERSONS, USER_TOKEN_KEY} from "../store/storage_keys";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import SideBar from "./SideBar";
import {Redirect} from "react-router-dom";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        margin: 20,
        padding: 20,
        background: "darkgrey"
    }
})

export default function PersonList() {
    const classes = useStyles();
    const persons = JSON.parse(localStorage.getItem(PERSONS))
    const isLogin = () => !!localStorage.getItem(USER_TOKEN_KEY);
    // const data = persons.map()
    console.log(persons)
    return (
        <Container maxWidth="md">
            {!isLogin() && <Redirect to="/home" />}
            <SideBar />
            <Typography variant="h3" gutterBottom> Список пользовательских данных </Typography>
            {(persons || []).map((person) => (
                <Card className={classes.root} variant="outlined">
                    <Typography variant="h6" gutterBottom>Фамилия: {person.last_name}</Typography>
                    <Typography variant="h6" gutterBottom>Имя: {person.first_name}</Typography>
                    <Typography variant="h6" gutterBottom>Отчество: {person.patronymic_name}</Typography>
                    <Typography variant="h6" gutterBottom>Адрес: {person.address}</Typography>
                    <Typography variant="h6" gutterBottom>Тел: {person.phone_number}</Typography>
                    <Typography variant="h6" gutterBottom>ИНН номер: {person.inn}</Typography>
                </Card>
            ))}
        </Container>
    )
}
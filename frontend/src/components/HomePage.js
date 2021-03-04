import Box from "@material-ui/core/Box";
import {Button, Container} from "@material-ui/core";
import {Link} from "react-router-dom";
import "./side-bar.css"

export default function HomePage() {
    return (
        <Container maxWidth="md">
            <Box pt={3}>
                <Link to={'/add-person'}>
                    <Button className="button" variant="contained">
                        Добавить данные
                    </Button>
                </Link>
            </Box>
            <Box pt={2}>
                <Link to={'/login'}>
                    <Button className="button" variant="contained">Войти</Button>
                </Link>
            </Box>
        </Container>
    )
}
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";
import './side-bar.css'

export default function SideBar() {
    return (
        <div className="side-bar-container">
            <Link className="link-component" to={'/home'}>
                <Button className="button" variant="contained">
                    Главный
                </Button>
            </Link>
            <Link className="link-component" to={'/add-person'}>
                <Button className="button" variant="contained">
                    Добавить данные
                </Button>
            </Link>
            <Link className="link-component" to={'/person-list'}>
                <Button className="button" variant="contained">
                    Список пользователя
                </Button>
            </Link>
            <Link className="link-component" to={'/login'} >
                <Button className="button" variant="contained">
                    Войти
                </Button>
            </Link>
        </div>
    )
}
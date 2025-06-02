import { Link, Outlet, useLocation } from "react-router-dom"
import { Header, GoBack, Title, Footer, Description, WhiteBackGround } from "../styles/layoutStyles"
import { IoHome } from "react-icons/io5";

export const Layout: React.FC = () => {

    const pageInfo: Record<string, { title: string; description: string }> = {
        "/calculator": {
            title: "Calculadora",
            description: "Crea una calculadora totalmente funcional."
        },
        "/clock": {
            title: "Reloj",
            description: "Crea una reloj con la hora actual, que tenga también, funcion de cronometro."
        }
    }

    const location = useLocation();
    const currentPath = location.pathname;
    const info = pageInfo[currentPath];

    return <>
        <Header>
            <GoBack>
                <Link to="/home">
                    <IoHome size={20}/>
                </Link>
            </GoBack>
            <Title>{info?.title || "Ejercicio"}</Title>
            <Description>{info?.description || "Descripcion del ejercicio"}</Description>
        </Header>
        <WhiteBackGround>
            <Outlet />
        </WhiteBackGround>
        <Footer>
            <p>Adrián Martín García</p>
        </Footer>
    </>
}